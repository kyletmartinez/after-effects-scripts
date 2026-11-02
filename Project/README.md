# 🗄️ Project Scripts

### [Add Comments To Selected Items (v1.0)](Add_Comments_To_Selected_Items.jsx)

Add a comment to all selected compositions in the project file

---

### [Add Selection To New Folder (v1.0)](Add_Selection_To_New_Folder.jsx)

Add all selected items in the Project Panel to a new folder.

---

### [Clean Selected Folder (v2.2)](Clean_Selected_Folder.jsx)

Remove unused items from any selected folders.

---

### [Clean Up Overlord Folder (v1.2)](Clean_Up_Overlord_Folder.jsx)

Clean up the Overlord source folder by removing all files that aren't imported into
the current project. Folder detection in the project and on the file systems is all automatic.

Files are not truely deleted instead they are moved to a `Deleted` folder on the desktop.

---

### [Export Text To File (v1.0)](Export_Text_To_File.jsx)

Export all selected text layers to a single `export.txt` text file on the desktop.

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

### [Rename Selected Project Items (v2.3)](Rename_Selected_Project_Items.jsx)

Rename selected project items appending zero-padded numbers as needed.

---

### [Rename Source To Layer Name (v2.1)](Rename_Source_To_Layer_Name.jsx)

Rename the selected item to match the name of the layer it is used for.

---

### [Replace Text In Project Item Name (v2.3)](Replace_Text_In_Project_Item_Name.jsx)

Replace text in the name of all selected project items. RegEx is accepted.

---

### [Reset Imported Item Names (v1.0)](Reset_Imported_Item_Names.jsx)

Reset the name for all selected imported items in the Project Panel.

Useful for when a file name is changed on the operating system side then relinked in After
Effects but the name doesn't update.

---

### [Reset Selected Item Labels (v1.0)](Reset_Selected_Item_Labels.jsx)

Restore all selected item labels to their default as defined in the After Effects
preferences.

---

### [Set All Item Labels To None (v2.1)](Set_All_Item_Labels_To_None.jsx)

Set the label for all items in the current project to `None` or label `0`.

---

### [Set Proxies From Folder (v2.3)](Set_Proxies_From_Folder.jsx)

Set proxies for all compositions within the project.

---

### [Set Selected Duration (v1.0)](Set_Selected_Duration.jsx)

Set the duration of all selected compositions in the Project Panel.

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

