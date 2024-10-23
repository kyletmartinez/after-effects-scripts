/**
 * @name Prepare Project File
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Automate the process of setting up a new project file for a new shot. The script
 * expects a correctly prepared base project file: correctly named PROJECT FILE NAME, correctly
 * named ANIMATION COMPOSITION NAME, correctly named ANIMATIC COMPOSITION NAME, and ANIMATIC layers
 * created using Scene Edit Detection.
 *
 * - PROJECT FILE NAME:          `tbs_ch_XX_sh_XX_vXX`
 * - ANIMATION COMPOSITION NAME: `tbs_ch_XX_sh_XX_vXX`
 * - ANIMATIC COMPOSITION NAME:  `Animatic`
 *
 * PROJECT FILE NAME and ANIMATION COMPOSITION NAME can utilize 2 or 3 digits for chapter number.
 *
 * ANIMATIC layers should be in the default order resulting from Scene Edit Detection. DESCENDING
 * layers are ASCENDING shot numbers.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function prepareProjectFile() {
    var Data = {};

    /**
     * Round the current time to the next even number of frames.
     * @param  {Float} time          - current time
     * @param  {Float} frameDuration - frame duration
     * @return {Float}               - new time
     */
    function roundTimeToNextEven(time, frameDuration) {
        var oldFrame = Math.floor(time / frameDuration);
        var newFrame = Math.ceil(oldFrame / 2) * 2;
        return newFrame * frameDuration;
    }

    /**
     * Get and set a variety of properties in the composition.
     * @param  {CompItem} comp - current composition
     */
    function prepareAnimationComposition(comp) {
        comp.name = app.project.file.name.split(".")[0];
        comp.duration = Data.SHOT_DURATION;
        var t = roundTimeToNextEven(Data.SHOT_LENGTH, comp.frameDuration);
        var inMarker = new MarkerValue("");
        comp.markerProperty.setValueAtTime(0, inMarker);
        var outMarker = new MarkerValue("");
        comp.markerProperty.setValueAtTime(t, outMarker);
        comp.workAreaStart = 0;
        comp.workAreaDuration = t;
        comp.layers[1].locked = true;
        comp.time = 0;
    }

    /**
     * Get and set a variety of properties in the composition.
     * @param  {CompItem} comp - current composition
     */
    function resetAnimaticLayers(comp) {
        var layer = comp.layers[1];
        layer.startTime = 0 - layer.inPoint;
        Data.SHOT_LENGTH = layer.outPoint;
        Data.SHOT_DURATION = Math.ceil(Data.SHOT_LENGTH) + 2;
        comp.duration = Data.SHOT_DURATION;
        layer.outPoint = Data.SHOT_DURATION;
        layer.locked = true;
    }

    /**
     * Remove all layers from the composition except for the active shot number.
     * @param  {CompItem} comp - current composition
     */
    function removeAnimaticLayers(comp) {
        var layers = comp.layers;
        var numLayers = comp.numLayers;
        var shotNumber = getNumberFromFileName(4);
        for (var i = numLayers; i > 0; i--) {
            var layer = layers[i];
            if (layer.index !== shotNumber) {
                layer.remove();
            }
        }
    }

    /**
     * Reverse the order of all layers in the composition.
     * @param  {CompItem} comp - current composition
     */
    function reverseAnimaticLayers(comp) {
        var numLayers = comp.numLayers;
        for (var i = 2; i <= numLayers; i++) {
            comp.layers[i].moveToBeginning();
        }
    }

    /**
     * Run a variety of functions on the current composition.
     * @param  {CompItem} comp - current composition
     */
    function prepareAnimaticComposition(comp) {
        reverseAnimaticLayers(comp);
        removeAnimaticLayers(comp);
        resetAnimaticLayers(comp);
    }

    /**
     * Find the composition that matches the correct naming pattern.
     * @param  {ProjectItem} project - current project
     * @param  {RegEx} regex         - naming pattern
     * @return {CompItem}            - composition
     */
    function getItemByName(project, regex) {
        var items = project.items;
        var numItems = items.length;
        for (var i = 1; i <= numItems; i++) {
            var item = items[i];
            if (regex.test(item.name) === true) {
                return item;
            }
        }
    }

    /**
     * Parse a number from the current project name.
     * @param  {Int} index - which number to get
     * @return {Int}       - number
     */
    function getNumberFromFileName(index) {
        var projectName = app.project.name.split("_");
        return parseInt(projectName[index], 10);
    }

    app.beginUndoGroup("Prepare Project File");
    var project = app.project;

    var animaticRegex = new RegExp("Animatic", "g");
    var animaticComp = getItemByName(project, animaticRegex);
    prepareAnimaticComposition(animaticComp);

    var chapterNumber = getNumberFromFileName(2);
    var animationName = "tbs_ch_" + chapterNumber + "_sh_01_v01";
    var animationRegex = new RegExp(animationName, "g");
    var animationComp = getItemByName(project, animationRegex);
    prepareAnimationComposition(animationComp);

    project.save();
    app.endUndoGroup();
})();