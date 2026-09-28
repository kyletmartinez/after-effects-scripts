/**
 * @name Remove Guides
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Remove all guides from the current composition.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function removeGuides() {
    app.beginUndoGroup("Remove Guides");
    var comp = app.project.activeItem;
    var numGuides = comp.guides.length;
    for (var g = numGuides; g > 0; g--) {
        comp.removeGuide(g - 1);
    }
    app.endUndoGroup();
})();
