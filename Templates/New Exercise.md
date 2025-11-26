<%*
// Filename: AnaM_k4_z5a
let title = tp.file.title;
let parts = title.split("_");

// Safety defaults
let subject = parts[0] || "Subject"; // AnaM
let set = parts[1] || "k0";          // k4
let rawZ = parts[2] || "z0";         // z5a
let exercise = rawZ.replace("z", ""); // 5a

// Detect Parent for inheritance (if this is 5a, parent is 5)
let parentLink = "";
let match = exercise.match(/^(\d+)[a-z]/);
if (match) {
    let parentID = match[1]; // "5"
    // Construct the hypothetical parent filename
    let parentName = `${subject}_${set}_z${parentID}`;
    parentLink = `![[${parentName}]]\n`;
}
_%>
---
type: exercise
subject: <% subject %>
set: <% set %>
exercise: <% exercise %>
created: <% tp.date.now("YYYY-MM-DD") %>
---

# Exercise <% exercise %>

<% parentLink %>
