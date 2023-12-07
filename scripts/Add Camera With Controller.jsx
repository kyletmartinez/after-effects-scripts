/**
 * @name Add Camera With Controller
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Add a camera and 3D null as a controller to the current composition.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Add Camera With Controller");
    var comp = app.project.activeItem;
    var layers = comp.layers;
    var centerPoint = [comp.width / 2, comp.height / 2];
    var cameraLayer = layers.addCamera("Camera 1", centerPoint);
    var cameraControllerLayer = layers.addNull();
    cameraLayer.parent = cameraControllerLayer;
    var position = [0, 0, -(comp.width / 0.72)];
    cameraLayer.transform.position.setValue(position);
    cameraControllerLayer.name = "Camera Controller";
    cameraControllerLayer.threeDLayer = true;
    cameraControllerLayer.source.name = "Camera Controller";
    app.endUndoGroup();
})();