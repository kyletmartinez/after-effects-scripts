# After Effects Scripts

A collection of helpful scripts for After Effects that run natively or with a 3rd party script launcher..

To run the script natively in After Effects use `File > Script > Run Script File...` and choose this script.

## Scripts

#### [Add 3D Break (v1.3)](/scripts/Add%203D%20Break.jsx)

Add an adjustment layer above the currently selected layer to break the 3D space of
After Effects. If no layers are selected the adjustment layer will be added at the top.

#### [Add Camera With Controller (v2.0)](/scripts/Add%20Camera%20With%20Controller.jsx)

Add a camera and 3D null as a controller to the current composition.

#### [Add Composition Guides (v1.2)](/scripts/Add%20Composition%20Guides.jsx)

Add a 16x9 fuscia rectangle shape layer with guide layer enable to serve as a guide
for compositions with larger or smaller dimensions. Helpful with precomposed character rigs.

#### [Add Expression to Selected Properties (v1.1)](/scripts/Add%20Expression%20to%20Selected%20Properties.jsx)

Add an expression to all selected properties.

#### [Add Fill With Color Cycle (v1.1)](/scripts/Add%20Fill%20With%20Color%20Cycle.jsx)

Add the Fill effect to all selected layers while cycling through red, green, blue,yellow, magenta, and cyan.

#### [Add Marker(s) At Out Point (v1.1)](/scripts/Add%20Marker(s)%20At%20Out%20Point.jsx)

Add a composition marker at each outpoint of every layer in the composition.

#### [Add Markers to Selected Layers (v1.4)](/scripts/Add%20Markers%20to%20Selected%20Layers.jsx)

Add a new maker to all selected layers with an optional comment.

#### [Add Posterize Time Adjustment Layer (v1.1)](/scripts/Add%20Posterize%20Time%20Adjustment%20Layer.jsx)

Add an adjustment layer to the current composition to cut the framerate in half.
Animation will now happen on 2s.

#### [Add Posterize Time Expression (v1.0)](/scripts/Add%20Posterize%20Time%20Expression.jsx)

Add an expression to all selected properties to cut the framerate in half.
Animation will now happen on 2s. Existing expressions will be preserved.

#### [Add Selected Properties to Essential Graphics Panel (v1.1)](/scripts/Add%20Selected%20Properties%20to%20Essential%20Graphics%20Panel.jsx)

Add all selected properties to Essential Graphics Panel using effect names instead
of property names for expression controls.

#### [Add Visibility Controller (v2.0)](/scripts/Add%20Visibility%20Controller.jsx)

Add a checkbox that controls the visibility, using opacity, for a selected layer.

#### [Calculate Difference Between Keyframe Values (v1.0)](/scripts/Calculate%20Difference%20Between%20Keyframe%20Values.jsx)

Calculate the difference between two keyframe values.

#### [Calculate Distance Between Layers (v1.1)](/scripts/Calculate%20Distance%20Between%20Layers.jsx)

Calculate the distance between any two layers. Two 2D layers will result in 2D
distance (composition space). Two 3D layers will result in 3D distance (world space). One 2D
layer and one 3D layer will result in 3D distance (world space). Hold the ALT key to force the
result to be 2D distance (composition space). Forcing 2D distance (composition space) will result
in the optical distance between two layers.

#### [Center Composition (v2.0)](/scripts/Center%20Composition.jsx)

Center the composition in the Composition Panel. Hold ALT or SHIFT for other values.

#### [Change Nested Composition Background (v1.1)](/scripts/Change%20Nested%20Composition%20Background.jsx)

Change the background color of the current composition using a hexcode. All nested
precomps will be affected as well (and precomps within those precomps and so on).

#### [Change Nested Composition Duration (v1.2)](/scripts/Change%20Nested%20Composition%20Duration.jsx)

Change the composition and all layers to the given duration. All nested precomps
will be affected as well (and precomps within those precomps and so on).

