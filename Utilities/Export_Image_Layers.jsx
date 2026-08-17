/**
 * @name Export Image Layers
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Export all image layers with scale over 100% to a text file on the desktop.
 * Automatically deduplicates by image path and stacks multiple scale instances.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied.
 * In no event shall the author be held liable for any damages arising in any way from the use
 * of this script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function exportImageLayers() {
    var project = app.project;
    var desktopPath = Folder.desktop.fsName;
    var outputFileName = project.file.name + "_" + Date.now() + ".txt";
    var outputFile = new File(desktopPath + "/" + outputFileName);

    var images = {};

    for (var i = 1; i <= project.numItems; i++) {
        var item = project.item(i);

        if (!(item instanceof CompItem)) continue;

        for (var j = 1; j <= item.numLayers; j++) {
            var layer = item.layer(j);

            if (!(layer.source instanceof FootageItem)) continue;
            if (!layer.source.file) continue;

            var imagePath = layer.source.file.name.replace(/%20/g, " ");
            var scales = layer.scale.value;

            if (scales[0] > 100.0 && scales[1] > 100.0) {
                var scaleX = "X: " + scales[0].toFixed(2) + "%";
                var scaleY = "Y: " + scales[1].toFixed(2) + "%";
                var scaleStr = scaleX + ", " + scaleY;

                if (!images[imagePath]) {
                    images[imagePath] = [];
                }

                images[imagePath].push(scaleStr);
            }
        }
    }

    outputFile.open("w");

    for (var image in images) {
        if (images.hasOwnProperty(image)) {
            outputFile.write(image + "\n");

            var scales = images[image];
            for (var s = 0; s < scales.length; s++) {
                outputFile.write(scales[s] + "\n");
            }

            outputFile.write("\n");
        }
    }

    outputFile.close();
})();
