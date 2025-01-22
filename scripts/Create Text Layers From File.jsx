/**
 * @name Create Text Layers From File
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add a Text Layer to the current composition for each line in the selected text file.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function createTextLayersFromFile() {

    function createTextLayers(comp, file) {
        file.open("r");
        while (file.eof === false) {
            comp.layers.addText(file.readln());
        }
        file.close();
    }

    app.beginUndoGroup("Create Text Layers From File");
    var file = File.openDialog("Text File");
    if (file) {
        var comp = app.project.activeItem;
        createTextLayers(comp, file);
    }
    app.endUndoGroup();
})();