#### [Change Nested Composition Frame Rate (v1.2)](/scripts/Change%20Nested%20Composition%20Frame%20Rate.jsx)

Change the composition and all layers to the given frame rate. All nested precomps
will be affected as well (and precomps within those precomps and so on).

#### [Change Nested Composition Layer Colors (v1.1)](/scripts/Change%20Nested%20Composition%20Layer%20Colors.jsx)

Set the label color of all layers in the current composition to "None." All nested
precomps will be affected as well (and precomps within those precomps and so on).

#### [Change Nested Composition Layer Names (v1.1)](/scripts/Change%20Nested%20Composition%20Layer%20Names.jsx)

Rename all the layers within all nested compositions.

#### [Change Nested Composition Resolution (v1.1)](/scripts/Change%20Nested%20Composition%20Resolution.jsx)

Change the composition resolution factor. All nested precomps
will be affected as well (and precomps within those precomps and so on).

#### [Clean Render Queue (v2.0)](/scripts/Clean%20Render%20Queue.jsx)

Clean out the Render Queue.

#### [Clean Selected Folders (v1.3)](/scripts/Clean%20Selected%20Folders.jsx)

Clean unused items from any selected folders. Remove empty folders unless they are
top level.

#### [Copy Composition Markers To Layer (v1.0)](/scripts/Copy%20Composition%20Markers%20To%20Layer.jsx)

Copy all markers (duration, comments, and labels) from the current composition to
the currently selected layer.

Counterpart scripts to "Copy Layer Makers to Composition.jsx"

#### [Copy Composition Work Area (v1.2)](/scripts/Copy%20Composition%20Work%20Area.jsx)

Copy the Work Area from the active composition. Hold the ALT key to paste the copied
Work Area to the active composition.

#### [Copy Layer Makers To Composition (v1.0)](/scripts/Copy%20Layer%20Makers%20To%20Composition.jsx)

Copy all markers (duration, comments, and labels) from the currently selected
layer to the current composition.

Counterpart scripts to "Copy Composition Markers To Layer.jsx"

#### [Create Text Layers From File (v1.0)](/scripts/Create%20Text%20Layers%20From%20File.jsx)

Add a new Text Layer in the current composition for each line of text in the file in
the selected text file.

#### [Cycle Composition Background Color (v2.0)](/scripts/Cycle%20Composition%20Background%20Color.jsx)

Cycle the composition background color between black, gray, and white.

#### [Disable Specified Effects (v1.0)](/scripts/Disable%20Specified%20Effects.jsx)

Disable all of the specified effects in the project. Alt + click to enable. Add
additional effects to be checked into the matchNames object.

#### [Duplicate Selected Layer (v1.0)](/scripts/Duplicate%20Selected%20Layer.jsx)

Exactly like selected layer and hitting CMD/CTRL + D. But instead of moving the
duplicated layer above the selected layer, move the duplicated layer below the selected layer.
This script currently only supports duplicating the first selected layer and will ignore any
other selected layers.

#### [Export Path Points (v2.0)](/scripts/Export%20Path%20Points.jsx)

Export path points for the select path property to a text file on the Desktop.

#### [Expose Essential Properties to Essential Graphics Panel (v1.1)](/scripts/Expose%20Essential%20Properties%20to%20Essential%20Graphics%20Panel.jsx)

Essential Properties from a nested composition can not be directly added to the
Essential Graphic Panel of the parent composition. Instead, run this script to expose those
Essential Properties by using an intermediate expression controller. Select a layer to add all
properterties or select specific properties to add them. This script does not currently support
Dropdown Menu Control.

#### [Find Specific Effect (v1.0)](/scripts/Find%20Specific%20Effect.jsx)

Find all instances of a specific effect in the current project and alert the layer
which the effect is applied. Searching is done via matchName for better specificity.

#### [Fix Turbulent Displace (v1.0)](/scripts/Fix%20Turbulent%20Displace.jsx)

