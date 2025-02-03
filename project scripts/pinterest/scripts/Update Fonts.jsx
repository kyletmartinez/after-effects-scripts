/**
 * @name Update Fonts
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Check the entire project for all fonts in use. If a font is already a valid font
 * the don't change it. If a font is recognized as having a valid replacmeent then replace the
 * font. If a font is not recognized as having a valid replacement then let the user know. In the
 * end, let the user know how many fonts were changed in total.
 *
 * Currently there is a function that fixes incorrect black-tone font colors as well. Typically I
 * comment it out if it isn't needed. There is definitely a more user-friendly way to approach this.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function updateFonts() {

    /**
     * Number of fonts changed
     * @type {Number}
     */
    var FONTS_CHANGED = 0;

    /**
     * Valid use fonts in the project
     * @type {Object}
     */
    var ValidFonts = {
        "PinSans-Bold": true,
        "PinSans-Heavy": true,
        "PinSans-Medium": true,
        "PinSans-Regular": true
    };

    /**
     * Fonts with valid replacements
     * @type {Object}
     */
    var InvalidFonts = {
        "HaasGrotDispPinterest-75Bold": "PinSans-Heavy",
        "PinterestUIPro-Bold": "PinSans-Bold",
        "PinterestUIPro-Regular": "PinSans-Regular",
        "SFProText-Bold": "PinSans-Bold",
        "SFProText-Regular": "PinSans-Regular",
        "SFProText-Semibold": "PinSans-Regular"
    };

    /**
     * Alert the user of any unrecognized fonts currently in use
     * @param  {TextLayer} textLayer - the current text layer
     * @param  {String}    oldFont   - the current font
     * @return {None}
     */
    function alertUser(textLayer, oldFont) {
        var message = [
            "Unknown font:\n",
            oldFont,
            "(Comp: " + textLayer.containingComp.name,
            "Layer: " + textLayer.index + ")"
        ].join(" ");
        alert(message);
    }

    /**
     * Check if current font is a valid use font
     * @param  {String} font - the current font
     * @return {Boolean}     - is valid use font
     */
    function fontIsUnknown(font) {
        return (!ValidFonts.hasOwnProperty(font));
    }

    /**
     * Set the font for the current text layer
     * @param {TextDocument} sourceText - the current text document
     * @param {String}       oldFont    - the current font
     */
    function setNewFont(sourceText, oldFont) {
        var newFont = InvalidFonts[oldFont];
        var textDocument = sourceText.value;
        textDocument.font = newFont;
        sourceText.setValue(textDocument);
        FONTS_CHANGED += 1;
    }

    /**
     * Check if current font has a valid replacement font
     * @param  {String} font - the current font
     * @return {Boolean}     - has valid replacement font
     */
    function canSetNewFont(font) {
        return (InvalidFonts.hasOwnProperty(font));
    }

    /**
     * Change font colors from black #00000 to dark gray #111111
     * @param  {TextDocument} sourceText - the current text document
     * @return {None}
     */
    function fixFontColor(sourceText) {
        var textDocument = sourceText.value;
        var fillColor = textDocument.fillColor;
        if (fillColor[0] === 0 && fillColor[1] === 0 && fillColor[2] === 0) {
            alert("Fixing font color...");
            textDocument.fillColor = [17 / 255, 17 / 255, 17 / 255];
            sourceText.setValue(textDocument);
        }
    }

    /**
     * Get the font from the current text layer
     *
     * If the font has a valid replacement font then change it
     * If the font is not a valid use font then alert the user
     *
     * @param  {TextLayer} textLayer - the current text layer
     * @return {None}
     */
    function getOldFont(textLayer) {
        var sourceText = textLayer.property("ADBE Text Properties").property("ADBE Text Document");
        var oldFont = sourceText.value.font;

        fixFontColor(sourceText);

        if (canSetNewFont(oldFont) === true) {
            setNewFont(sourceText, oldFont);
        } else {
            if (fontIsUnknown(oldFont) === true) {
                alertUser(textLayer, oldFont);
            }
        }
    }

    /**
     * Iterate through all layers in the composition looking for text layers
     * @param  {CompItem} composition - the current composition
     * @return {None}
     */
    function getTextLayers(composition) {
        var layers = composition.layers;
        var numLayers = layers.length;
        for (var l = 1; l <= numLayers; l++) {
            var layer = layers[l];
            if (layer instanceof TextLayer) {
                getOldFont(layer);
            }
        }
    }

    /**
     * Iterate through all items in the project looking for compositions
     * @param  {Project} project - the current project
     * @return {None}
     */
    function getCompositionItems(project) {
        var items = project.items;
        var numItems = items.length;
        for (var i = 1; i <= numItems; i++) {
            var item = items[i];
            if (item instanceof CompItem) {
                getTextLayers(item);
            }
        }
    }

    app.beginUndoGroup("Update Fonts");
    getCompositionItems(app.project);
    alert("Fonts changed\n" + FONTS_CHANGED.toString());
    app.endUndoGroup();
})();
