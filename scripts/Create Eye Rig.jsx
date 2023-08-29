/**
 * @title Create Eye Rig
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Used specifically for a current project. Creates an eye rig for a selected eye
 * layer. Probably pretty usless outside of this specific use case but has some nice code to
 * steal for future scripts.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * In other words, I'm just trying to help make life as an animator easier
 * "A rising tide lifts all boats." - John F. Kennedy, 1963
 */

(function() {
    app.beginUndoGroup("Create Eye Rig");
    var prefix = prompt("Which side?", "Left");
    var comp = app.project.activeItem;
    comp.time = 0;
    var eyeLayer = comp.selectedLayers[0];
    eyeLayer.name = prefix + " Eye";
    var eyelidLayer = eyeLayer.duplicate();
    eyeLayer.selected = false;
    eyelidLayer.selected = true;
    eyelidLayer.label = 16;
    eyelidLayer.name = prefix + " Eyelid";
    var blinkEffect = eyelidLayer.property("ADBE Effect Parade").addProperty("ADBE Slider Control");
    blinkEffect.name = "Blink";
    eyelidLayer.transform.position.dimensionsSeparated = false;
    eyelidLayer.transform.position.addKey(0);
    eyelidLayer.transform.position.expression = 'valueAtTime(linear(effect("Blink")("Slider").value, 0, 100, key(1).time, key(numKeys).time));';
    eyelidLayer.transform.position.expressionEnabled = false;
    eyelidLayer.transform.position.addKey(1);
    eyelidLayer.transform.scale.addKey(0);
    eyelidLayer.transform.scale.expression = 'valueAtTime(linear(effect("Blink")("Slider").value, 0, 100, key(1).time, key(numKeys).time));';
    eyelidLayer.transform.scale.expressionEnabled = false;
    eyelidLayer.transform.scale.addKey(1);
    eyelidLayer.transform.scale.setValueAtKey(1, [150, 0]);
    eyelidLayer.transform.scale.setValueAtKey(2, [150, 100]);
    eyeLayer.setTrackMatte(eyelidLayer, TrackMatteType.ALPHA_INVERTED);
    blinkEffect.property(1).addToMotionGraphicsTemplateAs(comp, prefix + " Blink");
    var containingComp = comp.usedIn[0];
    var containingCompLayers = containingComp.layers;
    var numContainingCompLayers = containingCompLayers.length;
    for (var l = 1; l <= numContainingCompLayers; l++) {
        var layer = containingCompLayers[l];
        if (layer.source === comp) {
            var blinkProperty = layer.essentialProperty(prefix + " Blink");
            var inTemporalEase = new KeyframeEase(0, 88);
            var outTemporalEase = new KeyframeEase(0, 66);
            blinkProperty.setValueAtTime(comp.frameDuration * 0, 0);
            blinkProperty.setTemporalEaseAtKey(1, [inTemporalEase], [outTemporalEase]);
            blinkProperty.setValueAtTime(comp.frameDuration * 8, 100);
            blinkProperty.setTemporalEaseAtKey(2, [inTemporalEase], [outTemporalEase]);
            blinkProperty.setValueAtTime(comp.frameDuration * 16, 0);
            blinkProperty.setTemporalEaseAtKey(3, [inTemporalEase], [outTemporalEase]);
            blinkProperty.expression = "posterizeTime(12); value;";
        }
    }
    app.endUndoGroup();
})()