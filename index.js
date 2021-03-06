/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-themed-syntax',
   init: function(app) {
    this._super.init && this._super.init.apply(this, arguments);

    this.options = this.options || {};
    this.options.babel = this.options.babel || {};
    this.options.babel.optional = this.options.babel.optional || [];

    if (this.options.babel.optional.indexOf('es7.decorators') === -1) {
      this.options.babel.optional.push('es7.decorators');
    }
  },
  included: function(app, parentAddon) {
     // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      this.app = app = app.app;
    }
    this._super.included(app);

    var target = (parentAddon || app);

    var options = target.options.emberThemedSyntax || {};
    //TODO: make each theme optional

    target.import(target.bowerDirectory + "/highlightjs/highlight.pack.min.js");
    target.import(target.bowerDirectory + "/code-highlight-linenums/code-highlight-linenums.js");
    // Just borrow some default styles
    target.import(target.bowerDirectory + "/hljs-themes/themes/dist/github-gist.min.css");
    target.import(target.bowerDirectory + "/hljs-themes/themes/dist/hybrid.min.css");
    target.import(target.bowerDirectory + "/hljs-themes/themes/dist/line-numbers.min.css");

  }
};
