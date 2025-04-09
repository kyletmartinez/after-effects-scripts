/**
 * @name Add Text Animation
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add text animation to the selected text layers using a text animator.
 *
 * Use the popup window to set the "Based On" value using familiar options from After Effects:
 * * "Characters"
 * * "Characters Excluding Spaces"
 * * "Words"
 * * "Lines"
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function addTextAnimation() {

    function addTextAnimation(layer, time, basedOnOption) {
        var textProperty = layer.property("ADBE Text Properties");
        var textAnimators = textProperty.property("ADBE Text Animators");
        var animator = textAnimators.addProperty("ADBE Text Animator");
        var textSelectors = animator.property("ADBE Text Selectors");
        var textSelector = textSelectors.addProperty("ADBE Text Selector");
        var endProperty = textSelector.property("ADBE Text Percent End");
        endProperty.setValuesAtTimes([time, time + 1], [0, 100]);
        var advancedProperties = textSelector.property("ADBE Text Range Advanced");
        advancedProperties.property("ADBE Text Range Type2").setValue(basedOnOption);
        advancedProperties.property("ADBE Text Selector Mode").setValue(2);
        advancedProperties.property("ADBE Text Selector Smoothness").setValue(0);
        var animatorProperties = animator.property("ADBE Text Animator Properties");
        var textOpacity = animatorProperties.addProperty("ADBE Text Opacity");
        textOpacity.setValue(0);
    }

    function getBasedOnOption() {
        var win = new Window("dialog", "Based On");
        win.orientation = "column";
        win.alignChildren = ["fill", "top"];
        var basedOnOptions = ["Characters", "Characters Excluding Spaces", "Words", "Lines"];
        var dropdown = win.add("dropdownlist", undefined, basedOnOptions);
        dropdown.selection = 2;
        var buttons = win.add("group");
        buttons.add("button", undefined, "Cancel", {"name": "cancel"});
        buttons.add("button", undefined, "Okay", {"name": "ok"});
        return (win.show() === 1) ? dropdown.selection.index + 1 : false;
    }

    app.beginUndoGroup("Add Word By Word Text Animation");

    var basedOnOption = getBasedOnOption();
    if (basedOnOption !== false) {
        var comp = app.project.activeItem;
        var time = comp.time;
        var layers = comp.selectedLayers;
        var numLayers = layers.length;
        for (var l = 0; l < numLayers; l++) {
            var layer = layers[l];
            if (layer instanceof TextLayer) {
                addTextAnimation(layer, time, basedOnOption);
            }
        }
    }
    app.endUndoGroup();
})();
