/**
 * @name Set Proxies From Folder
 * @version 2.3
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Set proxies for all compositions within the project.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function setProxiesFromFolder() {

    function setCompositionProxy(comp, allFiles) {
        var name = comp.name;
        if (allFiles.hasOwnProperty(name)) {
            var proxy = new File(allFiles[name]);
            comp.setProxy(proxy);
        }
    }

    function getAllFiles() {
        var allFiles = {};
        var folder = Folder.selectDialog();
        var files = folder.getFiles();
        var numFiles = files.length;
        for (var f = 0; f < numFiles; f++) {
            var file = files[f];
            var name = file.displayName.split(".")[0];
            allFiles[name] = file.fsName;
        }
        return allFiles;
    }

    app.beginUndoGroup("Set Proxies From Folder");
    var allFiles = getAllFiles();
    var project = app.project;
    var items = project.items;
    for (var i = project.numItems; i > 0; i--) {
        var item = items[i];
        if (item instanceof CompItem) {
            setCompositionProxy(item, allFiles);
        }
    }
    app.endUndoGroup();
})();
