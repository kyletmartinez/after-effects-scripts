# After Effects Scripts

A collection of helpful scripts for After Effects that run natively or with a 3rd party script launcher.

To run the script natively in After Effects use `File > Script > Run Script File...` and choose this script.

## Scripts

#### [Composition Naming Assistant (v1.0)](/scripts/Composition%20Naming%20Assistant.jsx)

Assist with updating the naming for the current composition based on a standard
naming convention. UI should update correctly based on naming.

#### [Place Pin (v1.0)](/scripts/Place%20Pin.jsx)

Assist with pin placement based on gutter width. Ensure that each pin is parented to
the pin above it in the pin grid.

#### [Update Fonts (v1.0)](/scripts/Update%20Fonts.jsx)

Check the entire project for all fonts in use. If a font is already a valid font
the don't change it. If a font is recognized as having a valid replacmeent then replace the
font. If a font is not recognized as having a valid replacement then let the user know. In the
end, let the user know how many fonts were changed in total.

Currently there is a function that fixes incorrect black-tone font colors as well. Typically I
comment it out if it isn't needed. There is definitely a more user-friendly way to approach this.

