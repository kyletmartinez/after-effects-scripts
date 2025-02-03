/**
 * @name Merge Imported Project File
 * @version 1.2
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Select the folder for the imported project file and merge it by moving items from
 * nested folders within the imported folder to folders of the same name in the original project
 * file. Specialty folders are handled correctly:
 *
 * - Animatics are renamed from a generic name to a specific name based on shot usage.
 * - Ray Dynamic Color compositions are reduced down to one instance.
 * - Imported animatic video files are condensed down to a single instance and extras are removed.
 *
 * Correct and matching file stuctures are expected:
 *
 * ```
 * +-- ORIGINAL PROJECT
 * |   +-- Assets
 * |   +-- Audio
 * |   +-- Compositions
 * |   |   +-- Precomps
 * |   |   |   +-- Misc
 * |   |   |   |   |-- Animatic
 * |   |   |-- tbs_ch_101_sh_01_v01
 * |   +-- Footage
 * |   |   |-- tbs_ch_101_edit_v1.mp4
 * |   +-- Ray Palette Comps
 * |   |   |-- Ray - The Biggest Story
 * |   +-- Solids
 * |   +-- tbs_ch_101_sh_02_v01 [SELECTED]
 * |   |   +-- Assets
 * |   |   +-- Audio
 * |   |   +-- Compositions
 * |   |   |   +-- Precomps
 * |   |   |   |   +-- Misc
 * |   |   |   |   |   |-- Animatic
 * |   |   |   |-- tbs_ch_101_sh_02_v01
 * |   |   +-- Footage
 * |   |   |   |-- tbs_ch_101_edit_v1.mp4
 * |   |   +-- Ray Palette Comps
 * |   |   |   |-- Ray - The Biggest Story
 * |   |   +-- Solids
 * ```
 *
 * Resulting file structure:
 *
 * ```
 * +-- ORIGINAL PROJECT
 * |   +-- Assets
 * |   +-- Audio
 * |   +-- Compositions
 * |   |   +-- Precomps
 * |   |   |   +-- Misc
 * |   |   |   |   |-- Animatic 01
 * |   |   |   |   |-- Animatic 02
 * |   |   |-- tbs_ch_101_sh_01_v01
 * |   |   |-- tbs_ch_101_sh_02_v01
 * |   +-- Footage
 * |   |   |-- tbs_ch_101_edit_v1.mp4
 * |   +-- Ray Palette Comps
 * |   |   |-- Ray - The Biggest Story
 * |   +-- Solids
 * ```
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function mergeImportedProjectFile() {

    /**
     * Reduce the number of imported files that are used as an animatic as they are all linking to
     * the same file. Replace all sources only one is linked then remove the other sources.
     * @param  {ProjectItem} project - current project
     * @param  {FolderItem} folder  - Footage folder
     */
    function handleFootageFolder(project, folder) {
        var items = folder.items;
        var numItems = folder.numItems;
        for (var i = 1; i <= numItems; i++) {
            var comp = items[i].usedIn[0];
            comp.layers[1].replaceSource(items[1], false);
        }
        for (var j = numItems; j > 0; j--) {
            if (items[j].usedIn.length === 0) {
                items[j].remove();
            }
        }
    }

    /**
     * Rename all animatic compositions to better represent where they are used. The default name
     * for an animatic is "Animatic". The new name for an animatic should be "Animatic XX" where XX
     * is the shot number that the composition is used in.
     * @param  {ProjectItem} project - current project
     * @param  {FolderItem} folder   - Misc folder
     */
    function handleMiscFolder(project, folder) {
        var items = folder.items;
        var numItems = folder.numItems;
        for (var i = 1; i <= numItems; i++) {
            var item = items[i];
            var shotNumber = item.usedIn[0].name.split("_")[4];
            item.name = "Animatic " + shotNumber;
        }
    }

    /**
     * Remove all extra copies of the Ray Dynamic Color composition in the Ray Dynmaic Color folder
     * ensuirng there is only 1 left.
     * @param  {ProjectItem} project - current project
     * @param  {FolderItem} folder   - Ray Dynamic Color folder
     */
    function handleRayFolder(project, folder) {
        while (folder.numItems > 1) {
            folder.items[2].remove();
        }
    }

    /**
     * Move an item from it's current folder to an older folder of the same name.
     * @param  {ProjectItem} project - current project
     * @param  {AVItem} item         - current item
     */
    function moveItem(project, item) {
        var parentFolder = item.parentFolder;
        var items = project.items;
        var numItems = items.length;
        for (var i = 1; i <= numItems; i++) {
            var folder = items[i];
            if (folder instanceof FolderItem) {
                if (folder.name === parentFolder.name) {
                    if (folder.id !== parentFolder.id) {
                        item.parentFolder = folder;
                    }
                }
            }
        }
    }

    /**
     * Recursively move through all folders in the given folder to find items that need to be moved.
     * @param  {ProjectItem} project - current project
     * @param  {FolderItem} folder   - current folder
     */
    function iterateThroughFolder(project, folder) {
        var items = folder.items;
        var numItems = folder.numItems;
        for (var i = 1; i <= numItems; i++) {
            var item = items[i];
            if (item instanceof FolderItem) {
                iterateThroughFolder(project, item);
            } else {
                moveItem(project, item);
            }
        }
    }

    app.beginUndoGroup("Merge Imported Project File");
    var project = app.project;
    var importedFolder = project.selection[0];
    iterateThroughFolder(project, importedFolder);
    importedFolder.remove();

    var miscFolder = null;
    var rayFolder = null;
    var footageFolder = null;

    var items = project.items;
    var numItems = project.numItems;
    for (var i = 1; i <= numItems; i++) {
        var folder = items[i];
        if (folder instanceof FolderItem) {
            if (folder.name === "Misc") {
                miscFolder = folder;
            }
            if (folder.name === "Ray Palette Comps") {
                rayFolder = folder;
            }
            if (folder.name === "Footage") {
                footageFolder = folder;
            }
        }
    }

    if (miscFolder !== null) {
        handleMiscFolder(project, miscFolder);
    }
    if (rayFolder !== null) {
        handleRayFolder(project, rayFolder);
    }
    if (footageFolder !== null) {
        handleFootageFolder(project, footageFolder);
    }
    project.save();

    app.endUndoGroup();
})();
