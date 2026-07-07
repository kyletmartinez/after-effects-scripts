/**
 * @name Change Composition Background
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Change the background color of the current composition using interactive color
 * swatches.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function changeCompositionBackground() {

    function getBackgroundColor() {
        var backgroundColor = null;
        var win = new Window("dialog", "Background Color");
        win.orientation = "row";

        for (var i = 0; i < 5; i++) {
            var color = i / 4;
            var textColor = 1 - Math.floor(color + 0.5);

            var button = win.add("group");
            button.alignChildren = ["center", "center"];
            button.preferredSize = [40, 40];

            var buttonGraphics = button.graphics;
            var brushType = buttonGraphics.BrushType.SOLID_COLOR;
            var brushColor = [color, color, color];
            buttonGraphics.backgroundColor = buttonGraphics.newBrush(brushType, brushColor);

            var text = button.add("statictext", undefined, Math.round(color * 100) + "%");

            var textGraphics = text.graphics;
            var penType = textGraphics.PenType.SOLID_COLOR;
            var penColor = [textColor, textColor, textColor];
            textGraphics.foregroundColor = textGraphics.newPen(penType, penColor, 1);

            button.swatchColor = brushColor;

            button.addEventListener("click", function() {
                backgroundColor = this.swatchColor;
                win.close();
            });
        }

        win.show();
        return backgroundColor;
    }

    app.beginUndoGroup("Change Composition Background");
    var backgroundColor = getBackgroundColor();
    if (backgroundColor) {
        app.project.activeItem.bgColor = backgroundColor;
    }
    app.endUndoGroup();

})();
