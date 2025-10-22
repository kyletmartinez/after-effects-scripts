/**
 * @name Parent Opacity
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Connect the opacity of a layer to the opacity of the parent layer. Both opacity
 * properties can be animated individually however the lowest opacity value will always be used.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function parentOpacity() {
    var expression = "Math.min(value, thisLayer.parent.transform.opacity.value);";
    app.beginUndoGroup("Parent Opacity");
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    for (var l = 0; l < numLayers; l++) {
        var layer = layers[l];
        if (layer.parent) {
            var opacity = layer.property("ADBE Transform Group").property("ADBE Opacity");
            opacity.expression = expression;
        }
    }
    app.endUndoGroup();
})();
