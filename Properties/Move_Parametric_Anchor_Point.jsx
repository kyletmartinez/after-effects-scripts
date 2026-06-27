/**
 * @name Move Parametric Anchor Point
 * @version 1.3
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Select the "Position" property of a parametric Rectangle or Ellipse and apply an
 * expression to move the Anchor Point. This allows shapes to have their sizes change but remain
 * locked to one edge or corner.
 *
 * Use the popup window grid to choose which side or corner to move the Anchor Point.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function moveParametricAnchorPoint() {

    var matchnames = {
        "ADBE Vector Ellipse Position": true,
        "ADBE Vector Rect Position": true
    };

    var positions = [
        [
            {
                "key": "top-left",
                "icon": "◤",
                "expr": [
                    "var x = thisProperty.propertyGroup(1).size[0] / 2;",
                    "var y = thisProperty.propertyGroup(1).size[1] / 2;",
                    "[x, y];"
                ].join("\n")
            },
            {
                "key": "top",
                "icon": "▲",
                "expr": [
                    "var x = 0;",
                    "var y = thisProperty.propertyGroup(1).size[1] / 2;",
                    "[x, y];"
                ].join("\n")
            },
            {
                "key": "top-right",
                "icon": "◥",
                "expr": [
                    "var x = thisProperty.propertyGroup(1).size[0] / -2;",
                    "var y = thisProperty.propertyGroup(1).size[1] / 2;",
                    "[x, y];"
                ].join("\n")
            }
        ],
        [
            {
                "key": "left",
                "icon": "◀",
                "expr": [
                    "var x = thisProperty.propertyGroup(1).size[0] / 2;",
                    "var y = 0;",
                    "[x, y];"
                ].join("\n")
            },
            {
                "key": "center",
                "icon": "●",
                "expr": [
                    "var x = 0;",
                    "var y = 0;",
                    "[x, y];"
                ].join("\n")
            },
            {
                "key": "right",
                "icon": "▶",
                "expr": [
                    "var x = thisProperty.propertyGroup(1).size[0] / -2;",
                    "var y = 0;",
                    "[x, y];"
                ].join("\n")
            }
        ],
        [
            {
                "key": "bottom-left",
                "icon": "◣",
                "expr": [
                    "var x = thisProperty.propertyGroup(1).size[0] / 2;",
                    "var y = thisProperty.propertyGroup(1).size[1] / -2;",
                    "[x, y];"
                ].join("\n")
            },
            {
                "key": "bottom",
                "icon": "▼",
                "expr": [
                    "var x = 0;",
                    "var y = thisProperty.propertyGroup(1).size[1] / -2;",
                    "[x, y];"
                ].join("\n")
            },
            {
                "key": "bottom-right",
                "icon": "◢",
                "expr": [
                    "var x = thisProperty.propertyGroup(1).size[0] / -2;",
                    "var y = thisProperty.propertyGroup(1).size[1] / -2;",
                    "[x, y];"
                ].join("\n")
            }
        ]
    ];

    function getAnchorPointPosition() {
        var win = new Window("dialog", "Anchor Point Position");
        win.orientation = "column";
        win.alignChildren = ["center", "top"];
        win.spacing = 10;
        win.margins = 16;

        var buttonSize = [60, 60];
        var selectedPosition = null;

        var gridGroup = win.add("group");
        gridGroup.orientation = "column";
        gridGroup.spacing = 5;

        for (var row = 0; row < positions.length; row++) {
            var rowGroup = gridGroup.add("group");
            rowGroup.spacing = 5;

            for (var col = 0; col < positions[row].length; col++) {
                var posData = positions[row][col];
                var btn = rowGroup.add("button", undefined, "", {"name": posData.key});
                btn.size = buttonSize;
                btn.positionKey = posData.key;
                btn.positionExpr = posData.expr;
                btn.text = posData.icon;
                btn.graphics.font = ScriptUI.newFont(btn.graphics.font.name, "REGULAR", 24);

                btn.onClick = function() {
                    selectedPosition = {
                        "key": this.positionKey,
                        "expr": this.positionExpr
                    };
                    win.close();
                };
            }
        }

        win.show();
        return selectedPosition;
    }

    app.beginUndoGroup("Move Parametric Anchor Point");
    var position = getAnchorPointPosition();
    if (position !== null) {
        var comp = app.project.activeItem;
        var properties = comp.selectedProperties;
        var numProperties = properties.length;

        for (var p = 0; p < numProperties; p++) {
            var property = properties[p];
            if (matchnames.hasOwnProperty(property.matchName) === true) {
                property.expression = position.expr;
            }
        }
    }
    app.endUndoGroup();
})();
