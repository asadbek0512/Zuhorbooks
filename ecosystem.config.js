module.exports = {
  apps: [{
    name: "zuhorbooks-api",
    script: "dist/server.js",
    cwd: "/home/asadbek/sites/zuhorbooks/backend",
    env: { PORT: "5003" }
  }]
}
