/**
 * @title Lock All Layers
 * @version 1.3
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Lock every layer in every conmposition in the project
 *
 * @license This script is provided "as is," without warranty of any kind,
 * expressed or implied. In no event shall the author be held liable for any
 * damages arising in any way from the use of this script
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function locAllLayers (comp) {
        var layers = comp.layers;
        var numLayers = layers.length;
        for (var l = 1; l <= numLayers; l++) {
            var layer = layers[l];
            layer.locked = true;
        }
    }

    app.beginUndoGroup("Lock Layer(s)");
    var project = app.project;
    var items = project.items;
    var numItems = items.length;
    for (var i = 1; i <= numItems; i++) {
        var item = items[i];
        if (item instanceof CompItem) {
            lockAllLayers(item);
        }
    }
    app.endUndoGroup();
})();