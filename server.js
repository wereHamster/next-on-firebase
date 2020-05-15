const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const httpProxy = require("http-proxy");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const proxy = httpProxy.createProxyServer({});

  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);

    if (parsedUrl.pathname.startsWith("/__/")) {
      proxy.web(req, res, { target: "http://localhost:5000" });
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
