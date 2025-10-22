/**
 * @name Calculate Difference Between Keyframe Values
 * @version 2.2
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Calculate the difference between two keyframe values.
 *
 * > [!CAUTION]
 * > Currently this script only supports 1 dimensional properties.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function calculateDifferenceBetweenKeyframeValues() {
    var comp = app.project.activeItem;
    var selectedProperties = comp.selectedProperties;
    var numSelectedProperties = selectedProperties.length;
    for (var p = 0; p < numSelectedProperties; p++) {
        var selectedProperty = selectedProperties[p];
        var selectedKeys = selectedProperty.selectedKeys;
        var numSelectedKeys = selectedKeys.length;
        if (numSelectedKeys === 2) {
            var selectedPropertyName = selectedProperty.name;
            var keyframeIndexOne = selectedKeys[0];
            var keyframeIndexTwo = selectedKeys[1];
            if (selectedProperty.propertyValueType === PropertyValueType.OneD) {
                var keyValueOne = selectedProperty.keyValue(keyframeIndexOne);
                var keyValueTwo = selectedProperty.keyValue(keyframeIndexTwo);
                var difference = Math.abs(keyValueTwo - keyValueOne);
                var message = [
                    selectedPropertyName,
                    "[" + keyframeIndexTwo + "]" + keyValueTwo + " -",
                    "[" + keyframeIndexOne + "]" + keyValueOne + " =",
                    difference
                ].join("\n");
                alert(message);
            }
        }
    }
})();
