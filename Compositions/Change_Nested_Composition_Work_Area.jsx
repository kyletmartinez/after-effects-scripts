/**
 * @name Change Nested Composition Work Area
 * @version 2.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Reset the Work Area of the current composition and all nested compositions to cover
 * the full duration of the composition.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function changeNestedCompositionWorkArea() {

    function changeCompWorkArea(comp) {
        comp.workAreaStart = 0;
        comp.workAreaDuration = comp.duration;
        var layers = comp.layers;
        for (var l = layers.length; l > 0; l--) {
            var layer = layers[l];
            if (layer.source instanceof CompItem) {
                changeCompWorkArea(layer.source);
            }
        }
    }

    app.beginUndoGroup("Change Nested Composition Work Area");
    var comp = app.project.activeItem;
    changeCompWorkArea(comp);
    app.endUndoGroup();
})();
