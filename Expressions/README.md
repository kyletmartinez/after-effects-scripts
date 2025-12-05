# Scripts

### [Add Posterize Time Expression (v2.2)](Add_Posterize_Time_Expression.jsx)

Add `posterizeTime(fps)` expression to all selected properties. Default `fps` will
be half the current frame rate and existing expressions will be preserved.

---

### [Add Simple Loop Expression (v1.2)](Add_Simple_Loop_Expression.jsx)

Add a loop expression to all selected properties. Use the popup window to customize
the loop or press the `Enter` key to use the defaults.

Loop Directions:
* `loopIn()`
* `loopOut()` (default)

Loop Types:
* `cycle` (default)
* `pingpong`
* `offset`
* `continue`

Keyframes:
* `0` (default)
* `X`

---

### [Append To Expression (v1.0)](Append_To_Expression.jsx)

Append new code to all selected properties that contain expressions.

---

### [Apply Maintain Stroke Width Expression (v1.0)](Apply_Maintain_Stroke_Width_Expression.jsx)

Search through all layers in the current composition, find all Stroke Width
properties, and apply an expression to maintain the stroke width visually despite any scale.

---

### [Disable Selected Expressions (v1.0)](Disable_Selected_Expressions.jsx)

Disable the expression for all selected properties.

---

### [Enable Selected Expressions (v1.0)](Enable_Selected_Expressions.jsx)

Enable the expression for all selected properties.

---

### [Find All Expressions (v1.0)](Find_All_Expressions.jsx)

Find and report all active expressions in the current project. Useful in preparing
compositions for Lottie.

---

### [Fix Fresh Pickwhip Expression (v2.2)](Fix_Fresh_Pickwhip_Expression.jsx)

Append `.value;` to the end of an expression recently set with the pickwhip.

---

### [Set Simple Time Remap Loop (v2.1)](Set_Simple_Time_Remap_Loop.jsx)

Automatically enable Time Remapping, set the appropriate keyframes, and apply the
`loopOut()` expression to correctly loop a layer.

---

### [Toggle Maintain Scale Expression (v2.1)](Toggle_Maintain_Scale_Expression.jsx)

Toggle an expression that maintains visual scale for layer regardless of Z position.

---

### [Update Expressions (v1.1)](Update_Expressions.jsx)

Find an replace all instances of a specific expression with a new expression.

---

### [Update Stroke Weight Expressions (v1.0)](Update_Stroke_Weight_Expressions.jsx)

There are a few variations of a `Maintain Stroke Weight` expression floating around
the internet but I believe mine is the best as it handles 0% scale much more elegantly. Use the
script to replace a common alternate.

OLD:
`value / length(toComp([0,0]), toComp([0.7071,0.7071])) || 0.001;`

NEW:
`s = length(toComp([0,0]),toComp([0.7071,0.7071])); (s) ? value / s : 0;`

