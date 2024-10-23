/**
 * @name Add All Compositions To Render Queue
 * @version 1.4
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Comb throught the entire project looking for all compositions with names that match
 * the correct pattern and add them to the Render Queue. Each item in the Render Queue will output
 * two files to the desktop: a ProRes 422 HQ MOV and a PNG Sequence.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function addAllCompositionsToRenderQueue() {

    /**
     * Add a composition to Render Queue and add a ProRes 422 HQ MOV output module and a PNG
     * Sequence output module that will both save to the desktop.
     * @param {CompItem} composition - current composition
     */
    function addCompositionToRenderQueue(composition) {
        var desktopPath = new Folder(Folder.desktop).fsName;
        var renderQueueItem = app.project.renderQueue.items.add(composition);
        var outputModuleOne = renderQueueItem.outputModules[1];
        outputModuleOne.applyTemplate("Apple ProRes 422 HQ");
        var outputModuleOneData = {
            "Output File Info": {
                "Base Path": desktopPath,
                "File Name": File.decode(outputModuleOne.file.name)
            }
        };
        outputModuleOne.setSettings(outputModuleOneData);
        renderQueueItem.outputModules.add();
        var outputModuleTwo = renderQueueItem.outputModules[2];
        outputModuleTwo.applyTemplate("PNG Sequence");
        var outputModuleTwoData = {
            "Output File Info": {
                "Base Path": desktopPath,
                "Subfolder Path": composition.name,
                "File Name": File.decode(outputModuleTwo.file.name)
            }
        };
        outputModuleTwo.setSettings(outputModuleTwoData);
    }

    /**
     * Look through all items in the project for any compositions that match the naming pattern.
     * @param  {ProjectItem} project - current project
     * @param  {RegExp}      pattern - naming pattern
     */
    function iterateThroughItems(project, pattern) {
        var items = project.items;
        var numItems = items.length;
        for (var i = 1; i <= numItems; i++) {
            var item = items[i];
            if (item instanceof CompItem) {
                if (item.name.match(pattern) !== null) {
                    addCompositionToRenderQueue(item);
                }
            }
        }
    }

    var project = app.project;
    var pattern = new RegExp(/tbs_ch_\d*_sh_\d*_v\d*/g);
    iterateThroughItems(project, pattern);
    project.save();
})();