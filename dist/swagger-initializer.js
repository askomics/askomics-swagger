const DisableTryItOutPlugin = function() {
  return {
    statePlugins: {
      spec: {
        wrapSelectors: {
          allowTryItOutFor: () => () => false
        }
      }
    }
  }
}

window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "swagger.yaml",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl,
      DisableTryItOutPlugin
    ],
    layout: "StandaloneLayout",
    onComplete: function () {
        var lockedIcon = document.querySelector(".svg-assets defs symbol#locked");
        var unlockedIcon = document.querySelector(".svg-assets defs symbol#unlocked");
        lockedIcon.id = "unlocked";
        unlockedIcon.id = "locked";
      },
  });

  //</editor-fold>
};