Iterate recursively through all precomps and all layers to change the Size property
of all Turbulent Displace effects.

#### [Force Composition Panel Refresh (v2.0)](/scripts/Force%20Composition%20Panel%20Refresh.jsx)

Force the Composition Panel to refresh the current frame.

#### [Hard Solo Layers (v1.3)](/scripts/Hard%20Solo%20Layers.jsx)

Disable (toggle the eyeball icon) on all unselected layers.

#### [Increment Composition Versions (v2.0)](/scripts/Increment%20Composition%20Versions.jsx)

Increment any version numbers found in the name of all compositions in the current
project.

#### [Invert Selected Keyframes (v1.2)](/scripts/Invert%20Selected%20Keyframes.jsx)

Invert selected keyframe values.

#### [Lock All Layers (v2.0)](/scripts/Lock%20All%20Layers.jsx)

Lock all layers in all conmpositions in the current project.

#### [Lock All Null Layers (v1.1)](/scripts/Lock%20All%20Null%20Layers.jsx)

Lock all layers in a composition that are a null layer.

#### [Make Hold Keyframes (v1.4)](/scripts/Make%20Hold%20Keyframes.jsx)

Convert selected keyframes into hold keyframes.

#### [Match Selected Layer In Time To Below (v1.0)](/scripts/Match%20Selected%20Layer%20In%20Time%20To%20Below.jsx)

Match the in point of all selected layers to the layer directly below it.

#### [Match Selected Layer Start Time To Below (v1.1)](/scripts/Match%20Selected%20Layer%20Start%20Time%20To%20Below.jsx)

Match the start time of all selected layers to the layer directly below it.

#### [Merge Imported Selected Items (v1.0)](/scripts/Merge%20Imported%20Selected%20Items.jsx)

Attempt to move all selected and newly imported items into their matching and
previously existing folders.

#### [Multiply Selected Keyframes (v1.0)](/scripts/Multiply%20Selected%20Keyframes.jsx)

Multiply selected keyframe values by a provided value.

#### [OCD Expression Fix (v1.1)](/scripts/OCD%20Expression%20Fix.jsx)

Append ".value;" to the end of the expression on selected properties. Typically used
immediately after using the pickwhip to quickly set the expression.

#### [Parent Newton Layers (v1.1)](/scripts/Parent%20Newton%20Layers.jsx)

For each selected layers, parent the closest layer in composition space. Typically
used for prepping artwork for Motion Botique's Newton plugin.

#### [Parent Selected Layers to Layers Below (v1.0)](/scripts/Parent%20Selected%20Layers%20to%20Layers%20Below.jsx)

Parent each selected layer to the layer directly below it.

#### [Posterize Keyframes (v1.1)](/scripts/Posterize%20Keyframes.jsx)

Posterize all selected keyframes in a composition to be on 2s.

#### [Posterize Start Time (v1.1)](/scripts/Posterize%20Start%20Time.jsx)

Posterize the start time of all layers in a composition to be on 2s.

#### [Randomize Layer Start Time (v1.3)](/scripts/Randomize%20Layer%20Start%20Time.jsx)

Randomly shift the start time of all selected layers within a provided range.

#### [Randomize Selected Keyframe Values (v1.3)](/scripts/Randomize%20Selected%20Keyframe%20Values.jsx)

Randomize the value for selected 1 dimensional keyframes.

#### [Remove All Proxies (v2.0)](/scripts/Remove%20All%20Proxies.jsx)

Remove all proxies within the current project.

#### [Rename Arm Puppet Pins (v1.0)](/scripts/Rename%20Arm%20Puppet%20Pins.jsx)

Rename selected puppet pins added to arm layers in preparation for Duik

#### [Rename Composition to File Name (v2.0)](/scripts/Rename%20Composition%20to%20File%20Name.jsx)

Rename the composition to match the name of the project file.

#### [Rename First Layer to Composition Name (v1.0)](/scripts/Rename%20First%20Layer%20to%20Composition%20Name.jsx)

