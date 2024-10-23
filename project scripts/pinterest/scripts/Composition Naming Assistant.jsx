/**
 * @name Composition Naming Assistant
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Assist with updating the naming for the current composition based on a standard
 * naming convention. UI should update correctly based on naming.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function compositionNamingAssistant() {

    /**
     * Get the ratio for the current composition.
     * @return {String} - ratio
     */
    function getRatio() {
        var comp = app.project.activeItem;
        var difference = comp.width - comp.height;
        var ratio = "1x1";
        if (difference < 0) ratio = "9x16";
        if (difference > 0) ratio = "16x9";
        return ratio;
    }

    /**
     * Get the duration in seconds for the current composition.
     * @return {String} - duration
     */
    function getDuration() {
        return app.project.activeItem.duration + "sec";
    }

    /**
     * Get the version from the current composition.
     * @return {String} - version
     */
    function getVersion() {
        var name = app.project.file.name.split("_").slice(-1);
        return name.toString().split(".")[0];
    }

    /**
     * Get either the ratio, duration, and version from the current composition.
     * @param  {String} type - type to get
     * @return {String}      - value
     */
    function getFromProject(type) {
        var methods = {
            "ratio": getRatio(),
            "duration": getDuration(),
            "version": getVersion()
        };
        return methods[type];
    }

    /**
     * Get the label for the current text.
     * @param  {String} text          - current text
     * @param  {String} previousLabel - previous text (optional)
     * @return {String|Boolean}       - label or false
     */
    function getLabel(text, previousLabel) {
        if (text.match(/^[0-9]{6}$/g)) return "Date";
        if (text.match(/^Q[0-9]{1}$/g)) return "Quarter";
        if (text.match(/^EN|FR|DE$/g)) return "Language";
        if (text.match(/^FB$/g)) return "Platform";
        if (text.match(/^Motion|Animated$/g)) return "Category";
        if (text.match(/^[0-9]+x[0-9]+$/g)) return "Ratio";
        if (text.match(/^[0-9]+s|sec$/g)) return "Duration";
        if (text.match(/^v[0-9]*$/g)) return "Version";
        if (previousLabel === "quarter") return "Project";
        if (previousLabel === "duration") return "Video";
        return false;
    }

    /**
     * Check if a button should be added to the row
     * @param {String} type - row category
     */
    function addUpdateButton(type) {
        if (type === "ratio") return true;
        if (type === "duration") return true;
        if (type === "version") return true;
        return false;
    }

    /**
     * Build a new name string based on an old name array.
     * @param  {Array} oldArray - old name array
     * @return {String}         - new name string
     */
    function getNewName(oldArray) {
        var newArray = [];
        var oldArrayLength = oldArray.length;
        for (var i = 0; i < oldArrayLength; i++) {
            var value = oldArray[i];
            if (value) {
                newArray.push(value);
            }
        }
        return newArray.join("_");
    }

    /**
     * Build an populate a UI to assist with naming the composition.
     * @param  {String} name    - old name
     * @return {String|Boolean} - new name or false
     */
    function buildUI(name) {
        var newNameArray = [];
        var oldNameArray = name.split("_");
        var numOldNameArray = oldNameArray.length;

        var win = new Window("dialog", "Composition Naming Assistant");
        var content = win.add("group");
        content.orientation = "column";
        content.alignChildren = ["left", "top"];

        var labelText = "";
        var previousLabel = "";
        for (var i = 0; i < numOldNameArray; i++) {
            var text = oldNameArray[i];

            var group = content.add("group");

            var label = getLabel(text, previousLabel);
            if (label !== false) {
                labelText = label + ":";
                previousLabel = label.toLowerCase();
                group.rowType = previousLabel;
            } else {
                labelText = "";
                previousLabel = "";
            }

            var staticText = group.add("statictext", undefined, labelText);
            staticText.preferredSize.width = 60;

            var editText = group.add("edittext");
            editText.index = i;
            editText.preferredSize.width = 200;
            editText.text = text;
            newNameArray[i] = text;

            editText.onChange = function() {
                newNameArray[this.index] = this.text;
            };

            if (group.rowType && addUpdateButton(group.rowType) === true) {
                var button = group.add("button", undefined, "Pull From Project");
                button.preferredSize.width = 120;
                button.onClick = function() {
                    var value = getFromProject(this.parent.rowType);
                    this.parent.children[1].text = value;
                    newNameArray[this.parent.children[1].index] = value;
                };
            }
        }

        var finalGroup = content.add("group");
        var spacerOne = finalGroup.add("group");
        spacerOne.preferredSize.width = 60;
        var spacerTwo = finalGroup.add("group");
        spacerTwo.preferredSize.width = 200;
        var finalButton = finalGroup.add("button", undefined, "Pull All Project");
        finalButton.preferredSize.width = 120;
        finalButton.onClick = function() {
            var children = this.parent.parent.children;
            var numChildren = children.length;
            for (var i = 0; i < numChildren; i++) {
                var child = children[i];
                if (child.rowType && addUpdateButton(child.rowType) === true) {
                    var value = getFromProject(child.rowType);
                    child.children[1].text = value;
                    newNameArray[child.children[1].index] = value;
                }
            }
        };

        var buttonGroup = win.add("group");
        buttonGroup.add("button", undefined, "Cancel");
        buttonGroup.add("button", undefined, "Ok");

        return (win.show() === 1) ? getNewName(newNameArray) : false;
    }

    app.beginUndoGroup("Composition Naming Assistant");
    var comp = app.project.activeItem;
    var name = buildUI(comp.name);
    if (name !== false) {
        comp.name = name;
    }
    app.endUndoGroup();
})();