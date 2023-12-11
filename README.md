# After Effects Scripts

A collection of helpful scripts for After Effects that run natively or with a 3rd party script launcher..

To run the script natively in After Effects use `File > Script > Run Script File...` and choose this script.

## Scripts

#### [Add 3D Break](/scripts/Add%203D%20Break.jsx)

Add an adjustment layer above the currently selected layer to break the 3D space of
After Effects. If no layers are selected the adjustment layer will be added at the top.

#### [Add Camera With Controller](/scripts/Add%20Camera%20With%20Controller.jsx)

Add a camera and 3D null as a controller to the current composition.

#### [Add Composition Guides](/scripts/Add%20Composition%20Guides.jsx)

Add a 16x9 fuscia rectangle shape layer with guide layer enable to serve as a guide
for compositions with larger or smaller dimensions. Helpful with precomposed character rigs.

#### [Add Expression to Selected Properties](/scripts/Add%20Expression%20to%20Selected%20Properties.jsx)

Add an expression to all selected properties.

#### [Add Fill With Color Cycle](/scripts/Add%20Fill%20With%20Color%20Cycle.jsx)

Add the Fill effect to all selected layers while cycling through red, green, blue,yellow, magenta, and cyan.

#### [Add Marker(s) At Out Point](/scripts/Add%20Marker(s)%20At%20Out%20Point.jsx)

Add a composition marker at each outpoint of every layer in the composition.

#### [Add Markers to Selected Layers](/scripts/Add%20Markers%20to%20Selected%20Layers.jsx)

Add a new maker to all selected layers with an optional comment.

#### [Add Posterize Time](/scripts/Add%20Posterize%20Time.jsx)

Add an adjustment layer with the Posterize Time effect to the current composition.

#### [Add Selected Properties to Essential Graphics Panel](/scripts/Add%20Selected%20Properties%20to%20Essential%20Graphics%20Panel.jsx)

Add all selected properties to Essential Graphics Panel using effect names instead
of property names for expression controls.

#### [Add Visibility Controller](/scripts/Add%20Visibility%20Controller.jsx)

Add a checkbox that controls the visibility (opacity) for a selected layer.

#### [Append Posterize Time](/scripts/Append%20Posterize%20Time.jsx)

Appends "posterizeTime(12);" to properties with existing expressions.

#### [Calculate Difference Between Keyframe Values](/scripts/Calculate%20Difference%20Between%20Keyframe%20Values.jsx)

Calculate the difference between two keyframe values.

#### [Calculate Distance Between Layers](/scripts/Calculate%20Distance%20Between%20Layers.jsx)

Calculate the distance between any two layers. Two 2D layers will result in 2D
distance (composition space). Two 3D layers will result in 3D distance (world space). One 2D
layer and one 3D layer will result in 3D distance (world space). Hold the ALT key to force the
result to be 2D distance (composition space). Forcing 2D distance (composition space) will result
in the optical distance between two layers.

#### [Center Composition](/scripts/Center%20Composition.jsx)

Center the composition in the Composition Panel. Hold the ALT key or SHIFT key for
other zoom levels.

#### [Change Nested Composition Background](/scripts/Change%20Nested%20Composition%20Background.jsx)

Change the background color of the current composition using a hexcode. All nested
precomps will be affected as well (and precomps within those precomps and so on).

#### [Change Nested Composition Duration](/scripts/Change%20Nested%20Composition%20Duration.jsx)

Change the composition and all layers to the given duration. All nested precomps
will be affected as well (and precomps within those precomps and so on).

#### [Change Nested Composition Frame Rate](/scripts/Change%20Nested%20Composition%20Frame%20Rate.jsx)

Change the composition and all layers to the given frame rate. All nested precomps
will be affected as well (and precomps within those precomps and so on).

#### [Change Nested Composition Layer Colors](/scripts/Change%20Nested%20Composition%20Layer%20Colors.jsx)

Set the label color of all layers in the current composition to "None." All nested
precomps will be affected as well (and precomps within those precomps and so on).

#### [Change Nested Composition Layer Names](/scripts/Change%20Nested%20Composition%20Layer%20Names.jsx)

Rename all the layers within all nested compositions.

#### [Change Nested Composition Resolution](/scripts/Change%20Nested%20Composition%20Resolution.jsx)

Change the composition resolution factor. All nested precomps
will be affected as well (and precomps within those precomps and so on).

#### [Clean Render Queue](/scripts/Clean%20Render%20Queue.jsx)

Clean out the Render Queue.

