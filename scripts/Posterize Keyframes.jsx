/**
 * @title Posterize Keyframes
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Posterize all selected keyframes in a composition to be on 2s.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Posterize Keyframes");
    var comp = app.project.activeItem;
    var frameDuration = comp.frameDuration;
    var properties = comp.selectedProperties;
    var numProperties = properties.length;
    for (var p = 0; p < numProperties; p++) {
        var property = properties[p];
        if (property.isTimeVarying == true) {
            for (var k = property.numKeys; k > 0; k--) {
                var oldTime = property.keyTime(k);
                var oldValue = property.keyValue(k);
                var oldFrame = Math.floor(oldTime / frameDuration);
                if (oldFrame % 2 != 0) {
                    writeLn(oldFrame + " (" + k + ") is ODD. Adjusting...");
                    property.removeKey(k);
                    var newFrame = oldFrame - 1;
                    var newTime = newFrame * frameDuration;
                    property.setValueAtTime(newTime, oldValue);
                } else {
                    writeLn(oldFrame + " (" + k + ") is EVEN. Skipping...");
                }
            }
        }
    }
    app.endUndoGroup();
})()