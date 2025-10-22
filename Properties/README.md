# Scripts

### [Add Additional Animation Control (v1.1)](Add_Additional_Animation_Control.jsx)

Add an additional animation controller to the layer for the selected property.

---

### [Add Properties To Essential Graphics (v2.1)](Add_Properties_To_Essential_Graphics.jsx)

Add all selected properties to Essential Graphics Panel. If any properties belong to
a native After Effects expression controller then use the effect name instead.

* `Angle Control`
* `Checkbox Control`
* `Color Control`
* `Dropdown Menu Control`
* `Layer Control`
* `Point Control`
* `Slider Control`

---

### [Add Visibility Controller (v2.1)](Add_Visibility_Controller.jsx)

Add a checkbox that controls the visibility, using opacity, for a selected layer.

---

### [Build Dropdown Selector (v1.0)](Build_Dropdown_Selector.jsx)

Create a new controller layer and add a `Dropdown Control`. You can now toggle the
visibility of all layers in the current composition. This dropdown will also be added to the
Essential Graphics Panel for the current composition.

---

### [Estimate Path Length (v1.0)](Estimate_Path_Length.jsx)

Add two sliders to the selected layer to estimate the length of a selected path.
Increase the `Path Samples` slider for a more accurate length and use the `Path Length` slider
to reveal the path length.

---

### [Export Path Points (v2.1)](Export_Path_Points.jsx)

Export path points for the select path property to a text file on the desktop.

---

### [Expose Essential Properties (v2.2)](Expose_Essential_Properties.jsx)

Essential Properties from a nested composition can not be directly added to the
Essential Graphic Panel of the parent composition.

Instead, run this script to expose those Essential Properties by using an intermediate expression
controller. Select a layer to add all properterties or select specific properties to add them.

This script does not currently support `Dropdown Menu Control`.

---

### [Increase All Pin Sizes (v1.1)](Increase_All_Pin_Sizes.jsx)

Increase the scale of all DuIK Pin layers in the current project.

---

### [Move Parametric Anchor Point (v1.3)](Move_Parametric_Anchor_Point.jsx)

Select the `Position` property of a parametric Rectangle or Ellipse and apply an
expression to move the Anchor Point. This allows shapes to have their sizes change but remain
locked to one edge or corner.

Use the popup window grid to choose which side or corner to move the Anchor Point.

---

### [Rename Selected Properties (v1.0)](Rename_Selected_Properties.jsx)

Rename the selected properties appending numbers as needed.

---

### [Round Selected Property Values (v2.1)](Round_Selected_Property_Values.jsx)

Round the values for all selected properties to the nearest whole number. Currently
supports basic properties with 1, 2, or 3 dimensions.

---

### [Separate Size Dimensions (v1.2)](Separate_Size_Dimensions.jsx)

Separate the size dimensions for a parametric rectangle or ellipse by adding a
slider for both `X Size` and `Y Size` to the layer.

---

### [Set New Color (v2.2)](Set_New_Color.jsx)

Select a color property and set a new color based on the original color, blend mode,
and opacity. Colors are calculated using the After Effects order of operations. Supports the
following blend modes:

* `Multiply`
* `Screen`

---

### [Swap Property Values (v2.1)](Swap_Property_Values.jsx)

Swap the values of two selected properties with the same property type.

---

### [Swap Selected Property Dimensions (v2.2)](Swap_Selected_Property_Dimensions.jsx)

Swap the dimension values for all selected properties. For example, swap the x and y
size values for a rectangle shape layer.

---

### [Toggle Puppet On Transparent (v1.0)](Toggle_Puppet_On_Transparent.jsx)

Toggle the `On Transparent` checkbox for every instance of the `Puppet` effect in
the current project. This eliminates situations where the `Expansion` didn't quite grab every
pixel for the underlying layer and leaves an extra little snippet.

---

### [Toggle Puppet Pin Types (v2.2)](Toggle_Puppet_Pin_Types.jsx)

Toggle the types of selected puppet pins between `Position` and `Advanced`.

