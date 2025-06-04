import { renderToReadableStream } from "react-dom/server";
import { HomePage } from "./components/HomePage";

const server = Bun.serve({
  port: 3001,
  async fetch(req) {
    const url = new URL(req.url);

    switch (url.pathname) {
      case "/": {
        const stream = await renderToReadableStream(<HomePage />);
        return new Response(stream, {
          headers: { "Content-Type": "text/html" },
        });
      }
      
      case "/styles.css": {
        const file = Bun.file("./public/styles.css");
        return new Response(file, {
          headers: { "Content-Type": "text/css" },
        });
      }
      
      case "/api/hello": {
        return new Response(
          JSON.stringify({ 
            message: "Hello from Bun!", 
            timestamp: new Date().toISOString(),
            bun: "🥟"
          }), 
          {
            headers: { "Content-Type": "application/json" },
          }
        );
      }
      
      default:
        return new Response("404 Not Found", { 
          status: 404,
          headers: { "Content-Type": "text/plain" }
        });
    }
  },
});

console.log(`🚀 Server running on http://localhost:${server.port}`);
console.log(`📝 Try these routes:`);
console.log(`   • http://localhost:${server.port}/`);
console.log(`   • http://localhost:${server.port}/api/hello`);
