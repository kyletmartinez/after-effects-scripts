# After Effects Scripts

A collection of helpful scripts for After Effects that run natively or with a 3rd party script launcher..

To run the script natively in After Effects use `File > Script > Run Script File...` and choose this script.

## Scripts

#### [Add 3D Break (v1.1)](/scripts/Add%203D%20Break.jsx)

Add an adjustment layer above the currently selected layer to break the 3D space of
After Effects. If no layers are selected the adjustment layer will be added at the top.

#### [Add Camera With Controller (v1.1)](/scripts/Add%20Camera%20With%20Controller.jsx)

Add a camera and 3D null as a controller to the current composition.

#### [Add Composition Guides (v1.1)](/scripts/Add%20Composition%20Guides.jsx)

Add a 16x9 fuscia rectangle shape layer with guide layer enable to serve as a guide
for compositions with larger or smaller dimensions. Helpful with precomposed character rigs.

#### [Add Expression to Selected Properties (v1.1)](/scripts/Add%20Expression%20to%20Selected%20Properties.jsx)

Add an expression to all selected properties.

#### [Add Fill With Color Cycle (v1.1)](/scripts/Add%20Fill%20With%20Color%20Cycle.jsx)

Add the Fill effect to all selected layers while cycling through red, green, blue,yellow, magenta, and cyan.

#### [Add Marker(s) At Out Point (v1.1)](/scripts/Add%20Marker(s)%20At%20Out%20Point.jsx)

Add a composition marker at each outpoint of every layer in the composition.

#### [Add Markers to Selected Layers (v1.3)](/scripts/Add%20Markers%20to%20Selected%20Layers.jsx)

Add a new maker to all selected layers with an optional comment.

#### [Add Posterize Time (v1.0)](/scripts/Add%20Posterize%20Time.jsx)

Add an adjustment layer with the Posterize Time effect to the current composition.

#### [Add Selected Properties to Essential Graphics Panel (v1.1)](/scripts/Add%20Selected%20Properties%20to%20Essential%20Graphics%20Panel.jsx)

Add all selected properties to Essential Graphics Panel using effect names instead
of property names for expression controls.

#### [Add Visibility Controller (v1.1)](/scripts/Add%20Visibility%20Controller.jsx)

Add a checkbox that controls the visibility (opacity) for a selected layer.

#### [Append Posterize Time (v1.0)](/scripts/Append%20Posterize%20Time.jsx)

Appends "posterizeTime(12);" to properties with existing expressions.

#### [Calculate Difference Between Keyframe Values (v1.0)](/scripts/Calculate%20Difference%20Between%20Keyframe%20Values.jsx)

Calculate the difference between two keyframe values.

#### [Calculate Distance Between Layers (v1.1)](/scripts/Calculate%20Distance%20Between%20Layers.jsx)

Calculate the distance between any two layers. Two 2D layers will result in 2D
distance (composition space). Two 3D layers will result in 3D distance (world space). One 2D
layer and one 3D layer will result in 3D distance (world space). Hold the ALT key to force the
result to be 2D distance (composition space). Forcing 2D distance (composition space) will result
in the optical distance between two layers.

#### [Center Composition (v1.3)](/scripts/Center%20Composition.jsx)

Center the composition in the Composition Panel. Hold the ALT key or SHIFT key for
other zoom levels.

#### [Change Nested Composition Background (v1.1)](/scripts/Change%20Nested%20Composition%20Background.jsx)

Change the background color of the current composition using a hexcode. All nested
precomps will be affected as well (and precomps within those precomps and so on).

#### [Change Nested Composition Duration (v1.2)](/scripts/Change%20Nested%20Composition%20Duration.jsx)

Change the composition and all layers to the given duration. All nested precomps
will be affected as well (and precomps within those precomps and so on).

#### [Change Nested Composition Frame Rate (v1.1)](/scripts/Change%20Nested%20Composition%20Frame%20Rate.jsx)

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

