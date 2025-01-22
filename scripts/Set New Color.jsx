/**
 * @name Set New Color
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Select a color property and set a new color based on the original color, blend mode,
 * and opacity. Colors are calculated using the After Effects order of operations. Supports the
 * following blend modes:
 *
 * * "Multiply"
 * * "Screen"
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function setNewColor() {
    var BlendMode = {
        "MULTIPLY": 1000,
        "SCREEN": 2000
    };

    function calculateMultiply(a, b) {
        var rr = a[0] * b[0];
        var gg = a[1] * b[1];
        var bb = a[2] * b[2];
        return [rr, gg, bb, 1];
    }

    function calculateScreen(a, b) {
        var rr = 1 - ((1 - a[0]) * (1 - b[0]));
        var gg = 1 - ((1 - a[1]) * (1 - b[1]));
        var bb = 1 - ((1 - a[2]) * (1 - b[2]));
        return [rr, gg, bb, 1];
    }

    function calculateAlpha(a, b, o) {
        var rr = ((b[0] * o) + ((a[0] * 1) * (1 - o))) / (o + (1 * (1 - o)));
        var gg = ((b[1] * o) + ((a[1] * 1) * (1 - o))) / (o + (1 * (1 - o)));
        var bb = ((b[2] * o) + ((a[2] * 1) * (1 - o))) / (o + (1 * (1 - o)));
        return [rr, gg, bb, 1];
    }

    function calculateColor(colorA, blendMode, opacity) {
      var colorB = colorA;
        if (blendMode === BlendMode.MULTIPLY) {
            colorB = calculateMultiply(colorA, colorA);
        } else if (blendMode === BlendMode.SCREEN) {
            colorB = calculateScreen(colorA, colorA);
        }
        return calculateAlpha(colorA, colorB, opacity);
    }

    function buildPreview(preview, a, b) {
        while (preview.children.length > 0) {
            preview.remove(0);
        }
        var colors = [
            [a, a, 0],
            [a, b, b],
            [0, b, b]];
        for (var r = 0; r < 3; r++) {
            var row = preview.add("group");
            row.alignChildren = ["left", "top"];
            row.orientation = "row";
            row.spacing = 0;
            for (var c = 0; c < 3; c++) {
                var group = row.add("group");
                group.preferredSize = [20, 20];
                var color = colors[r][c];
                if (color) {
                    var brushType = group.graphics.BrushType.SOLID_COLOR;
                    group.graphics.backgroundColor = group.graphics.newBrush(brushType, color);
                }
            }
        }
        preview.layout.layout(true);
    }

    function getNewColor (oldColor) {
        var blendMode = BlendMode.MULTIPLY;
        var opacity = 1;
        var newColor = calculateColor(oldColor, blendMode, opacity);

        var win = new Window("dialog", "Set New Color");
        win.alignChildren = ["left", "top"];
        win.orientation = "column";

        var content = win.add("group");
        content.alignChildren = ["left", "top"];
        content.orientation = "row";

        var settings = content.add("panel", undefined, "Settings");
        settings.alignChildren = ["left", "top"];
        settings.orientation = "column";

        var blendModeRow = settings.add("group");
        blendModeRow.alignChildren = ["left", "middle"];
        blendModeRow.orientation = "row";

        var blendModeLabel = blendModeRow.add("statictext", undefined, "Blend Mode:");
        blendModeLabel.preferredSize.width = 70;

        var blendModeDropdown = blendModeRow.add("dropdownlist", undefined, ["Multiply", "Screen"]);
        blendModeDropdown.preferredSize.width = 100;
        blendModeDropdown.selection = 0;
        blendModeDropdown.onChange = function() {
            var blendModes = [BlendMode.MULTIPLY, BlendMode.SCREEN];
            blendMode = blendModes[this.selection.index];
            newColor = calculateColor(oldColor, blendMode, opacity);
            buildPreview(preview, oldColor, newColor);
        };

        var opacityRow = settings.add("group");
        opacityRow.alignChildren = ["left", "middle"];
        opacityRow.orientation = "row";

        var opacityLabel = opacityRow.add("statictext", undefined, "Opacity:");
        opacityLabel.preferredSize.width = 70;

        var opacitySlider = opacityRow.add("slider", undefined, 100, 0, 100);
        opacitySlider.preferredSize.width = 100;
        opacitySlider.onChanging = function() {
            opacityValue.text = Math.floor(this.value) + "%";
            opacity = Math.floor(this.value) / 100;
            newColor = calculateColor(oldColor, blendMode, opacity);
            buildPreview(preview, oldColor, newColor);
        };

        var opacityValue = opacityRow.add("statictext", undefined, "100%");

        var preview = content.add("group");
        preview.alignChildren = ["left", "top"];
        preview.orientation = "column";
        preview.spacing = 0;
        preview.margins.top = 14;

        buildPreview(preview, oldColor, newColor);

        var buttonGroup = win.add("group");
        buttonGroup.alignChildren = ["left", "top"];
        buttonGroup.orientation = "row";
        buttonGroup.add("button", undefined, "Cancel");
        buttonGroup.add("button", undefined, "Ok");

        return (win.show() === 1) ? newColor : false;
    }

    app.beginUndoGroup("Set New Color");
    var comp = app.project.activeItem;
    if (comp !== null && (comp instanceof CompItem)) {
        var properties = comp.selectedProperties;
        var property = properties[properties.length - 1];
        if (property.propertyValueType === PropertyValueType.COLOR) {
            var oldColor = property.value;
            var newColor = getNewColor(oldColor);
            if (newColor !== false) {
                property.setValue(newColor);
            }
        }
    }
    app.endUndoGroup();
})();