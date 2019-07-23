import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key);
    }
  })
  return messages
}


let i18nLocale = function(envLocale) {
  let JsSrc = (navigator.language || navigator.browserLanguage).toLowerCase();
  let l1 = localStorage.getItem('locale');
  // eslint-disable-next-line
  console.log("localStorage language: " +l1);
  // eslint-disable-next-line
  console.log("Browser language: " + JsSrc);
  if (l1 != null){
    return l1;
  } else if (JsSrc == 'zh-cn' || JsSrc == 'zh-tw'){
    return JsSrc;
  } else if (JsSrc.includes('en') && (JsSrc.includes('us') || JsSrc.includes('hk') || JsSrc.includes('gb'))){
    return 'en-us'; // Notice: if one has idea to do different actions among us, hk, gb in en language, rewrite here
  } else {
    return envLocale || 'en-us';
  }
};

let smartFallbackLocale = (defaultLocale) => {
  let JsSrc = (navigator.language || navigator.browserLanguage).toLowerCase();
  if (JsSrc == "zh-cn" || JsSrc == "en-us" || JsSrc == "zh-tw"){
    return JsSrc;
  } else if (JsSrc.endsWith('cn')){
    return 'zh-cn';
  } else if (JsSrc.endsWith('tw')){
    return 'zh-tw';
  } else if (JsSrc.includes('en')){
    return 'en-us';
  } else {
    return defaultLocale;
  }
}

let proxy = (v, msg) => {
  // eslint-disable-next-line
  console.log(msg + v);
  return v;
}

export default new VueI18n({
  locale: proxy(i18nLocale(process.env.VUE_APP_I18N_LOCALE || 'en-us'), "selected locale: "),
  fallbackLocale: proxy(smartFallbackLocale(process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en-us'), "fallback locale: "),
  messages: loadLocaleMessages()
})
