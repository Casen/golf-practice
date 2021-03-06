requirejs.config({
  baseUrl: "./javascripts/frontend/",
  paths: {
    jquery: "vendor/jquery-1.9.1",
    underscore: "vendor/underscore-1.4.3",
    backbone: "vendor/backbone-1.0.0",
    handlebars: "vendor/handlebars-1.0.rc.1",
    text: "vendor/require-text-2.0.3",
    chaplin: "vendor/chaplin-0.8.1",
    dropzone: "../dropzone"
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    handlebars: {
      exports: "Handlebars"
    }
  }
});

require(["application"], function(Application) {
  return (new Application).initialize();
});
