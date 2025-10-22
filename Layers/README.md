# Scripts

### [Add 3D Break (v2.2)](Add_3D_Break.jsx)

Add an adjustment layer above the currently selected layer to break the 3D space of
After Effects. If no layers are selected the adjustment layer will be added at the top.

---

### [Add Comment To Selected Layers (v1.1)](Add_Comment_To_Selected_Layers.jsx)

Add a comment (or remove a comment) to all selected layers.

---

### [Add Fill With Color Cycle (v2.3)](Add_Fill_With_Color_Cycle.jsx)

Add the Fill effect to all selected layers while cycling through `red`, `green`,`blue`, `yellow`, `magenta`, and `cyan`.

---

### [Calculate Distance Between Layers (v2.3)](Calculate_Distance_Between_Layers.jsx)

Calculate the distance between any two layers.

Distance Types:
* `2D Distance` is the distance between two layers in composition space - the optical distance
* `3D Distance` is the distance between two layers in world space - the literal distance

Calculation Combinations:
* `2D` and `2D` will default to `2D Distance`
* `3D` and `3D` will default to `3D Distance`
* `2D` and `3D` will default to `3D Distance`

Hold the `ALT key` to force any combination to calculate `2D Distance`.

---

### [Convert SRT To Text Layers (v1.1)](Convert_SRT_To_Text_Layers.jsx)

Run the script, select an SRT file, and automatically convert all subtitles into
After Effects `Text Layers` with no styling applied just in and out point timing.

---

### [Create Shapes From Text (v1.0)](Create_Shapes_From_Text.jsx)

Convert all Text Layers in the current composition to Shape Layers using the
`Menu > Layer > Create > Create Shapes from Text` command but with the following customizations:

* Layers with names that start with `DNU` (`Do Not Use`) will be ignored
* Previously converted layers will be ignored
* Any resulting Stroke properties that are not enabled will be removed

> [!WARNING]
> Due to the use of the `app.findMenuCommandId();` method this script may only work in English
> After Effects installations.

---

### [Create Text Layers From File (v2.1)](Create_Text_Layers_From_File.jsx)

Add a Text Layer to the current composition for each line in the selected text file.

---

### [Duplicate Selected Layer (v2.1)](Duplicate_Selected_Layer.jsx)

Duplicate the selected layer exactly like pressing `CMD/CTRL + D` but move the new
layer directly below the selected layer instead of above it.

---

### [Extend All Layers (v1.2)](Extend_All_Layers.jsx)

Extend every layer to match the composition duration in every composition in the
current project.

---

### [Find Specific Effect (v2.2)](Find_Specific_Effect.jsx)

Find all instances of a specific efffect in the current project. Add additional
effects to be checked to the `MatchNames` object.

---

### [Get Selected Layer Duration (v1.0)](Get_Selected_Layer_Duration.jsx)

Display the duration (seconds) for the currently selected layer.

---

### [Hard Solo Layers (v2.1)](Hard_Solo_Layers.jsx)

Disable all selected layers.

---

### [Lock All Layers (v2.1)](Lock_All_Layers.jsx)

Lock all layers in all conmpositions in the current project.

---

### [Match Selected In Point To Below (v2.1)](Match_Selected_In_Point_To_Below.jsx)

Match the in point of all selected layers to the layer directly below it.

---

### [Match Selected Start Time To Below (v2.1)](Match_Selected_Start_Time_To_Below.jsx)

Match the start time of all selected layers to the layer directly below it.

---

### [Parent Closest Layers (v2.2)](Parent_Closest_Layers.jsx)

Parent the closest layer in the composition to each selected layer. Calculations
done in 2D space. Typically used in conjunction with Newton by Motion Botique.

---

### [Parent Opacity (v1.0)](Parent_Opacity.jsx)

Connect the opacity of a layer to the opacity of the parent layer. Both opacity
properties can be animated individually however the lowest opacity value will always be used.

---

### [Parent Selected Layers To Layers Below (v2.1)](Parent_Selected_Layers_To_Layers_Below.jsx)

Parent each selected layer to the layer directly below it.

---

### [Posterize Layer Start Time (v2.2)](Posterize_Layer_Start_Time.jsx)

Posterize the start time of all layers in a composition to be on 2s.

