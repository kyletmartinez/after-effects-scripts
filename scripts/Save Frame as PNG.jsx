/**
 * @title Save Frame as PNG
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Save the current frame as a PNG to the desktop. This does support transparency. The
 * image is not amazing quality. Frames from the same composition and time will overwrite without a
 * warning.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    var comp = app.project.activeItem;
    var time = comp.time;
    var name = comp.name;
    var path = Folder.desktop.toString();
    comp.saveFrameToPng(time, File(path + "/" + name + ".png"));
})()