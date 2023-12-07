/**
 * @name Toggle Onion Skinning
 * @version 1.3
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Toggle onion skinning in the current composition.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function(){
    function enableOnionSkin(comp) {
        var color = [0,0,0];
        var name = "Onion Skin";
        var width = comp.width;
        var height = comp.height;
        var pixelAspect = comp.pixelAspect;
        var layer = comp.layers.addSolid(color, name, width, height, pixelAspect);
        layer.adjustmentLayer = true;
        layer.label = 0;
        layer.moveToBeginning();
        comp.comment = comp.comment + "*km-os*" + layer.source.id;
        var effect = layer.property("ADBE Effect Parade").addProperty("CC Wide Time");
        effect.name = name;
    }

    function disableOnionSkin(comp) {
        var comment = comp.comment.split("*km-os*");
        comp.comment = comment[0];
        var id = parseInt(comment[1]);
        var item = app.project.itemByID(id);
        if (item !== null) {
            item.remove();
        }
    }

    var comp = app.project.activeItem;
    if (comp !== null && (comp instanceof CompItem)) {
        var comment = comp.comment;
        if (comment.indexOf("*km-os*") > -1) {
            disableOnionSkin(comp);
        } else {
            enableOnionSkin(comp);
        }
    }
})();