Rename the first layer in each selected composition to match the name of the
composition.

#### [Rename Selected Project Items (v1.2)](/scripts/Rename%20Selected%20Project%20Items.jsx)

Rename selected project items and append zero padded numbers.

#### [Rename Selected Layer Source (v1.4)](/scripts/Rename%20Selected%20Layer%20Source.jsx)

Rename the source of the currently selected layer.

#### [Rename Selected Layer Sources (v1.2)](/scripts/Rename%20Selected%20Layer%20Sources.jsx)

Rename the sources of the currently selected layers.

#### [Rename Selected Layers With Letters (v2.0)](/scripts/Rename%20Selected%20Layers%20With%20Letters.jsx)

Rename the selected layers append letters as needed.

#### [Rename Selected Layers With Numbers (v2.0)](/scripts/Rename%20Selected%20Layers%20With%20Numbers.jsx)

Rename the selected layers appending zero-padded numbers as needed.

#### [Rename Selected Layers With Text (v1.0)](/scripts/Rename%20Selected%20Layers%20With%20Text.jsx)

Rename selected layers and append each character along with character count.

#### [Rename Source to Layer Name (v1.4)](/scripts/Rename%20Source%20to%20Layer%20Name.jsx)

Rename the source of the selected layer to match.

#### [Replace Text in Project Item Name (v1.1)](/scripts/Replace%20Text%20in%20Project%20Item%20Name.jsx)

Replace text in the name of all selected project items.

#### [Reset Composition Work Area (v2.0)](/scripts/Reset%20Composition%20Work%20Area.jsx)

Set the Work Area to cover the entire composition.

#### [Round Position (v1.0)](/scripts/Round%20Position.jsx)

Round the position values of selected layers to the nearest whole number.

#### [Round Selected Keyframe Value (v1.0)](/scripts/Round%20Selected%20Keyframe%20Value.jsx)

Round the values for all selected keyframes to the nearest whole number. Currently
works with 1 dimensional properties (Opacity, Rotation, etc.), 2 dimensional properties
(2D Scale, 2D Position, etc.), and 3 dimensional properties (3D Scale, 3D Position, etc.).

#### [Save Frame as PNG (v1.4)](/scripts/Save%20Frame%20as%20PNG.jsx)

Save the current frame as a PNG to the desktop. This does support transparency but
the image is not amazing quality.

Output will match the following format: "Comp Name YYYY-MM-DD HH.MM.SS AM.png"

#### [Select All Children (v2.0)](/scripts/Select%20All%20Children.jsx)

Select any unlocked layer parented to the selected layer in the current composition.

#### [Select Disable Layers (v2.0)](/scripts/Select%20Disable%20Layers.jsx)

Select any unlocked layer in the current composition that is disabled.

#### [Select Layers Below Label (v2.0)](/scripts/Select%20Layers%20Below%20Label.jsx)