#### [Clean Selected Folders](/scripts/Clean%20Selected%20Folders.jsx)

Clean unused items from any selected folders. Remove empty folders unless they are
top level.

#### [Copy Composition Work Area](/scripts/Copy%20Composition%20Work%20Area.jsx)

Copy the Work Area from the active composition. Hold the ALT key to paste the copied
Work Area to the active composition.

#### [Create Eye Rig](/scripts/Create%20Eye%20Rig.jsx)

Used specifically for a current project. Creates an eye rig for a selected eye
layer. Probably pretty usless outside of this specific use case but has some nice code to
steal for future scripts.

#### [Create Text Layers From File](/scripts/Create%20Text%20Layers%20From%20File.jsx)

Add a new Text Layer in the current composition for each line of text in the file in
the selected text file.

#### [Cycle Composition Background Color](/scripts/Cycle%20Composition%20Background%20Color.jsx)

Cycle the composition background color between black, gray, and white.

#### [Disable Specified Effects](/scripts/Disable%20Specified%20Effects.jsx)

Disable all of the specified effects in the project. Alt + click to enable. Add
additional effects to be checked into the matchNames object.

#### [Expose Essential Properties to Essential Graphics Panel](/scripts/Expose%20Essential%20Properties%20to%20Essential%20Graphics%20Panel.jsx)

Essential Properties from a nested composition can not be directly added to the
Essential Graphic Panel of the parent composition. Instead, run this script to expose those
Essential Properties by using an intermediate expression controller. Select a layer to add all
properterties or select specific properties to add them. This script does not currently support
Dropdown Menu Control.

#### [Force Composition Panel Refresh](/scripts/Force%20Composition%20Panel%20Refresh.jsx)

Force the Composition Panel to refresh the current frame.

#### [Hard Solo Layers](/scripts/Hard%20Solo%20Layers.jsx)

Disable (toggle the eyeball icon) on all unselected layers.

#### [Invert Selected Keyframes](/scripts/Invert%20Selected%20Keyframes.jsx)

Invert selected keyframe values.

#### [Lock All Layers](/scripts/Lock%20All%20Layers.jsx)

Lock every layer in every conmposition in the project.

#### [Lock All Null Layers](/scripts/Lock%20All%20Null%20Layers.jsx)

Lock all layers in a composition that are a null layer.

#### [Make Hold Keyframes](/scripts/Make%20Hold%20Keyframes.jsx)

Convert selected keyframes into hold keyframes.

#### [Match Selected Layer Start Time To Below](/scripts/Match%20Selected%20Layer%20Start%20Time%20To%20Below.jsx)

Match the start time of all selected layers to the layer directly below it.

#### [Matte Selected Layers to Layer Above](/scripts/Matte%20Selected%20Layers%20to%20Layer%20Above.jsx)

Set the track matte of a layer to the layer above it using the specified track matte
type. Change TRACK\_MATTE\_TYPE to any matte type or to none.

#### [Multiply Selected Keyframes](/scripts/Multiply%20Selected%20Keyframes.jsx)

Multiply selected keyframe values by a provided value.

#### [OCD Expression Fix](/scripts/OCD%20Expression%20Fix.jsx)

Append ".value;" to the end of the expression on selected properties. Typically used
immediately after using the pickwhip to quickly set the expression.

#### [Parent Selected Layers to Layers Below](/scripts/Parent%20Selected%20Layers%20to%20Layers%20Below.jsx)

Parent each selected layer to the layer directly below it.

#### [Posterize Keyframes](/scripts/Posterize%20Keyframes.jsx)

Posterize all selected keyframes in a composition to be on 2s.

#### [Posterize Start Time](/scripts/Posterize%20Start%20Time.jsx)

Posterize the start time of all layers in a composition to be on 2s.

#### [Randomize Layer Start Time](/scripts/Randomize%20Layer%20Start%20Time.jsx)

Randomly shift the start time of all selected layers within a provided range.

#### [Randomize Selected Keyframe Values](/scripts/Randomize%20Selected%20Keyframe%20Values.jsx)

Randomize the value for selected 1 dimensional keyframes.

#### [Remove All Proxies](/scripts/Remove%20All%20Proxies.jsx)

Remove all proxies set within the project.

#### [Rename Composition to File Name](/scripts/Rename%20Composition%20to%20File%20Name.jsx)

Rename the current composition to the same name as the project.

#### [Rename First Layer to Composition Name](/scripts/Rename%20First%20Layer%20to%20Composition%20Name.jsx)

Rename the first layer in each selected composition to match the name of the
composition.

