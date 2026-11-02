# 🚀 Render Scripts

### [Add Commented Items To Render Queue (v1.0)](Add_Commented_Items_To_Render_Queue.jsx)

Add all eligible compositions to the Render Queue. A composition is considered
eligible when it has a comment that matches the `render%%template` format.

> [!CAUTION]
> Specified render templates should exist within the project. For example this script is
> generally expecting either Apple ProRes 422 HQ or Apple ProRes 4444 + Alpha. There is no error
> checking so missing templates will not fail gracefully.

Once a composition has been added and a template has been applied the final file will be
converted from hyphan-delimited `-` to underscore-delimited `_` naming per client request.

---

### [Add Folder To Render Queue (v1.0)](Add_Folder_To_Render_Queue.jsx)

Select a single folder in the Project panel and run this script to search through
all nested subfolders and add all compositions to the Render Queue.

---

### [Add Labeled Items To Render Queue (v1.0)](Add_Labeled_Items_To_Render_Queue.jsx)

Add all compositions to the Render Queue that have the specified label.

---

### [Add Selected Compositions To Render Queue (v1.0)](Add_Selected_Compositions_To_Render_Queue.jsx)

Add the selected compositions to the Render queue defaulting to using the
`H.264 MP4` Output Template. However, if the composition name contains the characters `_TEXT_`
anywhere in the name, then use the `Apple ProRes 4444 + Alpha` Output Template.

> [!CAUTION]
> These script was built for a very specific use-case and requires both Output Templates to exist
> in your After Effects project.

---

### [Add Time Spans To Render Queue (v1.0)](Add_Time_Spans_To_Render_Queue.jsx)

Add composition time spans to the render queue based on markers in the active
composition. Creates separate render items for each time span between markers, with output
files named using marker comments.

> [!CAUTION]
> These script was built for a very specific use-case and requires a sepcific Output Template
> to exist in your After Effects project. Feel free to adjust.

---

### [Clean Render Queue (v2.1)](Clean_Render_Queue.jsx)

Clean out the Render Queue.

---

### [Manually Render PNG Sequence (v1.1)](Manually_Render_PNG_Sequence.jsx)

I wrote this script because the Render Queue was being annoying, spitting out
renders with issues, and I didn't have time to troubleshoot the problem.

Instead, simply set your `Work Area` then run the script to select where the PNG Sequence should
be rendered.

> [!CAUTION]
> I don't recommend using this script regulary. `saveFrameToPng()` is officially undocumented and
> was found via research. The whole function may disappear or even completely stop working. The
> quality does not compare to using the Render Queue.

