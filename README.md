# After Effects Scripts

A collection of helpful workflow scripts for After Effects that either run natively right from the After Effects menu or partner well with 3rd party tools from [aescripts + aeplugins](https://aescripts.com/) such as [KBar3](https://aescripts.com/kbar/), [Tool Launcher](https://aescripts.com/tool-launcher/), [Quick Menu 3](https://aescripts.com/quick-menu/).

I also have a free tool for After Effects called [Atheneum](https://github.com/kyletmartinez/atheneum-for-after-effects) which I personally use with this script collection.

To run a script natively in After Effects use `File > Script > Run Script File...` and choose the script.

## Scripts

#### [Add 3D Break (v2.1)](/scripts/Add_3D_Break.jsx)

Add an adjustment layer above the currently selected layer to break the 3D space of
After Effects. If no layers are selected the adjustment layer will be added at the top.

#### [Add Additional Animation Control (v1.1)](/scripts/Add_Additional_Animation_Control.jsx)

Add an additional animation controller to the layer for the selected property.

#### [Add Background Layer (v1.1)](/scripts/Add_Background_Layer.jsx)

Add a background layer to the current composition that will stay centered and match
the `width` and `height` of the current composition no matter if it is resized or copy and pasted
to a new composition.

#### [Add Camera With Controller (v2.1)](/scripts/Add_Camera_With_Controller.jsx)

Add a camera and 3D null as a controller to the current composition.

#### [Add Composition Guide (v2.1)](/scripts/Add_Composition_Guide.jsx)

Add a 16x9 fuscia rectangle shape layer to act as a guide. Helpful with things like
precomposed character rigs.

#### [Add Fill With Color Cycle (v2.2)](/scripts/Add_Fill_With_Color_Cycle.jsx)

Add the Fill effect to all selected layers while cycling through `red`, `green`,`blue`, `yellow`, `magenta`, and `cyan`.

#### [Add Markers At Selected Keyframes (v1.0)](/scripts/Add_Markers_At_Selected_Keyframes.jsx)

Add a marker to each layer at the same time as the selected keyframe.

#### [Add Markers At Out Points (v2.1)](/scripts/Add_Markers_At_Out_Points.jsx)

Add a composition marker at the out point of each layer in the composition.

#### [Add Markers to Selected Layers (v2.1)](/scripts/Add_Markers_to_Selected_Layers.jsx)

Add a marker to all selected layers with an optional comment.

#### [Add Posterize Time Adjustment Layer (v2.1)](/scripts/Add_Posterize_Time_Adjustment_Layer.jsx)

Add `Posterize Time` adjustment layer to the current composition. Default `Frame
Rate` will be half the current frame rate.

#### [Add Posterize Time Expression (v2.2)](/scripts/Add_Posterize_Time_Expression.jsx)

Add `posterizeTime(fps)` expression to all selected properties. Default `fps` will
be half the current frame rate and existing expressions will be preserved.

#### [Add Properties To Essential Graphics (v2.1)](/scripts/Add_Properties_To_Essential_Graphics.jsx)

Add all selected properties to Essential Graphics Panel. If any properties belong to
a native After Effects expression controller then use the effect name instead.

* `Angle Control`
* `Checkbox Control`
* `Color Control`
* `Dropdown Menu Control`
* `Layer Control`
* `Point Control`
* `Slider Control`

#### [Add Simple Loop Expression (v1.1)](/scripts/Add_Simple_Loop_Expression.jsx)

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

#### [Add Visibility Controller (v2.1)](/scripts/Add_Visibility_Controller.jsx)

Add a checkbox that controls the visibility, using opacity, for a selected layer.

#### [Append To Expression (v1.0)](/scripts/Append_To_Expression.jsx)

Append new code to all selected properties that contain expressions.

#### [Calculate Difference Between Keyframe Values (v2.2)](/scripts/Calculate_Difference_Between_Keyframe_Values.jsx)

Calculate the difference between two keyframe values.

> [!CAUTION]
> Currently this script only supports 1 dimensional properties.

#### [Calculate Distance Between Layers (v2.3)](/scripts/Calculate_Distance_Between_Layers.jsx)

Calculate the distance between any two layers.

Distance Types:
* `2D Distance` is the distance between two layers in composition space - the optical distance
* `3D Distance` is the distance between two layers in world space - the literal distance

Calculation Combinations:
* `2D` and `2D` will default to `2D Distance`
* `3D` and `3D` will default to `3D Distance`
* `2D` and `3D` will default to `3D Distance`

Hold the `ALT key` to force any combination to calculate `2D Distance`.

#### [Calculate Frames To Selected Keyframe (v2.1)](/scripts/Calculate_Frames_To_Selected_Keyframe.jsx)

Calculate and alert the amount of time, in frames instead of seconds, between the
currently selected keyframe and the Current Time Indicator.

#### [Center Composition (v2.1)](/scripts/Center_Composition.jsx)

Center the composition in the Composition Panel. Hold the `ALT` key or `SHIFT` key
for other values.

#### [Change Nested Composition Background (v2.1)](/scripts/Change_Nested_Composition_Background.jsx)

Change the background color of the current composition and all nested compositions.

#### [Change Nested Composition Duration (v2.1)](/scripts/Change_Nested_Composition_Duration.jsx)

Change the duration of the current composition and all nested compositions.

#### [Change Nested Composition Frame Rate (v2.2)](/scripts/Change_Nested_Composition_Frame_Rate.jsx)

Change the frame rate of the current composition and all nested compositions.

#### [Change Nested Composition Start Frame (v1.1)](/scripts/Change_Nested_Composition_Start_Frame.jsx)

Change the start frame of the current composition and all nested compositions.

#### [Clean Render Queue (v2.1)](/scripts/Clean_Render_Queue.jsx)

Clean out the Render Queue.

#### [Clean Selected Folder (v2.2)](/scripts/Clean_Selected_Folder.jsx)

Remove unused items from any selected folders.

#### [Copy Composition Markers To Layer (v2.1)](/scripts/Copy_Composition_Markers_To_Layer.jsx)

Copy all markers from the current composition to the currently selected layer
including duration, comments, and labels.

Sister script to: `Copy Layer Makers to Composition.jsx`

#### [Copy Layer Makers To Composition (v2.1)](/scripts/Copy_Layer_Makers_To_Composition.jsx)

Copy all markers from the currently selected layer to the current composition
including duration, comments, and labels.

Sister script to: `Copy Composition Markers To Layer.jsx`

#### [Create Text Layers From File (v2.1)](/scripts/Create_Text_Layers_From_File.jsx)

Add a Text Layer to the current composition for each line in the selected text file.

#### [Cycle Composition Background Color (v2.1)](/scripts/Cycle_Composition_Background_Color.jsx)

Cycle the composition background color between `black`, `gray`, and `white`.

#### [Toggle Specific Effects (v2.4)](/scripts/Toggle_Specific_Effects.jsx)

Disable all specified effects in the current project. Hold the `ALT` key to enable.
Add additional effects to be checked to the `MatchNames` object.

#### [Duplicate Selected Layer (v2.1)](/scripts/Duplicate_Selected_Layer.jsx)

Duplicate the selected layer exactly like pressing `CMD/CTRL + D` but move the new
layer directly below the selected layer instead of above it.

#### [Export Path Points (v2.1)](/scripts/Export_Path_Points.jsx)

Export path points for the select path property to a text file on the desktop.

#### [Expose Essential Properties (v2.2)](/scripts/Expose_Essential_Properties.jsx)

Essential Properties from a nested composition can not be directly added to the
Essential Graphic Panel of the parent composition.

Instead, run this script to expose those Essential Properties by using an intermediate expression
controller. Select a layer to add all properterties or select specific properties to add them.

This script does not currently support `Dropdown Menu Control`.

#### [Extend All Layers (v1.1)](/scripts/Extend_All_Layers.jsx)

Extend every layer to match the composition duration in every composition in the
current project.

#### [Find Specific Effect (v2.2)](/scripts/Find_Specific_Effect.jsx)

Find all instances of a specific efffect in the current project. Add additional
effects to be checked to the `MatchNames` object.

#### [Fix Fresh Pickwhip Expression (v2.2)](/scripts/Fix_Fresh_Pickwhip_Expression.jsx)

Append `.value;` to the end of an expression recently set with the pickwhip.

#### [Force Composition Panel Refresh (v2.1)](/scripts/Force_Composition_Panel_Refresh.jsx)

Force the Composition Panel to refresh the current frame.

#### [Hard Solo Layers (v2.1)](/scripts/Hard_Solo_Layers.jsx)

Disable all selected layers.

#### [Increase All Pin Sizes (v1.0)](/scripts/Increase_All_Pin_Sizes.jsx)

Increase the scale of all DuIK Pin layers in the current project.

#### [Increment Composition Versions (v2.2)](/scripts/Increment_Composition_Versions.jsx)

Increment any version numbers found in the name of all compositions in the current
project.

#### [Invert Selected Keyframes (v2.1)](/scripts/Invert_Selected_Keyframes.jsx)

Invert selected keyframe values.

#### [Layer Selection Get (v1.0)](/scripts/Layer_Selection_Get.jsx)

Reselect all layers stored in a previous `selection state` in the current
composition.

Sister script to: `Layer Selection Set.jsx`

#### [Layer Selection Set (v1.0)](/scripts/Layer_Selection_Set.jsx)

Store all currently selected layers as a `selection state` within the current
composition.

Sister script to: `Layer Selection Get.jsx`

#### [Lock All Layers (v2.1)](/scripts/Lock_All_Layers.jsx)

Lock all layers in all conmpositions in the current project.

#### [Make Hold Keyframes (v2.1)](/scripts/Make_Hold_Keyframes.jsx)

Convert selected keyframes into hold keyframes.

#### [Match Selected In Point To Below (v2.1)](/scripts/Match_Selected_In_Point_To_Below.jsx)

Match the in point of all selected layers to the layer directly below it.

#### [Match Selected Start Time To Below (v2.1)](/scripts/Match_Selected_Start_Time_To_Below.jsx)

Match the start time of all selected layers to the layer directly below it.

#### [Merge Imported Selected Items (v2.2)](/scripts/Merge_Imported_Selected_Items.jsx)

Merge all imported and selected items in a previously existing and matching folder.

#### [Move Parametric Anchor Point (v1.0)](/scripts/Move_Parametric_Anchor_Point.jsx)

Select the `Position` property of a parametric Rectangle or Ellipse and apply an
expression to move the Anchor Point. This allows shapes to have their sizes change but remain
locked to one edge.

Use the popup window to choose which side to move the Anchor Point:
`Top`
`Right`
`Bottom`
`Left`

#### [Multiply Selected Keyframes (v2.2)](/scripts/Multiply_Selected_Keyframes.jsx)

Multiply selected keyframe values by a provided value.

#### [Parent Selected Layers To Layers Below (v2.1)](/scripts/Parent_Selected_Layers_To_Layers_Below.jsx)

Parent each selected layer to the layer directly below it.

#### [Parent Closest Layers (v2.2)](/scripts/Parent_Closest_Layers.jsx)

Parent the closest layer in the composition to each selected layer. Calculations
done in 2D space. Typically used in conjunction with Newton by Motion Botique.

#### [Parent Opacity (v1.0)](/scripts/Parent_Opacity.jsx)

Connect the opacity of a layer to the opacity of the parent layer. Both opacity
properties can be animated individually however the lowest opacity value will always be used.

#### [Posterize Keyframes (v2.2)](/scripts/Posterize_Keyframes.jsx)

Posterize all selected keyframes in a composition to be on 2s.

> [!CAUTION]
> Currently this script does not respect easing, spatial interpolation, temporal interpolation,
roving keyframes, labels, or anything else. Results will always be linear keyframes.

#### [Posterize Layer Start Time (v2.2)](/scripts/Posterize_Layer_Start_Time.jsx)

Posterize the start time of all layers in a composition to be on 2s.

#### [Randomize Layer Start Time (v2.2)](/scripts/Randomize_Layer_Start_Time.jsx)

Randomly shift the start time of all selected layers within a provided range.

#### [Remove All Proxies (v2.1)](/scripts/Remove_All_Proxies.jsx)

Remove all proxies within the current project.

#### [Rename Composition To File Name (v2.1)](/scripts/Rename_Composition_To_File_Name.jsx)

Rename the composition to match the name of the project file.

#### [Rename Source To Layer Name (v2.1)](/scripts/Rename_Source_To_Layer_Name.jsx)

Rename the selected item to match the name of the layer it is used for.

#### [Rename Puppet Pins For DuIK (v2.1)](/scripts/Rename_Puppet_Pins_For_DuIK.jsx)

Rename selected arm puppet pins in preparation for DuIK. Hold the `ALT` key to
rename selected leg puppet pins.

#### [Rename Selected Layer Source (v2.1)](/scripts/Rename_Selected_Layer_Source.jsx)

Rename the source of the currently selected layer.

#### [Rename Selected Layers With Letters (v2.1)](/scripts/Rename_Selected_Layers_With_Letters.jsx)

Rename the selected layers append letters as needed.

#### [Rename Selected Layers With Numbers (v2.2)](/scripts/Rename_Selected_Layers_With_Numbers.jsx)

Rename the selected layers appending zero-padded numbers as needed.

#### [Rename Selected Layers With Text (v2.2)](/scripts/Rename_Selected_Layers_With_Text.jsx)

Rename the selected layers appending each character and character count as needed.

#### [Rename Selected Project Items (v2.2)](/scripts/Rename_Selected_Project_Items.jsx)

Rename selected project items appending zero-padded numbers as needed.

#### [Replace Text in Project Item Name (v2.1)](/scripts/Replace_Text_in_Project_Item_Name.jsx)

Replace text in the name of all selected project items. RegEx is accepted.

#### [Reset Composition Work Area (v2.1)](/scripts/Reset_Composition_Work_Area.jsx)

Set the Work Area to cover the entire composition.

#### [Round Selected Keyframe Values (v2.1)](/scripts/Round_Selected_Keyframe_Values.jsx)

Round the values for all selected keyframes to the nearest whole number. Currently
supports basic properties with 1, 2, or 3 dimensions.

#### [Round Selected Property Values (v2.1)](/scripts/Round_Selected_Property_Values.jsx)

Round the values for all selected properties to the nearest whole number. Currently
supports basic properties with 1, 2, or 3 dimensions.

#### [Save Frame As PNG (v2.3)](/scripts/Save_Frame_As_PNG.jsx)

Save the current frame as a PNG to the default save location. Output will match the
following format:

`Composition Name YYYY-MM-DD HH.MM.SS AM.png`

When first running the script, you will be prompted for a save location. That location will be
used for all future saves. If you want to set a new location, hold the `SHIFT` key.

#### [Select All Children (v2.1)](/scripts/Select_All_Children.jsx)

Select any unlocked layer parented to the selected layer in the current composition.

#### [Select Disable Layers (v2.1)](/scripts/Select_Disable_Layers.jsx)

Select any unlocked layer in the current composition that is disabled.

#### [Select Layers Below Label (v2.1)](/scripts/Select_Layers_Below_Label.jsx)

Select all layers in the current composition that are directly below a layer with
the label color `16`. In my preferences label 16 is Black `#000000` and is always used for track
mattes.

#### [Select Non-Null Layers (v2.1)](/scripts/Select_Non-Null_Layers.jsx)

Select any unlocked layer in the current composition not created as a null object.

#### [Select Parent Layer (v2.1)](/scripts/Select_Parent_Layer.jsx)

Select the parent of the currently selected layer.

#### [Select Random Layers (v2.1)](/scripts/Select_Random_Layers.jsx)

Randomly select any unlocked layer in the current composition.

#### [Select Unparented Layers (v2.1)](/scripts/Select_Unparented_Layers.jsx)

Select any unlocked layer in the current composition without a parent.

#### [Separate Size Dimensions (v1.2)](/scripts/Separate_Size_Dimensions.jsx)

Separate the size dimensions for a parametric rectangle or ellipse by adding a
slider for both `X Size` and `Y Size` to the layer.

#### [Set All Item Labels To None (v2.1)](/scripts/Set_All_Item_Labels_To_None.jsx)

Set the label for all items in the current project to `None` or label `0`.

#### [Set All Layer Labels To None (v2.1)](/scripts/Set_All_Layer_Labels_To_None.jsx)

Set the label for all layers in the current composition to `None` or label `0`.

#### [Set All Track Matte Labels (v2.1)](/scripts/Set_All_Track_Matte_Labels.jsx)

Set the label color for all track matte layers in the active composition to `16`. In
my preferences label 16 is Black `#000000` and is always used for track mattes.

#### [Set New Color (v2.2)](/scripts/Set_New_Color.jsx)

Select a color property and set a new color based on the original color, blend mode,
and opacity. Colors are calculated using the After Effects order of operations. Supports the
following blend modes:

* `Multiply`
* `Screen`

#### [Set Proxies From Folder (v2.2)](/scripts/Set_Proxies_From_Folder.jsx)

Set proxies for all compositions within the project.

#### [Set Simple Time Remap Loop (v2.1)](/scripts/Set_Simple_Time_Remap_Loop.jsx)

Automatically enable Time Remapping, set the appropriate keyframes, and apply the
`loopOut()` expression to correctly loop a layer.

#### [Set To Average Position (v2.1)](/scripts/Set_To_Average_Position.jsx)

Set the last selected layer to the average position of all other layers. Hold the
`ALT` key to set the first selected layer.

#### [Set Track Matte To Above (v2.1)](/scripts/Set_Track_Matte_To_Above.jsx)

Set the track matte for all selected layers to the layer above it.

* `TrackMatteType.ALPHA`
* `TrackMatteType.ALPHA_INVERTED`
* `TrackMatteType.LUMA`
* `TrackMatteType.LUMA_INVERTED`
* `TrackMatteType.NO_TRACK_MATTE`

#### [Shift Layer Start Time (v2.1)](/scripts/Shift_Layer_Start_Time.jsx)

Shift the start of a group of selected layers to the current time while maintaining
relative timing within the group.

#### [Stick Effect To Layer (v2.2)](/scripts/Stick_Effect_To_Layer.jsx)

Help effects with position properties such as `CC Bend It` or `Gradient Ramp` stick
properly to a layer.

#### [Swap Property Values (v2.1)](/scripts/Swap_Property_Values.jsx)

Swap the values of two selected properties with the same property type.

#### [Swap Property Dimensions (v2.1)](/scripts/Swap_Property_Dimensions.jsx)

Swap the dimension values for all selected properties. For example, swap the x and y
size values for a rectangle shape layer.

#### [Toggle Difference Blend Mode (v2.2)](/scripts/Toggle_Difference_Blend_Mode.jsx)

Toggle the blend mode of the selected layers to `Difference`. Hold the `ALT` key to
toggle back to `Normal`.

#### [Toggle Maintain Scale Expression (v2.1)](/scripts/Toggle_Maintain_Scale_Expression.jsx)

Toggle an expression that maintains visual scale for layer regardless of Z position.

#### [Toggle Onion Skinning (v2.1)](/scripts/Toggle_Onion_Skinning.jsx)

Toggle onion skinning in the current composition using `CC Wide Time`.

#### [Toggle Preserve Nested Frame Rate (v1.0)](/scripts/Toggle_Preserve_Nested_Frame_Rate.jsx)

Cause every composition within the current project to maintain nested frame rate.
Corresponds to the value of the `Preserve frame rate when nested or in render queue` option in
the `Advanced` tab of the `Composition Settings` dialog box. Hold the `ALT` key to toggle this
preference off.

#### [Toggle Puppet On Transparent (v1.0)](/scripts/Toggle_Puppet_On_Transparent.jsx)

Toggle the `On Transparent` checkbox for every instance of the `Puppet` effect in
the current project. This eliminates situations where the `Expansion` didn't quite grab every
pixel for the underlying layer and leaves an extra little snippet.

#### [Toggle Puppet Pin Types (v2.2)](/scripts/Toggle_Puppet_Pin_Types.jsx)

Toggle the types of selected puppet pins between `Position` and `Advanced`.

#### [Toggle Puppet Pins As Guide Layers (v1.1)](/scripts/Toggle_Puppet_Pins_As_Guide_Layers.jsx)

Set all DuIK Pin layers to visible. Hold the `ALT` key to set to guide layers.

#### [Toggle Timecode And Start Frames (v1.2)](/scripts/Toggle_Timecode_And_Start_Frames.jsx)

Toggle timecode between two different values:

* Timecode starts at `0:00:00:00` and composition frames start on `0`
* Timecode starts at `0:00:00:00` and composition frames start on `1`

#### [Transfer Composition Work Area (v2.2)](/scripts/Transfer_Composition_Work_Area.jsx)

Copy the Work Area from the current composition. Hold the `ALT` key to paste a
copied Work Area to the current composition.

#### [Unlock All Layers (v2.1)](/scripts/Unlock_All_Layers.jsx)

Unlock all layers in all conmpositions in the current project.

#### [Update Expressions (v1.1)](/scripts/Update_Expressions.jsx)

Find an replace all instances of a specific expression with a new expression.

#### [Zero Position (v2.1)](/scripts/Zero_Position.jsx)

Zero out the position of all selected layers.

