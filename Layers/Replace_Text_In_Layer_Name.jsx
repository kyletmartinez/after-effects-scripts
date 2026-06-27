/**
 * @name Replace Text In Layer Name
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Replace text in the name of all selected layers. RegEx is accepted.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */


(function replaceTextInLayerName() {

    function getReplacementData() {
        var win = new Window("dialog", "Replace Text");
        win.alignChildren = ["fill", "top"];
        var panel = win.add("panel");
        panel.alignChildren = ["left", "top"];
        var findRow = panel.add("group");
        var findLabel = findRow.add("statictext", undefined, "Find:");
        findLabel.preferredSize.width = 60;
        findLabel.justify = "right";
        var findEdit = findRow.add("edittext", undefined, "this text");
        findEdit.preferredSize.width = 300;
        var useRegex = findRow.add("checkbox", undefined, "Regex");
        var ignoreCase = findRow.add("checkbox", undefined, "Ignore Case");
        var replaceRow = panel.add("group");
        var replaceLabel = replaceRow.add("statictext", undefined, "Replace:");
        replaceLabel.preferredSize.width = 60;
        replaceLabel.justify = "right";
        var replaceEdit = replaceRow.add("edittext", undefined, "with this text");
        replaceEdit.preferredSize.width = 300;
        var buttonRow = win.add("group");
        buttonRow.alignChildren = ["right", "center"];
        buttonRow.add("button", undefined, "Cancel", {"name": "cancel"});
        buttonRow.add("button", undefined, "Okay", {"name": "ok"});
        if (win.show() === 1) {
            return {
                "useRegex": useRegex.value,
                "ignoreCase": ignoreCase.value,
                "findString": findEdit.text,
                "replaceString": replaceEdit.text
            };
        } else {
            return false;
        }
    }

    app.beginUndoGroup("Replace Text in Layer Name");
    var data = getReplacementData();
    if (data !== false) {
        var flags = (data.ignoreCase === true) ? "gi" : "i";
        var regex = new RegExp(data.findString, flags);
        var find = (data.useRegex === true) ? regex : data.findString;
        var replace = data.replaceString;
        var comp = app.project.activeItem;
        var layers = comp.selectedLayers;
        var numLayers = layers.length;
        for (var l = 0; l < numLayers; l++) {
            var layer = layers[l];
            layer.name = layer.name.replace(find, replace);
        }
    }
    app.endUndoGroup();
})();