#### [Clean Render Queue (v1.3)](/scripts/Clean%20Render%20Queue.jsx)

Clean out the Render Queue.

#### [Clean Selected Folders (v1.3)](/scripts/Clean%20Selected%20Folders.jsx)

Clean unused items from any selected folders. Remove empty folders unless they are
top level.

#### [Copy Composition Work Area (v1.2)](/scripts/Copy%20Composition%20Work%20Area.jsx)

Copy the Work Area from the active composition. Hold the ALT key to paste the copied
Work Area to the active composition.

#### [Create Eye Rig (v1.1)](/scripts/Create%20Eye%20Rig.jsx)

Used specifically for a current project. Creates an eye rig for a selected eye
layer. Probably pretty usless outside of this specific use case but has some nice code to
steal for future scripts.

#### [Create Text Layers From File (v1.0)](/scripts/Create%20Text%20Layers%20From%20File.jsx)

Add a new Text Layer in the current composition for each line of text in the file in
the selected text file.

#### [Cycle Composition Background Color (v1.2)](/scripts/Cycle%20Composition%20Background%20Color.jsx)

Cycle the composition background color between black, gray, and white.

#### [Disable Specified Effects (v1.0)](/scripts/Disable%20Specified%20Effects.jsx)

Disable all of the specified effects in the project. Alt + click to enable. Add
additional effects to be checked into the matchNames object.

#### [Export Path Points (v1.0)](/scripts/Export%20Path%20Points.jsx)

Export path points for a selected path property. Currently outputs a text file
straight to the desktop.

#### [Expose Essential Properties to Essential Graphics Panel (v1.1)](/scripts/Expose%20Essential%20Properties%20to%20Essential%20Graphics%20Panel.jsx)

Essential Properties from a nested composition can not be directly added to the
Essential Graphic Panel of the parent composition. Instead, run this script to expose those
Essential Properties by using an intermediate expression controller. Select a layer to add all
properterties or select specific properties to add them. This script does not currently support
Dropdown Menu Control.

#### [Fix Turbulent Displace (v1.0)](/scripts/Fix%20Turbulent%20Displace.jsx)

Iterate recursively through all precomps and all layers to change the Size property
of all Turbulent Displace effects.

#### [Force Composition Panel Refresh (v1.2)](/scripts/Force%20Composition%20Panel%20Refresh.jsx)

Force the Composition Panel to refresh the current frame.

#### [Hard Solo Layers (v1.3)](/scripts/Hard%20Solo%20Layers.jsx)

Disable (toggle the eyeball icon) on all unselected layers.

#### [Invert Selected Keyframes (v1.2)](/scripts/Invert%20Selected%20Keyframes.jsx)

Invert selected keyframe values.

#### [Lock All Layers (v1.3)](/scripts/Lock%20All%20Layers.jsx)

Lock every layer in every conmposition in the project.

#### [Lock All Null Layers (v1.1)](/scripts/Lock%20All%20Null%20Layers.jsx)

Lock all layers in a composition that are a null layer.

#### [Make Hold Keyframes (v1.3)](/scripts/Make%20Hold%20Keyframes.jsx)

Convert selected keyframes into hold keyframes.

#### [Match Selected Layer Start Time To Below (v1.1)](/scripts/Match%20Selected%20Layer%20Start%20Time%20To%20Below.jsx)

Match the start time of all selected layers to the layer directly below it.

#### [Matte Selected Layers to Layer Above (v1.0)](/scripts/Matte%20Selected%20Layers%20to%20Layer%20Above.jsx)

Set the track matte of a layer to the layer above it using the specified track matte
type. Change TRACK\_MATTE\_TYPE to any matte type or to none.

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

#### [Remove All Proxies (v1.2)](/scripts/Remove%20All%20Proxies.jsx)

Remove all proxies set within the project.

#### [Rename Arm Puppet Pins (v1.0)](/scripts/Rename%20Arm%20Puppet%20Pins.jsx)

