/**
 * @title Change Nested Composition Background
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Change the background color of the current composition using a hexcode. All nested
 * precomps will be affected as well (and precomps within those precomps and so on).
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function changeCompBackgroundColor(comp, aeColor) {
        comp.bgColor = aeColor;
        var layers = comp.layers;
        var numLayers = layers.length;
        for (var l = 1; l <= numLayers; l++) {
            var layer = layers[l];
            layer.locked = false;
            if (layer.source instanceof CompItem) {
                changeCompBackgroundColor(layer.source, aeColor);
            } 
        }
    }

    function getAEcolor(rgb) {
        function map_range(value, low1, high1, low2, high2) {
            return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
        }
        var r = map_range(rgb.red, 0, 255, 0, 1);
        var g = map_range(rgb.green, 0, 255, 0, 1);
        var b = map_range(rgb.blue, 0, 255, 0, 1);
        return [r, g, b];
    }

    function hexToRgb(hex) {
        var hexInt = parseInt(hex, 16);
        var r = (hexInt >> 16) & 255;
        var g = (hexInt >> 8) & 255;
        var b = hexInt & 255;
        return {red: r, green: g, blue: b}
    }

    app.beginUndoGroup("Change Nested Composition Background");
    var backgroundHexCode = prompt("Background Color (Hex Code)", "");
    if (backgroundHexCode !== null && backgroundHexCode.length > 0) {
        var rgb = hexToRgb(backgroundHexCode);
        var aeColor = getAEcolor(rgb);
        var comp = app.project.activeItem;
        changeCompBackgroundColor(comp, aeColor);
    }
    app.endUndoGroup();
})()