---

### [Prepare Layer Out Points For Lottie (v1.0)](Prepare_Layer_Out_Points_For_Lottie.jsx)

Ensure that any layer active on the last from of the composition it's `Out Point`
extended one frame past the end. This removes a bug from Lottie exports.

---

### [Randomize Layer Start Time (v2.3)](Randomize_Layer_Start_Time.jsx)

Randomly shift the start time of all selected layers within a provided range.

---

### [Rename Puppet Pins For DuIK (v2.2)](Rename_Puppet_Pins_For_DuIK.jsx)

Rename selected arm puppet pins in preparation for DuIK. Hold the `ALT` key to
rename selected leg puppet pins.

---

### [Rename Selected Layers With Letters (v2.1)](Rename_Selected_Layers_With_Letters.jsx)

Rename the selected layers append letters as needed.

---

### [Rename Selected Layers With Numbers (v2.2)](Rename_Selected_Layers_With_Numbers.jsx)

Rename the selected layers appending zero-padded numbers as needed.

---

### [Rename Selected Layers With Text (v2.2)](Rename_Selected_Layers_With_Text.jsx)

Rename the selected layers appending each character and character count as needed.

---

### [Rename Selected Matte Layers (v1.0)](Rename_Selected_Matte_Layers.jsx)

Renames a selected layer to match the layer below and appending `Matte` to the end.

> [!WARNING]
> This script doesn't detect actual Track Matte pairs. This script also assumes the timeline is
set up using the old style of mattes where mattes were required to be directly above a layer.

---

### [Replace Grid Rig Control (v1.0)](Replace_Grid_Rig_Control.jsx)

Replace the selected `Grid Rig Control` null layer created by `Flex by Zack Lovatt`
with a shape layer. This script assumes default and un-keyframed values.

---

### [Reset Layer Names (v1.0)](Reset_Layer_Names.jsx)

Reset the name for all layers in the current composition.

---

### [Set All Layer Labels To None (v2.1)](Set_All_Layer_Labels_To_None.jsx)

Set the label for all layers in the current composition to `None` or label `0`.

---

### [Set All Track Matte Labels (v2.2)](Set_All_Track_Matte_Labels.jsx)

Set the label color for all track matte layers in the active composition to `16`. In
my preferences label 16 is Black `#000000` and is always used for track mattes.

---

### [Set To Average Position (v2.1)](Set_To_Average_Position.jsx)

Set the last selected layer to the average position of all other layers. Hold the
`ALT` key to set the first selected layer.

---

### [Set Track Matte To Above (v2.1)](Set_Track_Matte_To_Above.jsx)

Set the track matte for all selected layers to the layer above it.

* `TrackMatteType.ALPHA`
* `TrackMatteType.ALPHA_INVERTED`
* `TrackMatteType.LUMA`
* `TrackMatteType.LUMA_INVERTED`
* `TrackMatteType.NO_TRACK_MATTE`

---

### [Shift Layer Start Time (v2.1)](Shift_Layer_Start_Time.jsx)

Shift the start of a group of selected layers to the current time while maintaining
relative timing within the group.

---

### [Stick Effect To Layer (v2.2)](Stick_Effect_To_Layer.jsx)

Help effects with position properties such as `CC Bend It` or `Gradient Ramp` stick
properly to a layer.

---

### [Toggle Difference Blend Mode (v2.2)](Toggle_Difference_Blend_Mode.jsx)

Toggle the blend mode of the selected layers to `Difference`. Hold the `ALT` key to
toggle back to `Normal`.

---

### [Toggle Puppet Pins As Guide Layers (v1.1)](Toggle_Puppet_Pins_As_Guide_Layers.jsx)

Set all DuIK Pin layers to visible. Hold the `ALT` key to set to guide layers.

---

### [Toggle Specific Effects (v2.5)](Toggle_Specific_Effects.jsx)

Disable all specified effects in the current project. Hold the `ALT` key to enable.
Add additional effects to be checked to the `MatchNames` object.

---

### [Unlock All Layers (v2.1)](Unlock_All_Layers.jsx)

Unlock all layers in all conmpositions in the current project.

---

### [Zero Position (v2.1)](Zero_Position.jsx)

Zero out the position of all selected layers.

