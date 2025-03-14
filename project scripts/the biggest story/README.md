# After Effects Scripts

A collection of helpful workflow scripts for After Effects that either run natively right from the After Effects menu or partner well with 3rd party tools from [aescripts + aeplugins](https://aescripts.com/) such as [KBar3](https://aescripts.com/kbar/), [Tool Launcher](https://aescripts.com/tool-launcher/), [Quick Menu 3](https://aescripts.com/quick-menu/).

I also have a free tool for After Effects called [Atheneum](https://github.com/kyletmartinez/atheneum-for-after-effects) which I personally use with this script collection.

To run a script natively in After Effects use `File > Script > Run Script File...` and choose the script.

## Scripts

#### [Add All Compositions To Render Queue (v1.5)](/scripts/Add_All_Compositions_To_Render_Queue.jsx)

Comb throught the entire project looking for all compositions with names that match
the correct pattern and add them to the Render Queue. Each item in the Render Queue will output
two files to the desktop: a ProRes 422 HQ MOV and a PNG Sequence.

#### [Create Eye Rig (v1.3)](/scripts/Create_Eye_Rig.jsx)

Used specifically for a current project. Creates an eye rig for a selected eye
layer. Probably pretty usless outside of this specific use case but has some nice code to
steal for future scripts.

#### [Fix Turbulent Displace (v1.2)](/scripts/Fix_Turbulent_Displace.jsx)

Iterate recursively through all precomps and all layers to change the Size property
of all Turbulent Displace effects.

#### [Merge Imported Project File (v1.2)](/scripts/Merge_Imported_Project_File.jsx)

Select the folder for the imported project file and merge it by moving items from
nested folders within the imported folder to folders of the same name in the original project
file. Specialty folders are handled correctly:

- Animatics are renamed from a generic name to a specific name based on shot usage.
- Ray Dynamic Color compositions are reduced down to one instance.
- Imported animatic video files are condensed down to a single instance and extras are removed.

Correct and matching file stuctures are expected:

```
+-- ORIGINAL PROJECT
|   +-- Assets
|   +-- Audio
|   +-- Compositions
|   |   +-- Precomps
|   |   |   +-- Misc
|   |   |   |   |-- Animatic
|   |   |-- tbs_ch_101_sh_01_v01
|   +-- Footage
|   |   |-- tbs_ch_101_edit_v1.mp4
|   +-- Ray Palette Comps
|   |   |-- Ray - The Biggest Story
|   +-- Solids
|   +-- tbs_ch_101_sh_02_v01 [SELECTED]
|   |   +-- Assets
|   |   +-- Audio
|   |   +-- Compositions
|   |   |   +-- Precomps
|   |   |   |   +-- Misc
|   |   |   |   |   |-- Animatic
|   |   |   |-- tbs_ch_101_sh_02_v01
|   |   +-- Footage
|   |   |   |-- tbs_ch_101_edit_v1.mp4
|   |   +-- Ray Palette Comps
|   |   |   |-- Ray - The Biggest Story
|   |   +-- Solids
```

Resulting file structure:

```
+-- ORIGINAL PROJECT
|   +-- Assets
|   +-- Audio
|   +-- Compositions
|   |   +-- Precomps
|   |   |   +-- Misc
|   |   |   |   |-- Animatic 01
|   |   |   |   |-- Animatic 02
|   |   |-- tbs_ch_101_sh_01_v01
|   |   |-- tbs_ch_101_sh_02_v01
|   +-- Footage
|   |   |-- tbs_ch_101_edit_v1.mp4
|   +-- Ray Palette Comps
|   |   |-- Ray - The Biggest Story
|   +-- Solids
```

#### [Prepare Project File (v1.1)](/scripts/Prepare_Project_File.jsx)

Automate the process of setting up a new project file for a new shot. The script
expects a correctly prepared base project file: correctly named PROJECT FILE NAME, correctly
named ANIMATION COMPOSITION NAME, correctly named ANIMATIC COMPOSITION NAME, and ANIMATIC layers
created using Scene Edit Detection.

- PROJECT FILE NAME:          `tbs_ch_XX_sh_XX_vXX`
- ANIMATION COMPOSITION NAME: `tbs_ch_XX_sh_XX_vXX`
- ANIMATIC COMPOSITION NAME:  `Animatic`

PROJECT FILE NAME and ANIMATION COMPOSITION NAME can utilize 2 or 3 digits for chapter number.

ANIMATIC layers should be in the default order resulting from Scene Edit Detection. DESCENDING
layers are ASCENDING shot numbers.

#### [Update Turbulent Displace Expression (v1.4)](/scripts/Update_Turbulent_Displace_Expression.jsx)

Comb throught the entire project looking for all instances of Turbulent Displace and
update the old expression on `Random Seed` with a new expression to avoid a visible `jump` at the
beginning of every composition.