Rename selected puppet pins added to arm layers in preparation for Duik

#### [Rename Composition to File Name (v1.1)](/scripts/Rename%20Composition%20to%20File%20Name.jsx)

Rename the current composition to the same name as the project.

#### [Rename First Layer to Composition Name (v1.0)](/scripts/Rename%20First%20Layer%20to%20Composition%20Name.jsx)

Rename the first layer in each selected composition to match the name of the
composition.

#### [Rename Selected Project Items (v1.2)](/scripts/Rename%20Selected%20Project%20Items.jsx)

Rename selected project items and append zero padded numbers.

#### [Rename Selected Layer Source (v1.4)](/scripts/Rename%20Selected%20Layer%20Source.jsx)

Rename the source of the currently selected layer.

#### [Rename Selected Layer Sources (v1.2)](/scripts/Rename%20Selected%20Layer%20Sources.jsx)

Rename the sources of the currently selected layers.

#### [Rename Selected Layers With Text (v1.0)](/scripts/Rename%20Selected%20Layers%20With%20Text.jsx)

Rename selected layers and append each character along with character count.

#### [Rename Selected Layers (v1.7)](/scripts/Rename%20Selected%20Layers.jsx)

Rename selected layers and append zero padded numbers. Selecting a single layer
will not append zero padded numbers.

#### [Rename Source to Layer Name (v1.4)](/scripts/Rename%20Source%20to%20Layer%20Name.jsx)

Rename the source of the selected layer to match.

#### [Replace Text in Project Item Name (v1.1)](/scripts/Replace%20Text%20in%20Project%20Item%20Name.jsx)

Replace text in the name of all selected project items.

#### [Reset Composition Work Area (v1.2)](/scripts/Reset%20Composition%20Work%20Area.jsx)

Set the Work Area to cover the entire composition.

#### [Round Position (v1.0)](/scripts/Round%20Position.jsx)

Round the position values of selected layers to the nearest whole number.

#### [Save Frame as PNG (v1.3)](/scripts/Save%20Frame%20as%20PNG.jsx)

Save the current frame as a PNG to the desktop. This does support transparency but
the image is not amazing quality.

Output will match the following format: "Comp Name YYYY-MM-DD HH.MM.SS AM.png"

#### [Select All Children (v1.2)](/scripts/Select%20All%20Children.jsx)

Select all layers parented to the currently selected layer.

#### [Select All Non-Null Layers (v1.1)](/scripts/Select%20All%20Non-Null%20Layers.jsx)

Select all layers in a composition that are not a null layer.

#### [Select Disable Layers (v1.1)](/scripts/Select%20Disable%20Layers.jsx)

Select all layers in the current composition that are disabled. Disabled means the
eyeball icon is toggled OFF.

#### [Select Layers Below Matte (v1.1)](/scripts/Select%20Layers%20Below%20Matte.jsx)

Select layers below any layer with label 16 (Black).

#### [Select Random Layers (v1.0)](/scripts/Select%20Random%20Layers.jsx)

Randomly select layers from a given composition. Layer selection is currently skewed
towards 20% layer selection rather than 50% layer selection.

#### [Selected Unparented Layers (v1.1)](/scripts/Selected%20Unparented%20Layers.jsx)

Select all unparented layers in the current composition.

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

#### [Toggle Selected Property Expressions (v1.1)](/scripts/Toggle%20Selected%20Property%20Expressions.jsx)

Toggle the expressions for selected properties

#### [Unlock All Layers (v1.0)](/scripts/Unlock%20All%20Layers.jsx)

Unlock every layer in every conmposition in the project.

#### [Version Up Comps (v1.1)](/scripts/Version%20Up%20Comps.jsx)

Typically my main compositions will end in a version number "\_v05". This script
will automatically version-up any comp with a version number such as "\_v06".

#### [Zero Position (v2.1)](/scripts/Zero%20Position.jsx)

Zero out the position of all selected layers.

