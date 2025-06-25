/**
 * @name Toggle Onion Skinning
 * @version 2.2
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Toggle onion skinning in the current composition using "CC Wide Time".
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function toggleOnionSkinning(){

    function enableOnionSkin(comp) {
        var width = comp.width;
        var height = comp.height;
        var pixelAspect = comp.pixelAspect;
        var layer = comp.layers.addSolid([0, 0, 0], "Onion Skin", width, height, pixelAspect);
        layer.adjustmentLayer = true;
        layer.label = 0;
        layer.moveToBeginning();
        comp.comment = comp.comment + "*onion-skinning*" + layer.source.id;
        var effect = layer.property("ADBE Effect Parade").addProperty("CC Wide Time");
        effect.name = "Onion Skin";
    }

    function disableOnionSkin(comp) {
        var comment = comp.comment.split("*onion-skinning*");
        comp.comment = comment[0];
        var id = Number(comment[1]);
        var item = app.project.itemByID(id);
        if (item !== null) {
            item.remove();
        }
    }

    app.beginUndoGroup("Toggle Onion Skinning");
    var comp = app.project.activeItem;
    var comment = comp.comment;
    if (comment.indexOf("*onion-skinning*") > -1) {
        disableOnionSkin(comp);
    } else {
        enableOnionSkin(comp);
    }
    app.endUndoGroup();
})();
