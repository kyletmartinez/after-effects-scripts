# Scripts

### [Convert Drop Shadows For Lottie (v1.0)](Convert_Drop_Shadows_For_Lottie.jsx)

There appears to be some inconsistencies when it comes to Lottie supported features
and how Lottie is actually implemented across web platforms. For situations where `Drop Shadow`
effects are required, but not supported, `Gaussian Blur` seems to be a viable solution.

This script will take a selected layer that has `Drop Shadow` effects and generate the
appropriate layers with `Gaussian Blur` instead.

> [!NOTE]
> While developing this script I learned the Opacity property of Drop Shadow effect is actually
> a range of 0-255 while the Opacity property of a Layer is 0-100. After Effects is weird.

While there is some level of personal preference here in this script (layer naming, layer
labels, etc) the majority of the workflow is as workflow-agnostic as possible.

> [!IMPORTANT]
> Through trial-and-error I landed on using a modifier of `0.75` when converting Drop Shadow
> `Softness` to Gaussian Blur `Blurriness`. For some reason using `75%` of blur seems to match
> the best.

Learn more about [Lottie Supported Features](https://lottiefiles.com/supported-features)

---

### [Prepare Layer Out Points For Lottie (v1.0)](Prepare_Layer_Out_Points_For_Lottie.jsx)

Ensure that any layer active on the last from of the composition it's `Out Point`
extended one frame past the end. This removes a bug from Lottie exports.

