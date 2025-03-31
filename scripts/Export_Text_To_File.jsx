/**
 * @name Export Text To File
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Export all selected text layers to a single "export.txt" text file on the desktop.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function exportTextToFile() {
    var comp = app.project.activeItem;
    var layers = comp.selectedLayers;
    var numLayers = layers.length;
    var textContent = "";
    for (var l = 0; l < numLayers; l++) {
        var layer = layers[l];
        if (layer.property("Source Text") !== null) {
            var text = layer.property("Source Text").value.text;
            textContent += (l + 1) + ":\n" + text + "\n\n";
        } else {
            textContent += (l + 1) + ":\n[Not a text layer]\n\n";
        }
    }

    var file = new File("~/Desktop/export.txt");
    file.open("w");
    file.write(textContent);
    file.close();
})();
