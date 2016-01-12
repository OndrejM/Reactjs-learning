/* object holding information about app context.
  lbl - translation strings, config - configuration)
*/
appCtx = (function() {
  var appCtx = {};
  appCtx._labels = {};
  appCtx.setLang = function(lang) {
    if (this._labels[lang] !== undefined) {
      this._lang = lang;
      this.lbl = this._labels[lang];
    }
  };
  appCtx.registerLang = function(key, translation) {
    this._labels[key] = translation;
    // last registered lang is default
    this.setLang(key);
  }
  return appCtx;
})();
