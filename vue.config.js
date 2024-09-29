const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/global.scss";`,
      },
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#b61515", // Customize Ant Design variables
            "link-color": "#1890ff",
            "border-radius-base": "2px",
          },
          javascriptEnabled: true,
        },
      },
    },
  },
});
