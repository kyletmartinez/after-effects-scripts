/**
 * @name Clean Up Overlord Folder
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Clean up the Overlord source folder by removing all files that aren't imported into
 * the current project. Folder detection in the project and on the file systems is all automatic.
 *
 * Files are not truely deleted instead they are moved to a "Deleted" folder on the desktop.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function cleanUpOverlordFolder() {

    /**
     * Get the "Overlord" folder in the current project.
     * @param  {Project}     project - current project
     * @param  {FolderItem}  folder  - default folder
     * @return {FolderItem}          - Overlord folder or null if not found
     */
    function getOverlordProjectFolder(project, folder) {
        var folder = folder || null;
        var items = project.items;
        var numItems = project.numItems;
        for (var i = 1; i <= numItems; i++) {
            var item = items[i];
            if (item instanceof FolderItem) {
                if (item.name === "Overlord") {
                    folder = item;
                    break;
                }
            }
        }
        return folder;
    }

    /**
     * Get the "Overlord" folder for the current project.
     * @param  {Project} project - current project
     * @param  {Folder}  folder  - default folder
     * @return {Folder}          - Overlord folder or null if not found
     */
    function getOverlordSystemFolder(project, folder) {
        var folder = folder || null;
        if (!app.project.file) {
            return null;
        }
        var parentFolder = app.project.file.parent;
        var overlordFolder = new Folder(parentFolder.fsName + "/Overlord");
        if (overlordFolder.exists) {
            folder = overlordFolder;
        }
        return folder;
    }

    /**
     * Get all files from a folder.
     * @param  {Folder} folder   - current folder
     * @param  {Array}  fileList - array of File(s)
     * @return {Array}           - array of File(s)
     */
    function getAllFiles(folder, fileList) {
        var fileList = fileList || [];
        if (!folder || !folder.exists) {
            return fileList;
        }
        var files = folder.getFiles();
        var numFiles = files.length;
        for (var f = 0; f < numFiles; f++) {
            var file = files[f];
            if (file instanceof File) {
                fileList.push(file);
            }
        }
        return fileList;
    }

    /**
     * Get all items from a folder recursively.
     * @param  {FolderItem} folder   - current folder
     * @param  {Array}      itemList - array of FootageItem(s)
     * @return {Array}               - array of FootageItem(s)
     */
    function getAllItems(folder) {
        var itemList = itemList || [];
        if (!folder) {
            return itemList;
        }
        var items = folder.items;
        var numItems = folder.numItems;
        for (var i = 1; i <= numItems; i++) {
            var item = items[i];
            if (item instanceof FolderItem) {
                getAllItems(item, itemList);
            } else {
                if (item instanceof FootageItem && item.file) {
                    itemList.push(item);
                }
            }
        }
        return itemList;
    }

    /**
     * Normalize the path by removing slashes and making lowercase for easy comparison.
     * @param  {String} path - current path
     * @return {String}      - normalized path
     */
    function normalizePath(path) {
        return path.replace(/\\/g, "/").toLowerCase();
    }

    /**
     * Get all imported file paths from the project folder.
     * @param  {FolderItem} folder - project folder to scan
     * @return {Object}            - object with normalized paths as keys
     */
    function getImportedPaths(folder) {
        var importedPaths = {};
        var items = getAllItems(folder);
        var numItems = items.length;
        for (var i = 0; i < numItems; i++) {
            var item = items[i];
            var normalizedPath = normalizePath(item.file.fsName);
            importedPaths[normalizedPath] = true;
        }
        return importedPaths;
    }

    /**
     * Get all unused files by comparing system folder with imported paths.
     * @param  {Folder} folder        - system folder to scan
     * @param  {Object} importedPaths - object with imported file paths
     * @return {Array}                - array of unused file objects
     */
    function getUnusedFiles(folder, importedPaths) {
        var unusedFiles = [];
        var files = getAllFiles(folder);
        var numFiles = files.length;
        for (var f = 0; f < numFiles; f++) {
            var file = files[f];
            var normalizedPath = normalizePath(file.fsName);
            if (!importedPaths[normalizedPath]) {
                unusedFiles.push({
                    "name": file.name,
                    "fullPath": file.fsName
                });
            }
        }
        return unusedFiles;
    }

    /**
     * Get the "Deleted" folder on the desktop, creating it if it doesn't exist.
     * @return {Folder} - deleted folder
     */
    function getDeletedFolder() {
        var desktopPath = Folder.desktop.fsName;
        var deletedFolder = new Folder(desktopPath + "/Overlord (Deleted)");
        if (!deletedFolder.exists) {
            deletedFolder.create();
        }
        return deletedFolder;
    }

    /**
     * Move a file to the deleted folder, handling name conflicts.
     * @param {File}    file          - file to move
     * @param {Folder}  deletedFolder - destination folder
     * @return {Object}               - result object with success status
     */
    function moveToDeletedFolder(file, deletedFolder) {
        var fileName = file.name;
        var counter = 1;
        var baseName = fileName.replace(/\.[^\.]+$/, "");
        var extension = fileName.match(/\.[^\.]+$/) ? fileName.match(/\.[^\.]+$/)[0] : "";

        var newFile = new File(deletedFolder.fsName + "/" + fileName);
        while (newFile.exists) {
            fileName = baseName + "_" + counter + extension;
            newFile = new File(deletedFolder.fsName + "/" + fileName);
            counter += 1;
        }

        file.copy(newFile.fsName);
        file.remove();
    }

    /**
     * Delete unused files by moving them to the deleted folder.
     * @param {Array}   files         - array of unused file objects
     * @param {Folder}  deletedFolder - destination folder
     * @return {Object}               - result object with move statistics
     */
    function deleteUnusedFiles(files, deletedFolder) {
        var numFiles = files.length;
        for (var f = 0; f < numFiles; f++) {
            var file = new File(files[f].fullPath);
            moveToDeletedFolder(file, deletedFolder);
        }
    }

    var project = app.project;

    if (!project.file) {
        alert("Project not saved!");
        return;
    }

    var overlordProjectFolder = getOverlordProjectFolder(project);
    if (!overlordProjectFolder) {
        alert("No \"Overlord\" folder found in the Project Panel!");
        return;
    }

    var overlordFolder = getOverlordSystemFolder(project);
    if (!overlordFolder) {
        alert("No \"Overlord\" folder not found next to project file!");
        return;
    }

    var importedPaths = getImportedPaths(overlordProjectFolder);
    var unusedFiles = getUnusedFiles(overlordFolder, importedPaths);

    var deletedFolder = getDeletedFolder();
    deleteUnusedFiles(unusedFiles, deletedFolder);
    alert("Cleanup completed!");

})();
