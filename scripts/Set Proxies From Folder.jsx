/**
 * @name Set Proxies From Folder
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Automatically set proxies to all rendered MOV files in a folder that match
 * compositions within the project.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function getActiveFiles() {
        var activeFiles = {};
        var folder = Folder.selectDialog();
        var files = folder.getFiles();
        var numFiles = files.length;
        for (var f = 0; f < numFiles; f++) {
            var file = files[f];
            var fileName = file.displayName.replace(".mov","");
            activeFiles[fileName] = file.fsName;
        }
        return activeFiles;
    }

    try {
        app.beginUndoGroup("Set Proxies From Folder");
        var activeFiles = getActiveFiles();
        var project = app.project;
        var items = project.items;
        var numItems = items.length;
        for (var p = 1; p <= numItems; p++) {
            var item = items[p];
            if (item instanceof CompItem) {
                var compName = item.name;
                if (activeFiles[compName] !== undefined) {
                    var proxyFile = new File(activeFiles[compName]);
                    item.setProxy(proxyFile);
                }
            }
        }
    } catch (err) {
        alert(err);
    } finally {
        app.endUndoGroup();
    }
})();