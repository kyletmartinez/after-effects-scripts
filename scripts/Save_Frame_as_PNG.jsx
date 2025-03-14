/**
 * @name Save Frame As PNG
 * @version 2.3
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Save the current frame as a PNG to the default save location. Output will match the
 * following format:
 *
 * "Composition Name YYYY-MM-DD HH.MM.SS AM.png"
 *
 * When first running the script, you will be prompted for a save location. That location will be
 * used for all future saves. If you want to set a new location, hold the "SHIFT" key.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function saveFrameAsPNG() {

    function getDate(date) {
        var year = date.getFullYear().toString();
        var month = date.getMonth().toString();
        var day = date.getDate().toString();
        month = (month.length === 1) ? "0" + month : month;
        day = (day.length === 1) ? "0" + day : day;
        return year + "-" + month + "-" + day;
    }

    function getTime(date) {
        var hours = date.getHours();
        var daytime = (hours > 11) ? "PM" : "AM";
        hours = hours % 12 || 12;
        hours = hours.toString();
        var minutes = date.getMinutes().toString();
        var seconds = date.getSeconds().toString();
        hours = (hours === 1) ? "0" + hours : hours;
        minutes = (minutes === 1) ? "0" + minutes : minutes;
        seconds = (seconds === 1) ? "0" + seconds : seconds;
        return hours + "." + minutes + "." + seconds + " " + daytime;
    }

    function saveFrameToPNG(path) {
        var comp = app.project.activeItem;
        var date = new Date(Date.now());
        var name = comp.name + " " + getDate(date) + " " + getTime(date);
        var previousResolutionFactor = comp.resolutionFactor;
        comp.resolutionFactor = [1, 1];
        comp.saveFrameToPng(comp.time, File(path + "/" + name + ".png"));
        comp.resolutionFactor = previousResolutionFactor;
    }

    function doesPathExist() {
        return app.settings.haveSetting("SaveFrameAsPNG", "Path");
    }

    function getPath() {
        return app.settings.getSetting("SaveFrameAsPNG", "Path");
    }

    function setPath() {
        var folderSet = false;
        var folder = Folder.selectDialog();
        if (folder !== null) {
            app.settings.saveSetting("SaveFrameAsPNG", "Path", folder.fsName);
            app.preferences.saveToDisk();
            folderSet = true;
        }
        return folderSet;
    }

    function trySaveFrametoPNG(forceSetPath) {
        if (forceSetPath === false && doesPathExist() === true) {
            saveFrameToPNG(getPath());
        } else {
            var folderSet = setPath();
            if (folderSet === true) {
                trySaveFrametoPNG(false);
            }
        }
    }

    var shiftKey = ScriptUI.environment.keyboardState.shiftKey;
    var forceSetPath = (shiftKey === true);
    trySaveFrametoPNG(forceSetPath);
})();
