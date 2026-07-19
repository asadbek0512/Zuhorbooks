module.exports = {
  apps: [{
    name: "zuhorbooks-api",
    script: "dist/server.js",
    cwd: __dirname,
    env: { PORT: "5003" }
  }]
}
