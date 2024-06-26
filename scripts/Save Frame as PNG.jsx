/**
 * @name Save Frame as PNG
 * @version 1.3
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Save the current frame as a PNG to the desktop. This does support transparency but
 * the image is not amazing quality.
 *
 * Output will match the following format: "Comp Name YYYY-MM-DD HH.MM.SS AM.png"
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    function getDate(date) {
        var year = date.getFullYear().toString();
        var month = date.getMonth().toString();
        var day = date.getDate().toString();
        if (month.length == 1) {month = "0" + month;}
        if (day.length == 1) {day = "0" + day;}
        return year + "-" + month + "-" + day;
    }

    function getTime(date) {
        var hours = date.getHours();
        var daytime = (hours > 11) ? "PM" : "AM";
        hours = hours % 12 || 12;
        hours = hours.toString();
        var minutes = date.getMinutes().toString();
        var seconds = date.getSeconds().toString();
        if (hours.length == 1) { hours = "0" + hours;}
        if (minutes.length == 1) { minutes = "0" + minutes;}
        if (seconds.length == 1) { seconds = "0" + seconds;}
        return hours + "." + minutes + "." + seconds + " " + daytime;
    }

    var comp = app.project.activeItem;
    var time = comp.time;
    var name = comp.name;
    var date = new Date(Date.now());
    var str = name + " " + getDate(date) + " " + getTime(date);
    var path = Folder.desktop.toString();
    comp.saveFrameToPng(time, File(path + "/" + str + ".png"));
})();