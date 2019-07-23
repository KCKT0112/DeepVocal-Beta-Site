// vue.config.js
module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
	
  },

  lintOnSave: process.env.NODE_ENV !== 'production',
  runtimeCompiler: true,

  css: {
    modules: true
  },

  productionSourceMap: false,

  pluginOptions: {
    i18n: {
      locale: 'zh-cn',
      fallbackLocale: 'zh-cn',
      localeDir: 'locales',
      enableInSFC: false
    }
  },

  configureWebpack: {
      module: {
        rules: [
          {
            test: /\.txt$/i,
            use: 'raw-loader',
          },
        ]
      }
  }

}
