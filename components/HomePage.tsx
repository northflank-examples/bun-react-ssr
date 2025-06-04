export function HomePage() {
  return (
    <html>
      <head>
        <title>Northflank Bun + React Starter</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div className="container">
          <h1>Northflank Bun + React Starter</h1>
          <p>
            A getting started template using Bun.serve with React
            server-side rendering, optimized for deployment on Northflank's
            cloud platform.
          </p>

          <div className="nav">
            <a href="/api/hello">Try API Example</a>
          </div>

          <h2>What's included:</h2>
          <ul>
            <li>
              <strong>Bun.serve</strong> - Ultra-fast HTTP server and JavaScript
              runtime
            </li>
            <li>
              <strong>React SSR</strong> - Server-side rendering with React
            </li>
            <li>
              <strong>TypeScript</strong> - Type-safe development out of the box
            </li>
            <li>
              <strong>Northflank Ready</strong> - Optimized for seamless
              deployment
            </li>
          </ul>

          <h2>Available routes:</h2>
          <ul>
            <li>
              <code>/</code> - This home page
            </li>
            <li>
              <code>/api/hello</code> - JSON API endpoint example
            </li>
          </ul>

          <div className="docs-links">
            <strong>Learn more:</strong>
            <div>
              <a
                href="https://northflank.com/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Northflank Docs
              </a>
              <a
                href="https://bun.sh/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bun Documentation
              </a>
              <a
                href="https://react.dev/reference/react"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Reference
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
