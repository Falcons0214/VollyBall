const appName = "ハイキュー!!";

module.exports = {
  chainWebpack: (config) => {
    config
      .plugin("define")
      .tap((args) => {
        const env = args[0]["process.env"];
        env["VUE_APP_NAME"] = JSON.stringify(appName);
        return args;
      })
      .end()
      .plugin("html")
      .tap((args) => {
        args[0].title = appName;
        return args;
      })
      .end();
  },
  transpileDependencies: ["vuetify"],
};
