# After Effects Scripts

A collection of helpful scripts for After Effects that run natively or with a 3rd party script launcher..

To run the script natively in After Effects use `File > Script > Run Script File...` and choose this script.

## Scripts

#### [Add All Compositions To Render Queue (v1.4)](/scripts/Add%20All%20Compositions%20To%20Render%20Queue.jsx)

Comb throught the entire project looking for all compositions with names that match
the correct pattern and add them to the Render Queue. Each item in the Render Queue will output
two files to the desktop: a ProRes 422 HQ MOV and a PNG Sequence.

#### [Create Eye Rig (v1.2)](/scripts/Create%20Eye%20Rig.jsx)

Used specifically for a current project. Creates an eye rig for a selected eye
layer. Probably pretty usless outside of this specific use case but has some nice code to
steal for future scripts.

#### [Merge Imported Project File (v1.0)](/scripts/Merge%20Imported%20Project%20File.jsx)

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
|   |   |-- tbs\_ch\_101\_sh\_01\_v01
|   +-- Footage
|   |   |-- tbs\_ch\_101\_edit\_v1.mp4
|   +-- Ray Palette Comps
|   |   |-- Ray - The Biggest Story
|   +-- Solids
|   +-- tbs\_ch\_101\_sh\_02\_v01 [SELECTED]
|   |   +-- Assets
|   |   +-- Audio
|   |   +-- Compositions
|   |   |   +-- Precomps
|   |   |   |   +-- Misc
|   |   |   |   |   |-- Animatic
|   |   |   |-- tbs\_ch\_101\_sh\_02\_v01
|   |   +-- Footage
|   |   |   |-- tbs\_ch\_101\_edit\_v1.mp4
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
|   |   |-- tbs\_ch\_101\_sh\_01\_v01
|   |   |-- tbs\_ch\_101\_sh\_02\_v01
|   +-- Footage
|   |   |-- tbs\_ch\_101\_edit\_v1.mp4
|   +-- Ray Palette Comps
|   |   |-- Ray - The Biggest Story
|   +-- Solids
```

#### [Prepare Project File (v1.0)](/scripts/Prepare%20Project%20File.jsx)

Automate the process of setting up a new project file for a new shot. The script
expects a correctly prepared base project file: correctly named PROJECT FILE NAME, correctly
named ANIMATION COMPOSITION NAME, correctly named ANIMATIC COMPOSITION NAME, and ANIMATIC layers
created using Scene Edit Detection.

- PROJECT FILE NAME:          `tbs\_ch\_XX\_sh\_XX\_vXX`
- ANIMATION COMPOSITION NAME: `tbs\_ch\_XX\_sh\_XX\_vXX`
- ANIMATIC COMPOSITION NAME:  `Animatic`

PROJECT FILE NAME and ANIMATION COMPOSITION NAME can utilize 2 or 3 digits for chapter number.

ANIMATIC layers should be in the default order resulting from Scene Edit Detection. DESCENDING
layers are ASCENDING shot numbers.

#### [Update Turbulent Displace Expression (v1.3)](/scripts/Update%20Turbulent%20Displace%20Expression.jsx)

Comb throught the entire project looking for all instances of Turbulent Displace and
update the old expression on "Random Seed" with a new expression to avoid a visible "jump" at the
beginning of every composition.

