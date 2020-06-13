import App from "../src/components/Index";
import express from "express";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/*", (req, res) => {
  const markup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
        <link rel="stylesheet" href="/main.css">
        <script src="/bundle.js" defer></script>
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
