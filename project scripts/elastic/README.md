# After Effects Scripts

A collection of helpful workflow scripts for After Effects that either run natively right from the After Effects menu or partner well with 3rd party tools from [aescripts + aeplugins](https://aescripts.com/) such as [KBar3](https://aescripts.com/kbar/), [Tool Launcher](https://aescripts.com/tool-launcher/), [Quick Menu 3](https://aescripts.com/quick-menu/).

I also have a free tool for After Effects called [Atheneum](https://github.com/kyletmartinez/atheneum-for-after-effects) which I personally use with this script collection.

To run a script natively in After Effects use `File > Script > Run Script File...` and choose the script.

## Scripts

#### [Shift Highlight Layers (v1.1)](/scripts/Shift_Highlight_Layers.jsx)

Highlight layers are set up in a grid using sliders for X position and Y Position to
automatically adjust their position. Imagine the sliders indicating which column and row the
highlight should appear on and using math to actually set the position values.

It became cumbersome to adjust groups of highlights individually so this script with adjust all
the selected layers at one time, shifting positions horizontally and vertically based on the
xOffset and yOffset values.

I set the values manually but they could use a prompt() to ask for user input as well.

