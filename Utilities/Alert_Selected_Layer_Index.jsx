/**
 * @name Alert Selected Layer Index
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Alert the selected layer index.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function alertSelectedLayerIndex() {
    try {
        alert(app.project.activeItem.selectedLayers[0].index);
    } catch (e) {
        return;
    }
})();
