/**
 * @name Reset Selected Layer Labels
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Restore all selected layer labels to their default as defined in the After Effects
 * preferences.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function resetSelectedLayerLabels() {

    var sectionName = "Label Preference Indices Section 5";
    var prefType = PREFType.PREF_Type_MACHINE_INDEPENDENT;

    function getPreference(keyName) {
        var hasPref = app.preferences.havePref(sectionName, keyName, prefType);
        return (hasPref) ? app.preferences.getPrefAsLong(sectionName, keyName, prefType) : false;
    }

    var Label = {
        "ADJUSTMENT": "Adjustment Label Index 2",
        "AUDIO": "Audio Label Index 2",
        "CAMERA": "Camera Label Index 2",
        "COMPOSITION": "Comp Label Index 2",
        "LIGHT": "Light Label Index 2",
        "NULL_OBJECT": "Null Label Index",
        "SHAPE": "Shape Label Index 2",
        "SOLID": "Solid Label Index 2",
        "STILL": "Still Label Index 2",
        "TEXT": "Text Label Index",
        "VIDEO": "Video Label Index 2"
    };

    function getDefaultLabel(layer) {
        if (layer instanceof TextLayer) return getPreference(Label.TEXT);
        if (layer instanceof ShapeLayer) return getPreference(Label.SHAPE);
        if (layer instanceof CameraLayer) return getPreference(Label.CAMERA);
        if (layer instanceof LightLayer) return getPreference(Label.LIGHT);

        if (layer instanceof AVLayer) {

            if (layer.nullLayer === true) return getPreference(Label.NULL_OBJECT);
            if (layer.adjustmentLayer === true) return getPreference(Label.ADJUSTMENT);

            var source = layer.source;
            if (source instanceof CompItem) return getPreference(Label.COMPOSITION);

            if (source instanceof FootageItem) {

                var mainSource = source.mainSource;
                if (mainSource instanceof SolidSource) return getPreference(Label.SOLID);

                if (source.hasAudio && !source.hasVideo) return getPreference(Label.AUDIO);

                if (source.hasVideo && source.duration === 0) return getPreference(Label.STILL);
                if (source.hasVideo && source.duration !== 0) return getPreference(Label.VIDEO);
            }
        }

        return false;
    }

    app.beginUndoGroup("Reset Selected Layer Labels");
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    for (var l = 0; l < numLayers; l++) {
        var layer = layers[l];
        var label = getDefaultLabel(layer);
        if (label !== false) {
            layer.label = label;
        }
    }
    app.endUndoGroup();
})();
