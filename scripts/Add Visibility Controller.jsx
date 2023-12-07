/**
 * @name Add Visibility Controller
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add a checkbox that controls the visibility (opacity) for a selected layer.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Add Visibility Controller");
    var comp = app.project.activeItem;
    var layer = comp.selectedLayers[0];
    var property = comp.selectedProperties[0];
    var effect = layer.property("ADBE Effect Parade").addProperty("ADBE Checkbox Control");
    effect.name = "Visible";
    effect.property(1).setValue(true);
    layer.transform.opacity.expression = "effect(\"Visible\")(\"Checkbox\").value * value;"
    app.endUndoGroup();
})()