#### [Rename Layer Source](/scripts/Rename%20Layer%20Source.jsx)

Rename the source of the currently selected layer.

#### [Rename Selected Project Items](/scripts/Rename%20Selected%20Project%20Items.jsx)

Rename selected project items and append zero padded numbers.

#### [Rename Selected Layers With Text](/scripts/Rename%20Selected%20Layers%20With%20Text.jsx)

Rename selected layers and append each character along with character count.

#### [Rename Selected Layers](/scripts/Rename%20Selected%20Layers.jsx)

Rename selected layers and append zero padded numbers.

#### [Rename Source to Layer Name](/scripts/Rename%20Source%20to%20Layer%20Name.jsx)

Rename the source of the selected layer to match.

#### [Replace Text in Project Item Name](/scripts/Replace%20Text%20in%20Project%20Item%20Name.jsx)

Replace text in the name of all selected project items.

#### [Reset Composition Work Area](/scripts/Reset%20Composition%20Work%20Area.jsx)

Set the Work Area to cover the entire composition.

#### [Round Position](/scripts/Round%20Position.jsx)

Round the position values of selected layers to the nearest whole number.

#### [Save Frame as PNG](/scripts/Save%20Frame%20as%20PNG.jsx)

Save the current frame as a PNG to the desktop. This does support transparency but
the image is not amazing quality.

Output will match the following format: "Comp Name YYYY-MM-DD HH.MM.SS AM.png"

#### [Select All Children](/scripts/Select%20All%20Children.jsx)

Select all layers parented to the currently selected layer.

#### [Select All Non-Null Layers](/scripts/Select%20All%20Non-Null%20Layers.jsx)

Select all layers in a composition that are not a null layer.

#### [Selected Unparented Layers](/scripts/Selected%20Unparented%20Layers.jsx)

Select all unparented layers in the current composition.

#### [Set New Color](/scripts/Set%20New%20Color.jsx)

Set new color based on original color, blend mode, and opacity.

#### [Set Proxies From Folder](/scripts/Set%20Proxies%20From%20Folder.jsx)

Automatically set proxies to all rendered MOV files in a folder that match
compositions within the project.

#### [Set Selected Layer Track Matte To Layer Above It](/scripts/Set%20Selected%20Layer%20Track%20Matte%20To%20Layer%20Above%20It.jsx)

Set the track matte for all selected layers to the layer above it. Currently uses
a Luma Inverted track matte type.

#### [Set To Average Position](/scripts/Set%20To%20Average%20Position.jsx)

Set the last selected layer to the average position of all other layers. Hold the
ALT key to set the first selected layers to the average position of all other layers.

#### [Shift Selected Layers](/scripts/Shift%20Selected%20Layers.jsx)

Shift all selected layers to the Current Time Indicator as a group while maintaining
relative timing.

#### [Stick Effect to Layer](/scripts/Stick%20Effect%20to%20Layer.jsx)

Force effects wih selected position properties such as CC Bend It or Gradient Ramp
to stick properly to a layer.

#### [Swap Property](/scripts/Swap%20Property.jsx)

Swap the values of two selected properties. They must be the same property type.

#### [Toggle Difference Blend Mode](/scripts/Toggle%20Difference%20Blend%20Mode.jsx)

Toggle the blend mode of the selected layers between Normal and Difference. Hold the
ALT key to force all selected layers to Normal blend mode. Hold the SHIFT key to force all
selected layers to Difference blend mode.

#### [Toggle Maintain Scale Expression](/scripts/Toggle%20Maintain%20Scale%20Expression.jsx)

Disable or enable an expression that maintains the visual scale of a layer as it's
positioned in Z Space.

#### [Toggle Onion Skinning](/scripts/Toggle%20Onion%20Skinning.jsx)

Toggle onion skinning in the current composition.

#### [Toggle Puppet Pin Type](/scripts/Toggle%20Puppet%20Pin%20Type.jsx)

Toggle selected puppet pins between Position type and Advanced type.

#### [Toggle Selected Property Expressions](/scripts/Toggle%20Selected%20Property%20Expressions.jsx)

Toggle the expressions for selected properties

#### [Unlock All Layers](/scripts/Unlock%20All%20Layers.jsx)

Unlock every layer in every conmposition in the project.

#### [Version Up Comps](/scripts/Version%20Up%20Comps.jsx)

Typically my main compositions will end in a version number "\_v05". This script
will automatically version-up any comp with a version number such as "\_v06".

#### [Zero Position](/scripts/Zero%20Position.jsx)

Zero out the position of all selected layers.

