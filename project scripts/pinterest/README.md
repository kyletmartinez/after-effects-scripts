# After Effects Scripts

A collection of helpful workflow scripts for After Effects that either run natively right from the After Effects menu or partner well with 3rd party tools from [aescripts + aeplugins](https://aescripts.com/) such as [KBar3](https://aescripts.com/kbar/), [Tool Launcher](https://aescripts.com/tool-launcher/), [Quick Menu 3](https://aescripts.com/quick-menu/).

I also have a free tool for After Effects called [Atheneum](https://github.com/kyletmartinez/atheneum-for-after-effects) which I personally use with this script collection.

To run a script natively in After Effects use `File > Script > Run Script File...` and choose the script.

## Scripts

#### [Composition Naming Assistant (v1.1)](/scripts/Composition_Naming_Assistant.jsx)

Assist with updating the naming for the current composition based on a standard
naming convention. UI should update correctly based on naming.

#### [Place Pin (v1.3)](/scripts/Place_Pin.jsx)

Assist with pin placement based on gutter width. Ensure that each pin is parented to
the pin above it in the pin grid.

#### [Update Fonts (v1.1)](/scripts/Update_Fonts.jsx)

Check the entire project for all fonts in use. If a font is already a valid font
the don't change it. If a font is recognized as having a valid replacmeent then replace the
font. If a font is not recognized as having a valid replacement then let the user know. In the
end, let the user know how many fonts were changed in total.

Currently there is a function that fixes incorrect black-tone font colors as well. Typically I
comment it out if it isn't needed. There is definitely a more user-friendly way to approach this.

