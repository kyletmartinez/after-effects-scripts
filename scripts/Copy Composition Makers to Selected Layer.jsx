(function() {
    function getCompositionMarkers(comp) {
        var compositionMarkers = [];
        var markerProperty = comp.markerProperty;
        var numMarkers = markerProperty.numKeys;
        for (var m = 1; m <= numMarkers; m++) {
            compositionMarkers.push({
                "time": markerProperty.keyTime(m),
                "comment": markerProperty.keyValue(m).comment
            });
        }
        return compositionMarkers;
    }

    function setLayerMarkers(layer, compositionMarkers) {
        var numMarkers = compositionMarkers.length;
        for (var m = 0; m < numMarkers; m++) {
            var compositionMarker = compositionMarkers[m];
            var layerMarker = new MarkerValue(compositionMarker.comment);
            layer.marker.setValueAtTime(compositionMarker.time, layerMarker);
        }
    }

    app.beginUndoGroup("Copy Composition Markers to Selected Layer");
    var comp = app.project.activeItem;
    var layer = comp.selectedLayers[0];
    var compositionMarkers = getCompositionMarkers(comp);
    setLayerMarkers(layer, compositionMarkers);
    app.endUndoGroup();
})();