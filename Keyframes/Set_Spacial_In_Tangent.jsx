/**
 * @name Set Spacial In Tangent
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Set the spacial in tangent for the selected position keyframe to be 50% of the
 * distance between the current keyframe and the previous keyframe. Helpful in animating natural
 * mouse cursor movements.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function setSpacialInTangent() {

    var comp = app.project.activeItem;
    var layer = comp.selectedLayers[0];
    var position = layer.property("ADBE Transform Group").property("ADBE Position");
    var keyIndex = position.selectedKeys[0];

    if (keyIndex < 2) return;

    var currentValue  = position.keyValue(keyIndex);
    var previousValue = position.keyValue(keyIndex - 1);

    var inTangent = [];
    var outTangent = position.keyOutSpatialTangent(keyIndex);

    var dimensions = currentValue.length;
    for (var d = 0; d < dimensions; d++) {
        inTangent[d] = (previousValue[d] - currentValue[d]) * 0.5;
    }

    app.beginUndoGroup("Set Spacial In Tangent To 50%");
    position.setSpatialTangentsAtKey(keyIndex, inTangent, outTangent);
    app.endUndoGroup();

})();
