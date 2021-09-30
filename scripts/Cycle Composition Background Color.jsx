/**
 * @title Cycle Composition Background Color
 * @version 1.2
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Cycle the composition background color between black, gray,
 * and white
 *
 * @license This script is provided "as is," without warranty of any kind,
 * expressed or implied. In no event shall the author be held liable for any
 * damages arising in any way from the use of this script
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    var comp = app.project.activeItem;
    if (comp !== null && (comp instanceof CompItem)) {
        var bgColor = Math.round(comp.bgColor[0] * 10) / 10;
        switch (bgColor) {
            case 0:
                comp.bgColor = [0.5, 0.5,0.5];
                break;
            case 0.5:
                comp.bgColor = [1, 1, 1];
                break;
            default:
                comp.bgColor = [0, 0, 0];
        }
    }
})();