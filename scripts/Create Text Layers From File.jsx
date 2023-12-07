/**
 * @name Create Text Layers From File
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add a new Text Layer in the current composition for each line of text in the file in
 * the selected text file.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Create Text Layer(s) From File");
    var file = File.openDialog("Text File");
    if (file !== null) {
        file.open("r");
        var comp = app.project.activeItem;
        var text;
        while (file.eof === false) {
            text = file.readln();
            comp.layers.addText(text);
        }
        file.close();
    }
    app.endUndoGroup();
})();