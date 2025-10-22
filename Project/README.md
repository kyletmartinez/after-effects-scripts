# Scripts

### [Add Folder To Render Queue (v1.0)](Add_Folder_To_Render_Queue.jsx)

Select a single folder in the Project panel and run this script to search through
all nested subfolders and add all compositions to the Render Queue.

---

### [Add Selected Compositions To Render Queue (v1.0)](Add_Selected_Compositions_To_Render_Queue.jsx)

Add the selected compositions to the Render queue defaulting to using the
`H.264 MP4` Output Template. However, if the composition name contains the characters `_TEXT_`
anywhere in the name, then use the `Apple ProRes 4444 + Alpha` Output Template.

> [!CAUTION]
> These script was built for a very specific use-case and requires both Output Templates to exist
> in your After Effects project.

---

### [Add Selection To New Folder (v1.0)](Add_Selection_To_New_Folder.jsx)

Add all selected items in the Project Panel to a new folder.

---

### [Clean Render Queue (v2.1)](Clean_Render_Queue.jsx)

Clean out the Render Queue.

---

### [Clean Selected Folder (v2.2)](Clean_Selected_Folder.jsx)

Remove unused items from any selected folders.

---

### [Clean Up Overlord Folder (v1.0)](Clean_Up_Overlord_Folder.jsx)

Clean up the Overlord source folder by removing all files that aren't imported into
the current project. Folder detection in the project and on the file systems is all automatic.

Files are not truely deleted instead they are moved to a `Deleted` folder on the desktop.

---

### [Export Text To File (v1.0)](Export_Text_To_File.jsx)

Export all selected text layers to a single `export.txt` text file on the desktop.

---

### [Manually Render PNG Sequence (v1.0)](Manually_Render_PNG_Sequence.jsx)

I wrote this script because the Render Queue was being annoying, spitting out
renders with issues, and I didn't have time to troubleshoot the problem.

Instead, simply set your `Work Area` then run the script to select where the PNG Sequence should
be rendered.

> [!CAUTION]
> I don't recommend using this script regulary. `saveFrameToPng()` is officially undocumented and
> was found via research. The whole function may disappear or even completely stop working. The
> quality does not compare to using the Render Queue.

---

### [Merge Imported Selected Items (v2.2)](Merge_Imported_Selected_Items.jsx)

Merge all imported and selected items in a previously existing and matching folder.

---

### [Remove All Proxies (v2.1)](Remove_All_Proxies.jsx)

Remove all proxies within the current project.

---

### [Rename Selected Layer Source (v2.1)](Rename_Selected_Layer_Source.jsx)

Rename the source of the currently selected layer.

---

### [Rename Selected Project Items (v2.2)](Rename_Selected_Project_Items.jsx)

Rename selected project items appending zero-padded numbers as needed.

---

### [Rename Source To Layer Name (v2.1)](Rename_Source_To_Layer_Name.jsx)

Rename the selected item to match the name of the layer it is used for.

---

### [Replace Text In Project Item Name (v2.3)](Replace_Text_In_Project_Item_Name.jsx)

Replace text in the name of all selected project items. RegEx is accepted.

---

### [Set All Item Labels To None (v2.1)](Set_All_Item_Labels_To_None.jsx)

Set the label for all items in the current project to `None` or label `0`.

---

### [Set Proxies From Folder (v2.3)](Set_Proxies_From_Folder.jsx)

Set proxies for all compositions within the project.

---

### [Toggle Preserve Nested Frame Rate (v1.0)](Toggle_Preserve_Nested_Frame_Rate.jsx)

Cause every composition within the current project to maintain nested frame rate.
Corresponds to the value of the `Preserve frame rate when nested or in render queue` option in
the `Advanced` tab of the `Composition Settings` dialog box. Hold the `ALT` key to toggle this
preference off.

---

### [Toggle Timecode And Start Frames (v1.2)](Toggle_Timecode_And_Start_Frames.jsx)

Toggle timecode between two different values:

* Timecode starts at `0:00:00:00` and composition frames start on `0`
* Timecode starts at `0:00:00:00` and composition frames start on `1`

