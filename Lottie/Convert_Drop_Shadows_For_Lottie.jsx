/**
 * @name Convert Drop Shadows For Lottie
 * @version 1.1
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description There appears to be some inconsistencies when it comes to Lottie supported features
 * and how Lottie is actually implemented across web platforms. For situations where `Drop Shadow`
 * effects are required, but not supported, `Gaussian Blur` seems to be a viable solution.
 *
 * This script will take a selected layer that has `Drop Shadow` effects and generate the
 * appropriate layers with `Gaussian Blur` instead.
 *
 * > [!NOTE]
 * > While developing this script I learned the Opacity property of Drop Shadow effect is actually
 * > a range of 0-255 while the Opacity property of a Layer is 0-100. After Effects is weird.
 *
 * While there is some level of personal preference here in this script (layer naming, layer
 * labels, etc) the majority of the workflow is as workflow-agnostic as possible.
 *
 * > [!IMPORTANT]
 * > Through trial-and-error I landed on using a modifier of `0.75` when converting Drop Shadow
 * > `Softness` to Gaussian Blur `Blurriness`. For some reason using `75%` of blur seems to match
 * > the best.
 *
 * Learn more about [Lottie Supported Features](https://lottiefiles.com/supported-features)
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function convertDropShadowsForLottie() {

    function disableEffectsOnLayer(layer) {
        var effects = layer.property("ADBE Effect Parade");
        var numEffects = effects.numProperties;
        for (var e = 1; e <= numEffects; e++) {
            var effect = effects.property(e);
            effect.enabled = false;
        }
    }

    function setGaussianBlur(layer, softness) {
        var effects = layer.property("ADBE Effect Parade");
        var blur = effects.addProperty("ADBE Gaussian Blur 2");

        // Blurriness -> Softness
        blur.property("ADBE Gaussian Blur 2-0001").setValue(softness);

        // Repeat Edge Pixels -> False (Unchecked)
        blur.property("ADBE Gaussian Blur 2-0003").setValue(0);
    }

    function getCalculatedSoftness(softness) {
        return softness * 0.75;
    }

    function setPositionOffset(transform, offset) {
        var xPosition = transform.property("ADBE Position_0");
        var yPosition = transform.property("ADBE Position_1");

        xPosition.setValue(xPosition.value + offset.x);
        yPosition.setValue(yPosition.value + offset.y);
    }

    function getPositionOffset(direction, distance) {
        var radians = direction * Math.PI / 180;
        var offsetX = distance * Math.sin(radians);
        var offsetY = -distance * Math.cos(radians);
        return {
            "x": offsetX,
            "y": offsetY
        };
    }

    function getCalculatedOpacity(opacity) {
        return (opacity / 255) * 100;
    }

    function removeKeyframesFromProperty(transform, matchName) {
        var property = transform.property(matchName);
        while (property.numKeys > 0) {
            property.removeKey(property.numKeys);
        }
    }

    function setLayerColors(propertyGroup, color) {
        var numProperties = propertyGroup.numProperties;
        for (var p = 1; p <= numProperties; p++) {
            var property = propertyGroup.property(p);
            if (property.propertyValueType === PropertyValueType.COLOR) {
                if (property.matchName === "ADBE Vector Stroke Color" ||
                    property.matchName === "ADBE Vector Fill Color") {
                    property.setValue(color);
                }
            }
            if (property.propertyType === PropertyType.INDEXED_GROUP ||
                property.propertyType === PropertyType.NAMED_GROUP) {
                setLayerColors(property, color);
            }
        }
    }

    function removeEffectsFromLayer(layer) {
        var effects = layer.property("ADBE Effect Parade");
        while (effects.numProperties > 0) {
            effects.property(effects.numProperties).remove();
        }
    }

    function padNumber(num) {
        return (num < 10) ? "0" + String(num) : String(num);
    }

    function getDropShadowPropertyValues(effect) {
        return {
            "color": effect.property("ADBE Drop Shadow-0001").value,
            "opacity": effect.property("ADBE Drop Shadow-0002").value,
            "direction": effect.property("ADBE Drop Shadow-0003").value,
            "distance": effect.property("ADBE Drop Shadow-0004").value,
            "softness": effect.property("ADBE Drop Shadow-0005").value
        };
    }

    function getDropShadows(layer) {
        var dropShadows = [];
        var effects = layer.property("ADBE Effect Parade");
        var numEffects = effects.numProperties;
        for (var e = 1; e <= numEffects; e++) {
            var effect = effects.property(e);
            if (effect.matchName === "ADBE Drop Shadow") {
                dropShadows.push(effect);
            }
        }
        return dropShadows;
    }

    app.beginUndoGroup("Convert Drop Shadow(s) For Lottie");
    var comp = app.project.activeItem;
    var layer = comp.selectedLayers[0];
    layer.selected = false;

    var previousLayer = layer;

    comp.time = 0;

    var dropShadows = getDropShadows(layer);
    var numDropShadows = dropShadows.length;

    for (var d = 0; d < numDropShadows; d++) {
        var dropShadow = getDropShadowPropertyValues(dropShadows[d]);

        var shadowLayer = layer.duplicate();
        shadowLayer.name = layer.name + " Shadow " + padNumber(d + 1);
        shadowLayer.moveAfter(previousLayer);

        removeEffectsFromLayer(shadowLayer);

        setLayerColors(shadowLayer, dropShadow.color);

        var transform = shadowLayer.property("ADBE Transform Group");
        transform.property("ADBE Position").dimensionsSeparated = true;

        removeKeyframesFromProperty(transform, "ADBE Position_0");
        removeKeyframesFromProperty(transform, "ADBE Position_1");
        removeKeyframesFromProperty(transform, "ADBE Scale");
        removeKeyframesFromProperty(transform, "ADBE Rotate Z");
        removeKeyframesFromProperty(transform, "ADBE Opacity");

        var opacity = getCalculatedOpacity(dropShadow.opacity);
        transform.property("ADBE Opacity").setValue(opacity);

        var offset = getPositionOffset(dropShadow.direction, dropShadow.distance);
        setPositionOffset(transform, offset);

        var softness = getCalculatedSoftness(dropShadow.softness);
        setGaussianBlur(shadowLayer, softness);

        shadowLayer.selected = false;
        shadowLayer.parent = layer;
        shadowLayer.label = 4;
        previousLayer = shadowLayer;
    }

    disableEffectsOnLayer(layer);
    app.endUndoGroup();

})();