Select all layers in the current composition that are directly below a layer with
the label color 16. In my preferences label 16 is Black (#FFFFFF) and is always used for track
mattes.

#### [Select Non-Null Layers (v2.0)](/scripts/Select%20Non-Null%20Layers.jsx)

Select any unlocked layer in the current composition not created as a null object.

#### [Select Parent Layer (v2.0)](/scripts/Select%20Parent%20Layer.jsx)

Select the parent of the currently selected layer.

#### [Select Random Layers (v2.0)](/scripts/Select%20Random%20Layers.jsx)

Randomly select any unlocked layer in the current composition.

#### [Select Unparented Layers (v2.0)](/scripts/Select%20Unparented%20Layers.jsx)

Select any unlocked layer in the current composition without a parent.

#### [Set All Item Labels To None (v2.0)](/scripts/Set%20All%20Item%20Labels%20To%20None.jsx)

Set the label for all items in the current project to None.

#### [Set All Layer Labels To None (v2.0)](/scripts/Set%20All%20Layer%20Labels%20To%20None.jsx)

Set the label for all layers in the current composition to None.

#### [Set All Track Matte Labels (v2.0)](/scripts/Set%20All%20Track%20Matte%20Labels.jsx)

Set the label color for all track matte layers in the active composition to 16. In
my preferences label 16 is Black (#FFFFFF) and is always used for track mattes.

#### [Set New Color (v1.4)](/scripts/Set%20New%20Color.jsx)

Set new color based on original color, blend mode, and opacity.

#### [Set Proxies From Folder (v1.1)](/scripts/Set%20Proxies%20From%20Folder.jsx)

Automatically set proxies to all rendered MOV files in a folder that match
compositions within the project.

#### [Set Random Z Position (v1.0)](/scripts/Set%20Random%20Z%20Position.jsx)

Set the Z Position of all selected layers to a random value between RANDOM\_MIN and
RANDOM\_MAX.

#### [Set Selected Layer Track Matte To Layer Above It (v1.1)](/scripts/Set%20Selected%20Layer%20Track%20Matte%20To%20Layer%20Above%20It.jsx)

Set the track matte for all selected layers to the layer above it. Currently uses
a Luma Inverted track matte type.

#### [Set Simple Time Remap Loop (v1.0)](/scripts/Set%20Simple%20Time%20Remap%20Loop.jsx)

Automatically enable Time Remapping, set the appropriate keyframes, and apply the
loopOut() expression to correctly loop a layer.

#### [Set To Average Position (v1.1)](/scripts/Set%20To%20Average%20Position.jsx)

Set the last selected layer to the average position of all other layers. Hold the
ALT key to set the first selected layers to the average position of all other layers.

#### [Shift Start Time For Selected Layers (v1.4)](/scripts/Shift%20Start%20Time%20For%20Selected%20Layers.jsx)

Shift all selected layers to the Current Time Indicator as a group while maintaining
relative timing.

#### [Stick Effect to Layer (v1.2)](/scripts/Stick%20Effect%20to%20Layer.jsx)

Force effects wih selected position properties such as CC Bend It or Gradient Ramp
to stick properly to a layer.

#### [Swap Property (v1.1)](/scripts/Swap%20Property.jsx)

Swap the values of two selected properties. They must be the same property type.

#### [Swap Selected Property Values (v1.0)](/scripts/Swap%20Selected%20Property%20Values.jsx)

For each selected property, swap the property values. For example, use this script
to swap the X and Y size for a rectangle shape layer.

#### [Toggle Difference Blend Mode (v1.1)](/scripts/Toggle%20Difference%20Blend%20Mode.jsx)

Toggle the blend mode of the selected layers between Normal and Difference. Hold the
ALT key to force all selected layers to Normal blend mode. Hold the SHIFT key to force all
selected layers to Difference blend mode.

#### [Toggle Maintain Scale Expression (v1.0)](/scripts/Toggle%20Maintain%20Scale%20Expression.jsx)

Disable or enable an expression that maintains the visual scale of a layer as it's
positioned in Z Space.

#### [Toggle Onion Skinning (v1.3)](/scripts/Toggle%20Onion%20Skinning.jsx)

Toggle onion skinning in the current composition.

#### [Toggle Puppet Pin Type (v1.1)](/scripts/Toggle%20Puppet%20Pin%20Type.jsx)

Toggle selected puppet pins between Position type and Advanced type.

#### [Toggle Transparency Grid Preferences (v1.0)](/scripts/Toggle%20Transparency%20Grid%20Preferences.jsx)

Sometimes the transparency grid colors are too agressive and the grid size is too
small. Toggle between the default preferences and a custom "dark mode" with larger grid cells.

#### [Unlock All Layers (v2.0)](/scripts/Unlock%20All%20Layers.jsx)

Unlock all layers in all conmpositions in the current project.

#### [Zero Position (v2.1)](/scripts/Zero%20Position.jsx)

Zero out the position of all selected layers.

