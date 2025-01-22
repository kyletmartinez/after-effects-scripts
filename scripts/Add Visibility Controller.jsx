/**
 * @name Add Visibility Controller
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add a checkbox that controls the visibility, using opacity, for a selected layer.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addVisibilityController() {
    app.beginUndoGroup("Add Visibility Controller");
    var comp = app.project.activeItem;
    var layer = comp.selectedLayers[0];
    var effect = layer.property("ADBE Effect Parade").addProperty("ADBE Checkbox Control");
    effect.name = "Visible";
    effect.property(1).setValue(true);
    var expression = "effect(\"Visible\")(\"ADBE Checkbox Control-0001\").value * value;";
    layer.transform.opacity.expression = expression;
    app.endUndoGroup();
})();