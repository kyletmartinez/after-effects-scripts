/**
 * @name Convert SRT To Text Layers
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Run the script, select an SRT file, and automatically convert all subtitles into
 * After Effects "Text Layers" with no styling applied just in and out point timing.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function convertSRTtoTextLayers() {

    function setTextLayerTimes(textLayer, textBlock) {
        textLayer.inPoint = textBlock.inPoint;
        textLayer.outPoint = textBlock.outPoint;
    }

    function addTextBlockToComposition(composition, textBlock) {
        var textLayer = composition.layers.addText();
        textLayer.text.sourceText.setValue(textBlock.text);
        setTextLayerTimes(textLayer, textBlock);
        textLayer.selected = false;
    };

    function addTextBlocksToComposition(composition, textBlocks) {
        var numTextBlocks = textBlocks.length;
        for (var i = 0; i < numTextBlocks; i++) {
            var textBlock = textBlocks[i];
            addTextBlockToComposition(composition, textBlock);
        }
    }

    function parseTime(time) {
        var timeArray = time.split(",");
        var h = parseInt(timeArray[0].split(":")[0], 10) * 3600;
        var m = parseInt(timeArray[0].split(":")[1], 10) * 60;
        var s = parseInt(timeArray[0].split(":")[2], 10);
        var l = parseInt(timeArray[1], 10) / 1000;
        return h + m + s + l;
    }

    function parseSubtitleBlock(subtitleBlock) {
        var blockArray = subtitleBlock.split("\n");
        var timeArray = blockArray[1].split(" ");
        return {
            "inPoint": parseTime(timeArray[0]),
            "outPoint": parseTime(timeArray[2]),
            "text": blockArray[2]
        };
    }

    function parseSubtitleString(subtitleString) {
        var subtitleStringCleaned = subtitleString.replace(/\n$/, "");
        var subtitleArray = subtitleStringCleaned.split("\n\n");
        var subtitles = [];
        var numSubtitleArray = subtitleArray.length;
        for (var i = 0; i < numSubtitleArray; i++) {
            var subtitleBlock = subtitleArray[i];
            subtitles.push(parseSubtitleBlock(subtitleBlock));
        }
        return subtitles;
    }

    function getSubtitleString() {
        var file = File.openDialog("SRT");
        file.open("r");
        var subtitleString = file.read();
        file.close();
        return subtitleString;
    }

    app.beginUndoGroup("Convert SRT to Text Layers");
    var subtitleString = getSubtitleString();
    var subtitles = parseSubtitleString(subtitleString);
    var comp = app.project.activeItem;
    addTextBlocksToComposition(comp, subtitles);
    app.endUndoGroup();
})();
