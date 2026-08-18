/**
 * @name Reset Selected Item Labels
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Restore all selected item labels to their default as defined in the After Effects
 * preferences.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function resetSelectedItemLabels() {

    var sectionName = "Label Preference Indices Section 5";
    var prefType = PREFType.PREF_Type_MACHINE_INDEPENDENT;

    function getPreference(keyName) {
        var hasPref = app.preferences.havePref(sectionName, keyName, prefType);
        return (hasPref) ? app.preferences.getPrefAsLong(sectionName, keyName, prefType) : false;
    }

    var Label = {
        "AUDIO": "Audio Label Index 2",
        "COMPOSITION": "Comp Label Index 2",
        "FOLDER": "Folder Label Index 2",
        "SOLID": "Solid Label Index 2",
        "STILL": "Still Label Index 2",
        "VIDEO": "Video Label Index 2"
    };

    function getDefaultLabel(item) {

        if (item instanceof CompItem) return getPreference(Label.COMPOSITION);
        if (item instanceof FolderItem) return getPreference(Label.FOLDER);

        if (item instanceof FootageItem) {

            var mainSource = item.mainSource;
            if (mainSource instanceof SolidSource) return getPreference(Label.SOLID);

            if (item.hasAudio && !item.hasVideo) return getPreference(Label.AUDIO);

            if (item.hasVideo && item.duration === 0) return getPreference(Label.STILL);
            if (item.hasVideo && item.duration !== 0) return getPreference(Label.VIDEO);
        }

        return false;
    }

    app.beginUndoGroup("Reset Selected Item Labels");
    var project = app.project;
    var items = project.selection;
    var numItems = items.length;
    for (var i = 0; i < numItems; i++) {
        var item = items[i];
        var label = getDefaultLabel(item);
        if (label !== false) {
            item.label = label;
        }
    }
    app.endUndoGroup();
})();
