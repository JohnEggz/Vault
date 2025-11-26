<%*
// 1. Get the current file and its parent folder
const currentFile = tp.config.active_file;
if (!currentFile) {
    new Notice("No active file found. Please select a file in the target folder.");
    return;
}
const currentFolder = currentFile.parent;

// 2. Determine the "Base Name"
// This assumes the current file is named like "FizCWA_k1_z1"
// We want to strip the "_z1" part to get "FizCWA_k1"
// If the current file doesn't have a _z number, we use the whole filename as the base.
const nameRegex = /^(.*)_z(\d+)$/;
const match = currentFile.basename.match(nameRegex);
let baseName = currentFile.basename;

if (match) {
    baseName = match[1];
}

// 3. Scan the folder for the highest number for this Base Name
const files = app.vault.getFiles();
const siblings = files.filter(f => f.parent.path === currentFolder.path);

let maxNum = 0;

siblings.forEach(file => {
    // Check if file matches "BaseName_zNumber"
    if (file.basename.startsWith(baseName)) {
        const fileMatch = file.basename.match(/_z(\d+)$/);
        if (fileMatch) {
            const num = parseInt(fileMatch[1]);
            if (num > maxNum) maxNum = num;
        }
    }
});

// 4. Calculate next number
const nextNum = maxNum + 1;
const newFileName = `${baseName}_z${nextNum}`;

// 5. Create the file and open it
await tp.file.create_new("", newFileName, false, currentFolder);
%>
