/**
 * @title Rename Composition to File Name
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Rename the current composition to the same name as the project 
 *
 * @license This script is provided "as is," without warranty of any kind,
 * expressed or implied. In no event shall the author be held liable for any
 * damages arising in any way from the use of this script
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Rename Comp to File Name");
    var comp = app.project.activeItem;
    if (comp !== null && (comp instanceof CompItem)) {
        comp.name = app.project.file.name.replace(/\.aep/ig, "");
    }
    app.endUndoGroup();
})();