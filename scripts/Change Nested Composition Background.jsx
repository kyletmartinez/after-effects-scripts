/**
 * @name Change Nested Composition Background
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Change the background color of the current composition and all nested compositions.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function changeNestedCompositionBackgroundColor() {

    function changeCompBackgroundColor(comp, backgroundColor) {
        comp.bgColor = backgroundColor;
        var layers = comp.layers;
        for (var l = layers.length; l > 0; l--) {
            var layer = layers[l];
            if (layer.source instanceof CompItem) {
                changeCompBackgroundColor(layer.source, backgroundColor);
            }
        }
    }

    function getBackgroundColor(hex) {
        return [
            parseInt(hex.substr(-6, 2), 16) / 255,
            parseInt(hex.substr(-4, 2), 16) / 255,
            parseInt(hex.substr(-2), 16) / 255
        ];
    }

    app.beginUndoGroup("Change Nested Composition Background");
    var hexColor = prompt("New Background Color", "808080");
    if (hexColor !== null && hexColor.length > 0) {
        if (hexColor.match(/#?[0-9A-F]{3}/gi)) {
            var color = getBackgroundColor(hexColor);
            var comp = app.project.activeItem;
            changeCompBackgroundColor(comp, color);
        }
    }
    app.endUndoGroup();
})();
