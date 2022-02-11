# After Effects Scripts

A collection of helpful scripts for After Effects that run natively or with a 3rd party script launcher such as [kbar2](https://aescripts.com/kbar), [Tool Launcher](https://aescripts.com/tool-launcher/), or [Quick Menu 2](https://aescripts.com/quick-menu/).

To run the script natively in After Effects use `File > Script > Run Script File...` and choose this script.

## Scripts

#### [Add Camera With Controller](/scripts/Add%20Camera%20With%20Controller.jsx)

Add a camera and 3D null as a controller to the current composition

#### [Add Fill With Color Cycle.jsx](/scripts/Add%20Fill%20With%20Color%20Cycle.jsx)

Add the Fill effect to all selected layers while cycling through red, green, blue, yellow, magenta, and cyan

#### [Add Markers to Selected Layers](/scripts/Add%20Markers%20to%20Selected%20Layers.jsx)

Add a new maker to all selected layers with an optional comment

#### [Add Selected Properties to Essential Graphics Panel](/scripts/Add%20Selected%20Properties%20to%20Essential%20Graphics%20Panel.jsx)

Add all selected properties to Essential Graphics Panel using effect names instead of property names for expression controls

#### [Add Posterize Time](/scripts/Add%20Posterize%20Time.jsx)

Add an adjustment layer with the Posterize Time effect set to 12 fps

#### [Calculate Difference Between Keyframe Values](/scripts/Calculate%20Difference%20Between%20Keyframe%20Values.jsx)

Calculate the difference between two keyframe values

#### [Calculate Distance Between Layers](/scripts/Calculate%20Distance%20Between%202D%20Layers.jsx)

Calculate the distance between any two layers. Two 2D layers will result in 2D distance (composition space). Two 3D layers will result in 3D distance (world space). One 2D layer and one 3D layer will result in 3D distance (world space). Hold the ALT key to force the result to be 2D distance (composition space). Forcing 2D distance (composition space) will result in the optical distance between two layers.

#### [Center Composition](/scripts/Center%20Composition.jsx)

Center the composition in the Composition Panel. Hold the ALT key or SHIFT key for other zoom levels

#### [Clean Render Queue](/scripts/Clean%20Render%20Queue.jsx)

Clean out the Render Queue

#### [Clean Selected Folder](/scripts/Clean%20Selected%20Folder.jsx)

Clean unused items from any selected folders. Remove empty folders unless they are top level

#### [Copy Composition Work Area](/scripts/Copy%20Composition%20Work%20Area.jsx)

Copy the Work Area from the active composition. Hold the ALT key to paste the copied Work Area to the active composition.

#### [Create Text Layers From File](/scripts/Create%20Text%20Layers%20From%20File.jsx)

Add a new Text Layer in the current composition for each line of text in the file in the selected text file

#### [Cycle Composition Background Color](/scripts/Cycle%20Composition%20Background%20Color.jsx)

Cycle the composition background color between black, gray, and white

#### [Disable Specified Effects](/scripts/Disable%20Specified%20Effects.jsx)

Disable all of the specified effects in the project. Hold the ALT key to enable.

#### [Expose Essential Properties to Essential Graphics Panel](script/Expose%20Essential%20Properties%20to%20Essential%20Graphics%20Panel.jsx)

Essential Properties from a nested composition can not be directly added to the Essential Graphic Panel of the parent composition. Instead, run this script to expose those Essential Properties by using an intermediate expression controller. Select a layer to add all properterties or select specific properties to add them. This script does not currently support Dropdown Menu Control.

#### [Force Composition Panel Refresh](/scripts/Force%20Composition%20Panel%20Refresh.jsx)

Force the Composition Panel to refresh the current frame

#### [Hard Solo Layers](/scripts/Hard%20Solo%20Layers.jsx)

Disable (toggle the eyeball icon) on all unselected layers

#### [Invert Selected Keyframes](/scripts/Invert%20Selected%20Keyframes.jsx)

Invert selected keyframe values

#### [Lock All Layers](/scripts/Lock%20All%20Layers.jsx)

Lock every layer in every conmposition in the project

#### [Make Hold Keyframes](/scripts/Make%20Hold%20Keyframes.jsx)

Convert selected keyframes into hold keyframes

#### [Randomize Layer Start Time](/scripts/Randomize%20Layer%20Start%20Time.jsx)

Randomly shift the start time of all selected layers within a provided range

#### [Randomize Selected Keyframe Values](/scripts/Randomize%20Selected%20Keyframe%20Values.jsx)

Randomize the value for selected 1 dimensional keyframes

#### [Rename Composition to File Name](/scripts/Rename%20Composition%20to%20File%20Name.jsx)

Rename the current composition to the same name as the project 

#### [Rename First Layer to Composition Name](/scripts/Rename%20First%20Layer%20to%20Composition%20Name.jsx)

Rename the first layer in each selected composition to match the name of the composition

#### [Rename Layer Source](/scripts/Rename%20Layer%20Source.jsx)

Rename the source of the currently selected layer

#### [Rename Selected Layers With Text](/scripts/Rename%20Selected%20Layers%20With%20Text.jsx)

Rename selected layers and append each character along with character count

#### [Rename Selected Layers](/scripts/Rename%20Selected%20Layers.jsx)

Rename selected layers and append zero padded numbers

#### [Rename Source to Layer Name](/scripts/Rename%20Source%20to%20Layer%20Name.jsx)

Rename the source of the selected layer to match

#### [Reset Composition Work Area](/scripts/Reset%20Composition%20Work%20Area.jsx)

Set the Work Area to cover the entire composition

#### [Shift Selected Layers](/scripts/Shift%20Selected%20Layers.jsx)

Shift all selected layers to the Current Time Indicator as a group while maintaining relative timing

#### [Selected Unparented Layers](/scripts/Select%20Unparented%20Layers.jsx)

Select all unparented layers in the current composition

#### [Set New Color](/scripts/Set%20New%20Color.jsx)

Set new color based on original color, blend mode, and opacity

#### [Stick Effect to Layer](/scripts/Stick%20Effect%20to%20Layer.jsx)

Force effects wih selected position properties such as CC Bend It or Gradient Ramp to stick properly to a layer

#### [Toggle Difference Blend Mode](/scripts/Toggle%20Difference%20Blend%20Mode.jsx)

Toggle the blend mode of the selected layers between Normal and Difference. Hold the ALT key to force all selected layers to Normal blend mode. Hold the SHIFT key to force all selected layers to Difference blend mode.

#### [Toggle Maintain Scale Expression](/scripts/Toggle%20Maintain%20Scale%20Expression.jsx)

Disable or enable an expression that maintains the visual scale of a layer as its positioned in Z Space

#### [Toggle Onion Skinning](/scripts/Toggle%20Onion%20Skinning.jsx)

Toggle onion skinning in the current composition

#### [Zero Position](/scripts/Zero%20Position.jsx)

Zero out the position of all selected layers
