# After Effects Scripts

A collection of helpful workflow scripts for After Effects that either run natively right from the After Effects menu or partner well with 3rd party tools from [aescripts + aeplugins](https://aescripts.com/) such as [KBar3](https://aescripts.com/kbar/), [Tool Launcher](https://aescripts.com/tool-launcher/), [Quick Menu 3](https://aescripts.com/quick-menu/).

I also have a free tool for After Effects called [Atheneum](https://github.com/kyletmartinez/atheneum-for-after-effects) which I personally use with this script collection.

To run a script natively in After Effects use `File > Script > Run Script File...` and choose the script.

> [!TIP]
> All scripts can be found within the [source/scripts](/source/scripts) folder.

## Download Entire Collection

From the front page, click the green `Code` button and then click `Download ZIP.` From there, you can unzip the file and choose any script file you want.

<img width="896" height="400" alt="download_all" src="https://github.com/user-attachments/assets/8b5a13ea-6313-4e86-9e47-87a5b1dfdd12" />

## Download Single Script

From a script page, click the `Download raw file` near the upper right of code window.

<img width="896" height="200" alt="download_script" src="https://github.com/user-attachments/assets/38f2006e-59af-4b8b-b379-84917c8e48bd" />

## Scripts

#### [Add 3D Break (v2.2)](/source/scripts/Add_3D_Break.jsx)

Add an adjustment layer above the currently selected layer to break the 3D space of
After Effects. If no layers are selected the adjustment layer will be added at the top.

***

#### [Add Additional Animation Control (v1.1)](/source/scripts/Add_Additional_Animation_Control.jsx)

Add an additional animation controller to the layer for the selected property.

***

#### [Add Background Layer (v1.2)](/source/scripts/Add_Background_Layer.jsx)

Add a background layer to the current composition that will stay centered and match
the `width` and `height` of the current composition no matter if it is resized or copy and pasted
to a new composition.

***

#### [Add Camera With Controller (v2.1)](/source/scripts/Add_Camera_With_Controller.jsx)

Add a camera and 3D null as a controller to the current composition.

***

#### [Add Comment To Selected Layers (v1.1)](/source/scripts/Add_Comment_To_Selected_Layers.jsx)

Add a comment (or remove a comment) to all selected layers.

***

#### [Add Composition Guide (v2.1)](/source/scripts/Add_Composition_Guide.jsx)

Add a 16x9 fuscia rectangle shape layer to act as a guide. Helpful with things like
precomposed character rigs.

***

#### [Add Fill With Color Cycle (v2.3)](/source/scripts/Add_Fill_With_Color_Cycle.jsx)

Add the Fill effect to all selected layers while cycling through `red`, `green`,`blue`, `yellow`, `magenta`, and `cyan`.

***

#### [Add Folder To Render Queue (v1.0)](/source/scripts/Add_Folder_To_Render_Queue.jsx)

Select a single folder in the Project panel and run this script to search through
all nested subfolders and add all compositions to the Render Queue.

***

#### [Add Markers At Out Points (v2.1)](/source/scripts/Add_Markers_At_Out_Points.jsx)

Add a composition marker at the out point of each layer in the composition.

***

#### [Add Markers At Selected Keyframes (v1.1)](/source/scripts/Add_Markers_At_Selected_Keyframes.jsx)

Add a marker to each layer at the same time as the selected keyframe.

***

#### [Add Markers At Work Area (v1.0)](/source/scripts/Add_Markers_At_Work_Area.jsx)

Add new markers to both the beginning and the end of the Work Area with matching
`start` and `end` comments.

Pairs well with `Set_Work_Area_To_Markers.jsx`

***

#### [Add Markers To Selected Layers (v2.1)](/source/scripts/Add_Markers_To_Selected_Layers.jsx)

Add a marker to all selected layers with an optional comment.

***

#### [Add Posterize Time Adjustment Layer (v2.1)](/source/scripts/Add_Posterize_Time_Adjustment_Layer.jsx)

Add `Posterize Time` adjustment layer to the current composition. Default `Frame
Rate` will be half the current frame rate.

***

#### [Add Posterize Time Expression (v2.2)](/source/scripts/Add_Posterize_Time_Expression.jsx)

Add `posterizeTime(fps)` expression to all selected properties. Default `fps` will
be half the current frame rate and existing expressions will be preserved.

***

#### [Add Properties To Essential Graphics (v2.1)](/source/scripts/Add_Properties_To_Essential_Graphics.jsx)

Add all selected properties to Essential Graphics Panel. If any properties belong to
a native After Effects expression controller then use the effect name instead.

* `Angle Control`
* `Checkbox Control`
* `Color Control`
* `Dropdown Menu Control`
* `Layer Control`
* `Point Control`
* `Slider Control`

***

#### [Add Selected Compositions To Render Queue (v1.0)](/source/scripts/Add_Selected_Compositions_To_Render_Queue.jsx)

Add the selected compositions to the Render queue defaulting to using the
`H.264 MP4` Output Template. However, if the composition name contains the characters `_TEXT_`
anywhere in the name, then use the `Apple ProRes 4444 + Alpha` Output Template.

> [!CAUTION]
> These script was built for a very specific use-case and requires both Output Templates to exist
> in your After Effects project.

***

#### [Add Selection To New Folder (v1.0)](/source/scripts/Add_Selection_To_New_Folder.jsx)

Add all selected items in the Project Panel to a new folder.

***

#### [Add Simple Loop Expression (v1.2)](/source/scripts/Add_Simple_Loop_Expression.jsx)

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

***

#### [Add Text Animation (v1.0)](/source/scripts/Add_Text_Animation.jsx)

Add text animation to the selected text layers using a text animator.

Use the popup window to set the `Based On` value using familiar options from After Effects:
* `Characters`
* `Characters Excluding Spaces`
* `Words`
* `Lines`

***

#### [Add Visibility Controller (v2.1)](/source/scripts/Add_Visibility_Controller.jsx)

Add a checkbox that controls the visibility, using opacity, for a selected layer.

***

#### [Append To Expression (v1.0)](/source/scripts/Append_To_Expression.jsx)

Append new code to all selected properties that contain expressions.

***

#### [Apply Maintain Stroke Width Expression (v1.0)](/source/scripts/Apply_Maintain_Stroke_Width_Expression.jsx)

Search through all layers in the current composition, find all Stroke Width
properties, and apply an expression to maintain the stroke width visually despite any scale.

***

#### [Build Dropdown Selector (v1.0)](/source/scripts/Build_Dropdown_Selector.jsx)

Create a new controller layer and add a `Dropdown Control`. You can now toggle the
visibility of all layers in the current composition. This dropdown will also be added to the
Essential Graphics Panel for the current composition.

***

#### [Calculate Difference Between Keyframe Values (v2.2)](/source/scripts/Calculate_Difference_Between_Keyframe_Values.jsx)

Calculate the difference between two keyframe values.

> [!CAUTION]
> Currently this script only supports 1 dimensional properties.

***

#### [Calculate Distance Between Layers (v2.3)](/source/scripts/Calculate_Distance_Between_Layers.jsx)

Calculate the distance between any two layers.

Distance Types:
* `2D Distance` is the distance between two layers in composition space - the optical distance
* `3D Distance` is the distance between two layers in world space - the literal distance

Calculation Combinations:
* `2D` and `2D` will default to `2D Distance`
* `3D` and `3D` will default to `3D Distance`
* `2D` and `3D` will default to `3D Distance`

Hold the `ALT key` to force any combination to calculate `2D Distance`.

***

#### [Calculate Frames To Selected Keyframe (v2.1)](/source/scripts/Calculate_Frames_To_Selected_Keyframe.jsx)

Calculate and alert the amount of time, in frames instead of seconds, between the
currently selected keyframe and the Current Time Indicator.

***

#### [Center Composition (v2.1)](/source/scripts/Center_Composition.jsx)

Center the composition in the Composition Panel. Hold the `ALT` key or `SHIFT` key
for other values.

***

#### [Change Nested Composition Background (v2.1)](/source/scripts/Change_Nested_Composition_Background.jsx)

Change the background color of the current composition and all nested compositions.

***

#### [Change Nested Composition Duration With Timecode (v2.1)](/source/scripts/Change_Nested_Composition_Duration_With_Timecode.jsx)

Change the duration of the current composition and all nested compositions using
timecode.

***

#### [Change Nested Composition Duration (v2.1)](/source/scripts/Change_Nested_Composition_Duration.jsx)

Change the duration of the current composition and all nested compositions.

***

#### [Change Nested Composition Frame Rate (v2.2)](/source/scripts/Change_Nested_Composition_Frame_Rate.jsx)

Change the frame rate of the current composition and all nested compositions.

***

#### [Change Nested Composition Start Frame (v1.2)](/source/scripts/Change_Nested_Composition_Start_Frame.jsx)

Change the start frame of the current composition and all nested compositions.

***

#### [Change Nested Composition Work Area (v2.1)](/source/scripts/Change_Nested_Composition_Work_Area.jsx)

Reset the Work Area of the current composition and all nested compositions to cover
the full duration of the composition.

***

#### [Clean Render Queue (v2.1)](/source/scripts/Clean_Render_Queue.jsx)

Clean out the Render Queue.

***

#### [Clean Selected Folder (v2.2)](/source/scripts/Clean_Selected_Folder.jsx)

Remove unused items from any selected folders.

***

#### [Clean Up Overlord Folder (v1.0)](/source/scripts/Clean_Up_Overlord_Folder.jsx)

Clean up the Overlord source folder by removing all files that aren't imported into
the current project. Folder detection in the project and on the file systems is all automatic.

Files are not truely deleted instead they are moved to a `Deleted` folder on the desktop.

***

#### [Convert SRT To Text Layers (v1.1)](/source/scripts/Convert_SRT_To_Text_Layers.jsx)

Run the script, select an SRT file, and automatically convert all subtitles into
After Effects `Text Layers` with no styling applied just in and out point timing.

***

#### [Copy Composition Markers To Layer (v2.2)](/source/scripts/Copy_Composition_Markers_To_Layer.jsx)

Copy all markers from the current composition to the currently selected layer
including duration, comments, and labels.

Sister script to: `Copy_Layer_Makers_To_Composition.jsx`

***

#### [Copy Layer Makers To Composition (v2.2)](/source/scripts/Copy_Layer_Makers_To_Composition.jsx)

Copy all markers from the currently selected layer to the current composition
including duration, comments, and labels.

Sister script to: `Copy_Composition_Markers_To_Layer.jsx`

***

#### [Create Shapes From Text (v1.0)](/source/scripts/Create_Shapes_From_Text.jsx)

Convert all Text Layers in the current composition to Shape Layers using the
`Menu > Layer > Create > Create Shapes from Text` command but with the following customizations:

* Layers with names that start with `DNU` (`Do Not Use`) will be ignored
* Previously converted layers will be ignored
* Any resulting Stroke properties that are not enabled will be removed

> [!WARNING]
> Due to the use of the `app.findMenuCommandId();` method this script may only work in English
> After Effects installations.

Add an adjustment layer above the currently selected layer to break the 3D space of
After Effects. If no layers are selected the adjustment layer will be added at the top.

***

#### [Create Text Layers From File (v2.1)](/source/scripts/Create_Text_Layers_From_File.jsx)

Add a Text Layer to the current composition for each line in the selected text file.

***

#### [Cycle Composition Background Color (v2.1)](/source/scripts/Cycle_Composition_Background_Color.jsx)

Cycle the composition background color between `black`, `gray`, and `white`.

***

#### [Disable Selected Expressions (v1.0)](/source/scripts/Disable_Selected_Expressions.jsx)

Disable the expression for all selected properties.

***

#### [Duplicate Selected Layer (v2.1)](/source/scripts/Duplicate_Selected_Layer.jsx)

Duplicate the selected layer exactly like pressing `CMD/CTRL + D` but move the new
layer directly below the selected layer instead of above it.

***

#### [Enable Collapse Transformations (v1.0)](/source/scripts/Enable_Collapse_Transformations.jsx)

Enabled the `Collapase Transformations` switch on all layers within the project.
Layers with a marker that has the exact text of `Do Not Collapse Transformations` will be
ignored.

***

#### [Enable Motion Blur (v1.0)](/source/scripts/Enable_Motion_Blur.jsx)

Enabled the `Motion Blur` switch on all compositions and on all eligible layers
within the project.

***

#### [Enable Selected Expressions (v1.0)](/source/scripts/Enable_Selected_Expressions.jsx)

Enable the expression for all selected properties.

***

#### [Estimate Path Length (v1.0)](/source/scripts/Estimate_Path_Length.jsx)

Add two sliders to the selected layer to estimate the length of a selected path.
Increase the `Path Samples` slider for a more accurate length and use the `Path Length` slider
to reveal the path length.

***

#### [Export Path Points (v2.1)](/source/scripts/Export_Path_Points.jsx)

Export path points for the select path property to a text file on the desktop.

***

#### [Export Text To File (v1.0)](/source/scripts/Export_Text_To_File.jsx)

Export all selected text layers to a single `export.txt` text file on the desktop.

***

#### [Expose Essential Properties (v2.2)](/source/scripts/Expose_Essential_Properties.jsx)

Essential Properties from a nested composition can not be directly added to the
Essential Graphic Panel of the parent composition.

Instead, run this script to expose those Essential Properties by using an intermediate expression
controller. Select a layer to add all properterties or select specific properties to add them.

This script does not currently support `Dropdown Menu Control`.

***

#### [Extend All Layers (v1.2)](/source/scripts/Extend_All_Layers.jsx)

Extend every layer to match the composition duration in every composition in the
current project.

***

#### [Fill In Keyframes (v1.0)](/source/scripts/Fill_In_Keyframes.jsx)

Convert a property to keyframes and remove any redundant keyframes.

> [!WARNING]
> While you can select multiple properties, running the `Convert Expression To Keyframes` as it
> is setup now only works on the first viable property. Assume one property at a time for now.

***

#### [Find All Expressions (v1.0)](/source/scripts/Find_All_Expressions.jsx)

Find and report all active expressions in the current project. Useful in preparing
compositions for Lottie.

***

#### [Find Specific Effect (v2.2)](/source/scripts/Find_Specific_Effect.jsx)

Find all instances of a specific efffect in the current project. Add additional
effects to be checked to the `MatchNames` object.

***

#### [Fix Fresh Pickwhip Expression (v2.2)](/source/scripts/Fix_Fresh_Pickwhip_Expression.jsx)

Append `.value;` to the end of an expression recently set with the pickwhip.

***

#### [Force Composition Panel Refresh (v2.1)](/source/scripts/Force_Composition_Panel_Refresh.jsx)

Force the Composition Panel to refresh the current frame.

***

#### [Get Selected Layer Duration (v1.0)](/source/scripts/Get_Selected_Layer_Duration.jsx)

Display the duration (seconds) for the currently selected layer.

***

#### [Hard Solo Layers (v2.1)](/source/scripts/Hard_Solo_Layers.jsx)

Disable all selected layers.

***

#### [Increase All Pin Sizes (v1.1)](/source/scripts/Increase_All_Pin_Sizes.jsx)

Increase the scale of all DuIK Pin layers in the current project.

***

#### [Increment Composition Versions (v2.3)](/source/scripts/Increment_Composition_Versions.jsx)

Increment any version numbers found in the name of all compositions in the current
project.

***

#### [Invert Selected Keyframes (v2.1)](/source/scripts/Invert_Selected_Keyframes.jsx)

Invert selected keyframe values.

***

#### [Layer Selection Get (v1.0)](/source/scripts/Layer_Selection_Get.jsx)

Reselect all layers stored in a previous `selection state` in the current
composition.

Sister script to: `Layer Selection Set.jsx`

***

#### [Layer Selection Set (v1.0)](/source/scripts/Layer_Selection_Set.jsx)

Store all currently selected layers as a `selection state` within the current
composition.

Sister script to: `Layer Selection Get.jsx`

***

#### [Lock All Layers (v2.1)](/source/scripts/Lock_All_Layers.jsx)

Lock all layers in all conmpositions in the current project.

***

#### [Make Hold Keyframes (v2.1)](/source/scripts/Make_Hold_Keyframes.jsx)

Convert selected keyframes into hold keyframes.

***

#### [Manually Render PNG Sequence (v1.0)](/source/scripts/Manually_Render_PNG_Sequence.jsx)

I wrote this script because the Render Queue was being annoying, spitting out
renders with issues, and I didn't have time to troubleshoot the problem.

Instead, simply set your `Work Area` then run the script to select where the PNG Sequence should
be rendered.

> [!CAUTION]
> I don't recommend using this script regulary. `saveFrameToPng()` is officially undocumented and
> was found via research. The whole function may disappear or even completely stop working. The
> quality does not compare to using the Render Queue.

***

#### [Match Selected In Point To Below (v2.1)](/source/scripts/Match_Selected_In_Point_To_Below.jsx)

Match the in point of all selected layers to the layer directly below it.

***

#### [Match Selected Start Time To Below (v2.1)](/source/scripts/Match_Selected_Start_Time_To_Below.jsx)

Match the start time of all selected layers to the layer directly below it.

***

#### [Merge Imported Selected Items (v2.2)](/source/scripts/Merge_Imported_Selected_Items.jsx)

Merge all imported and selected items in a previously existing and matching folder.

***

#### [Move Parametric Anchor Point (v1.3)](/source/scripts/Move_Parametric_Anchor_Point.jsx)

Select the `Position` property of a parametric Rectangle or Ellipse and apply an
expression to move the Anchor Point. This allows shapes to have their sizes change but remain
locked to one edge or corner.

Use the popup window grid to choose which side or corner to move the Anchor Point.

***

#### [Multiply Selected Keyframes (v2.2)](/source/scripts/Multiply_Selected_Keyframes.jsx)

Multiply selected keyframe values by a provided value.

***

#### [Parent Closest Layers (v2.2)](/source/scripts/Parent_Closest_Layers.jsx)

Parent the closest layer in the composition to each selected layer. Calculations
done in 2D space. Typically used in conjunction with Newton by Motion Botique.

***

#### [Parent Opacity (v1.0)](/source/scripts/Parent_Opacity.jsx)

Connect the opacity of a layer to the opacity of the parent layer. Both opacity
properties can be animated individually however the lowest opacity value will always be used.

***

#### [Parent Selected Layers To Layers Below (v2.1)](/source/scripts/Parent_Selected_Layers_To_Layers_Below.jsx)

Parent each selected layer to the layer directly below it.

***

#### [Posterize Keyframes (v2.2)](/source/scripts/Posterize_Keyframes.jsx)

Posterize all selected keyframes in a composition to be on 2s.

> [!CAUTION]
> Currently this script does not respect easing, spatial interpolation, temporal interpolation,
roving keyframes, labels, or anything else. Results will always be linear keyframes.

***

#### [Posterize Layer Start Time (v2.2)](/source/scripts/Posterize_Layer_Start_Time.jsx)

Posterize the start time of all layers in a composition to be on 2s.

***

#### [Prepare Layer Out Points For Lottie (v1.0)](/source/scripts/Prepare_Layer_Out_Points_For_Lottie.jsx)

Ensure that any layer active on the last from of the composition it's `Out Point`
extended one frame past the end. This removes a bug from Lottie exports.

***

#### [Randomize Layer Start Time (v2.3)](/source/scripts/Randomize_Layer_Start_Time.jsx)

Randomly shift the start time of all selected layers within a provided range.

***

#### [Remove All Proxies (v2.1)](/source/scripts/Remove_All_Proxies.jsx)

Remove all proxies within the current project.

***

#### [Remove Redundant Keyframes (v1.0)](/source/scripts/Remove_Redundant_Keyframes.jsx)

Remove redundant keyframes from the selected properties. Especially helpful for
reducing the amount of keyframes after using the `Convert Expression to Keyframes` command.

***

#### [Rename Composition To File Name (v2.1)](/source/scripts/Rename_Composition_To_File_Name.jsx)

Rename the composition to match the name of the project file.

***

#### [Rename Puppet Pins For DuIK (v2.2)](/source/scripts/Rename_Puppet_Pins_For_DuIK.jsx)

Rename selected arm puppet pins in preparation for DuIK. Hold the `ALT` key to
rename selected leg puppet pins.

***

#### [Rename Selected Layer Source (v2.1)](/source/scripts/Rename_Selected_Layer_Source.jsx)

Rename the source of the currently selected layer.

***

#### [Rename Selected Layers With Letters (v2.1)](/source/scripts/Rename_Selected_Layers_With_Letters.jsx)

Rename the selected layers append letters as needed.

***

#### [Rename Selected Layers With Numbers (v2.2)](/source/scripts/Rename_Selected_Layers_With_Numbers.jsx)

Rename the selected layers appending zero-padded numbers as needed.

***

#### [Rename Selected Layers With Text (v2.2)](/source/scripts/Rename_Selected_Layers_With_Text.jsx)

Rename the selected layers appending each character and character count as needed.

***

#### [Rename Selected Matte Layers (v1.0)](/source/scripts/Rename_Selected_Matte_Layers.jsx)

Renames a selected layer to match the layer below and appending `Matte` to the end.

> [!WARNING]
> This script doesn't detect actual Track Matte pairs. This script also assumes the timeline is
set up using the old style of mattes where mattes were required to be directly above a layer.

***

#### [Rename Selected Project Items (v2.2)](/source/scripts/Rename_Selected_Project_Items.jsx)

Rename selected project items appending zero-padded numbers as needed.

***

#### [Rename Selected Properties (v1.0)](/source/scripts/Rename_Selected_Properties.jsx)

Rename the selected properties appending numbers as needed.

***

#### [Rename Source To Layer Name (v2.1)](/source/scripts/Rename_Source_To_Layer_Name.jsx)

Rename the selected item to match the name of the layer it is used for.

***

#### [Replace Grid Rig Control (v1.0)](/source/scripts/Replace_Grid_Rig_Control.jsx)

Replace the selected `Grid Rig Control` null layer created by `Flex by Zack Lovatt`
with a shape layer. This script assumes default and un-keyframed values.

***

#### [Replace Text In Project Item Name (v2.3)](/source/scripts/Replace_Text_In_Project_Item_Name.jsx)

Replace text in the name of all selected project items. RegEx is accepted.

***

#### [Reset Composition Work Area (v2.1)](/source/scripts/Reset_Composition_Work_Area.jsx)

Set the Work Area to cover the entire composition.

***

#### [Reset Layer Names (v1.0)](/source/scripts/Reset_Layer_Names.jsx)

Reset the name for all layers in the current composition.

***

#### [Round Selected Keyframe Values (v2.1)](/source/scripts/Round_Selected_Keyframe_Values.jsx)

Round the values for all selected keyframes to the nearest whole number. Currently
supports basic properties with 1, 2, or 3 dimensions.

***

#### [Round Selected Property Values (v2.1)](/source/scripts/Round_Selected_Property_Values.jsx)

Round the values for all selected properties to the nearest whole number. Currently
supports basic properties with 1, 2, or 3 dimensions.

***

#### [Save Frame As PNG (v2.3)](/source/scripts/Save_Frame_As_PNG.jsx)

Save the current frame as a PNG to the default save location. Output will match the
following format:

`Composition Name YYYY-MM-DD HH.MM.SS AM.png`

When first running the script, you will be prompted for a save location. That location will be
used for all future saves. If you want to set a new location, hold the `SHIFT` key.

***

#### [Select All Children (v2.1)](/source/scripts/Select_All_Children.jsx)

Select any unlocked layer parented to the selected layer in the current composition.

***

#### [Select Disabled Layers (v2.2)](/source/scripts/Select_Disabled_Layers.jsx)

Select any unlocked layer in the current composition that is disabled.

***

#### [Select Guide Layers (v1.0)](/source/scripts/Select_Guide_Layers.jsx)

Select all layers in the current composition that are Guide Layers.

***

#### [Select Layers Below Label (v2.1)](/source/scripts/Select_Layers_Below_Label.jsx)

Select all layers in the current composition that are directly below a layer with
the label color `16`. In my preferences label 16 is Black `#000000` and is always used for track
mattes.

***

#### [Select Non-Null Layers (v2.1)](/source/scripts/Select_Non-Null_Layers.jsx)

Select any unlocked layer in the current composition not created as a null object.

***

#### [Select Parent Layer (v2.1)](/source/scripts/Select_Parent_Layer.jsx)

Select the parent of the currently selected layer.

***

#### [Select Random Layers (v2.1)](/source/scripts/Select_Random_Layers.jsx)

Randomly select any unlocked layer in the current composition.

***

#### [Select Text Layers (v1.0)](/source/scripts/Select_Text_Layers.jsx)

Select all `Text Layers` in the current composition.

***

#### [Select Unparented Layers (v2.1)](/source/scripts/Select_Unparented_Layers.jsx)

Select any unlocked layer in the current composition without a parent.

***

#### [Separate Size Dimensions (v1.2)](/source/scripts/Separate_Size_Dimensions.jsx)

Separate the size dimensions for a parametric rectangle or ellipse by adding a
slider for both `X Size` and `Y Size` to the layer.

***

#### [Set All Item Labels To None (v2.1)](/source/scripts/Set_All_Item_Labels_To_None.jsx)

Set the label for all items in the current project to `None` or label `0`.

***

#### [Set All Layer Labels To None (v2.1)](/source/scripts/Set_All_Layer_Labels_To_None.jsx)

Set the label for all layers in the current composition to `None` or label `0`.

***

#### [Set All Track Matte Labels (v2.2)](/source/scripts/Set_All_Track_Matte_Labels.jsx)

Set the label color for all track matte layers in the active composition to `16`. In
my preferences label 16 is Black `#000000` and is always used for track mattes.

***

#### [Set New Color (v2.2)](/source/scripts/Set_New_Color.jsx)

Select a color property and set a new color based on the original color, blend mode,
and opacity. Colors are calculated using the After Effects order of operations. Supports the
following blend modes:

* `Multiply`
* `Screen`

***

#### [Set Proxies From Folder (v2.3)](/source/scripts/Set_Proxies_From_Folder.jsx)

Set proxies for all compositions within the project.

***

#### [Set Simple Time Remap Loop (v2.1)](/source/scripts/Set_Simple_Time_Remap_Loop.jsx)

Automatically enable Time Remapping, set the appropriate keyframes, and apply the
`loopOut()` expression to correctly loop a layer.

***

#### [Set To Average Position (v2.1)](/source/scripts/Set_To_Average_Position.jsx)

Set the last selected layer to the average position of all other layers. Hold the
`ALT` key to set the first selected layer.

***

#### [Set Track Matte To Above (v2.1)](/source/scripts/Set_Track_Matte_To_Above.jsx)

Set the track matte for all selected layers to the layer above it.

* `TrackMatteType.ALPHA`
* `TrackMatteType.ALPHA_INVERTED`
* `TrackMatteType.LUMA`
* `TrackMatteType.LUMA_INVERTED`
* `TrackMatteType.NO_TRACK_MATTE`

***

#### [Set Work Area To Markers (v1.0)](/source/scripts/Set_Work_Area_To_Markers.jsx)

Set the Work Area Start and Duration to match composition markers.

Pairs well with `Add_Markers_At_Work_Area.jsx`

***

#### [Shift Layer Start Time (v2.1)](/source/scripts/Shift_Layer_Start_Time.jsx)

Shift the start of a group of selected layers to the current time while maintaining
relative timing within the group.

***

#### [Stick Effect To Layer (v2.2)](/source/scripts/Stick_Effect_To_Layer.jsx)

Help effects with position properties such as `CC Bend It` or `Gradient Ramp` stick
properly to a layer.

***

#### [Swap Property Values (v2.1)](/source/scripts/Swap_Property_Values.jsx)

Swap the values of two selected properties with the same property type.

***

#### [Swap Selected Property Dimensions (v2.2)](/source/scripts/Swap_Selected_Property_Dimensions.jsx)

Swap the dimension values for all selected properties. For example, swap the x and y
size values for a rectangle shape layer.

***

#### [Toggle Difference Blend Mode (v2.2)](/source/scripts/Toggle_Difference_Blend_Mode.jsx)

Toggle the blend mode of the selected layers to `Difference`. Hold the `ALT` key to
toggle back to `Normal`.

***

#### [Toggle Maintain Scale Expression (v2.1)](/source/scripts/Toggle_Maintain_Scale_Expression.jsx)

Toggle an expression that maintains visual scale for layer regardless of Z position.

***

#### [Toggle Onion Skinning (v2.2)](/source/scripts/Toggle_Onion_Skinning.jsx)

Toggle onion skinning in the current composition using `CC Wide Time`.

***

#### [Toggle Preserve Nested Frame Rate (v1.0)](/source/scripts/Toggle_Preserve_Nested_Frame_Rate.jsx)

Cause every composition within the current project to maintain nested frame rate.
Corresponds to the value of the `Preserve frame rate when nested or in render queue` option in
the `Advanced` tab of the `Composition Settings` dialog box. Hold the `ALT` key to toggle this
preference off.

***

#### [Toggle Puppet On Transparent (v1.0)](/source/scripts/Toggle_Puppet_On_Transparent.jsx)

Toggle the `On Transparent` checkbox for every instance of the `Puppet` effect in
the current project. This eliminates situations where the `Expansion` didn't quite grab every
pixel for the underlying layer and leaves an extra little snippet.

***

#### [Toggle Puppet Pin Types (v2.2)](/source/scripts/Toggle_Puppet_Pin_Types.jsx)

Toggle the types of selected puppet pins between `Position` and `Advanced`.

***

#### [Toggle Puppet Pins As Guide Layers (v1.1)](/source/scripts/Toggle_Puppet_Pins_As_Guide_Layers.jsx)

Set all DuIK Pin layers to visible. Hold the `ALT` key to set to guide layers.

***

#### [Toggle Specific Effects (v2.5)](/source/scripts/Toggle_Specific_Effects.jsx)

Disable all specified effects in the current project. Hold the `ALT` key to enable.
Add additional effects to be checked to the `MatchNames` object.

***

#### [Toggle Timecode And Start Frames (v1.2)](/source/scripts/Toggle_Timecode_And_Start_Frames.jsx)

Toggle timecode between two different values:

* Timecode starts at `0:00:00:00` and composition frames start on `0`
* Timecode starts at `0:00:00:00` and composition frames start on `1`

***

#### [Transfer Composition Work Area (v2.2)](/source/scripts/Transfer_Composition_Work_Area.jsx)

Copy the Work Area from the current composition. Hold the `ALT` key to paste a
copied Work Area to the current composition.

***

#### [Unlock All Layers (v2.1)](/source/scripts/Unlock_All_Layers.jsx)

Unlock all layers in all conmpositions in the current project.

***

#### [Update Expressions (v1.1)](/source/scripts/Update_Expressions.jsx)

Find an replace all instances of a specific expression with a new expression.

***

#### [Zero Position (v2.1)](/source/scripts/Zero_Position.jsx)

Zero out the position of all selected layers.

***

## Usage & Support

Please keep in mind these scripts are provided as-is. They're written specifially to support my setup and After Effects workflow so they don't include extensive error handling or validation.

Please review each script before using it to ensure it fits your workflow and file struture.

While I'm more than happy to share these tools with the animation community, I'm unable to provide support or guarantee compatibility with all After Effects configurations. Feel free to fork and modify them to suit your needs!
