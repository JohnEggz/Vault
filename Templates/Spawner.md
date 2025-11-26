<%*
// 1. GET CONTEXT
// Assumes you are running this from inside the Set folder (e.g. inside "AnaM/k4/")
// or from a file inside that folder (like "k4.md")
let activeFile = app.workspace.getActiveFile();
if (!activeFile) return;

let folder = activeFile.parent;
let set = folder.name; // "k4"
let subject = folder.parent.name; // "AnaM"

// 2. PROMPT FOR ID
let input = await tp.system.prompt(`Generate notes for ${subject}/${set}? (e.g. 5, 1-10, 2a-f)`);
if (!input) return;

// 3. PARSE INPUT INTO LIST OF IDs
let ids = [];
let errorMsg = "";

if (input.includes("-")) {
    let parts = input.split("-");
    if (parts.length !== 2) {
        errorMsg = "Invalid format. Too many hyphens.";
    } else {
        let start = parts[0].trim();
        let end = parts[1].trim();

        // SCENARIO A: Numeric Range (1-12)
        if (/^\d+$/.test(start) && /^\d+$/.test(end)) {
            let s = parseInt(start);
            let e = parseInt(end);
            if (s > e) {
                errorMsg = "Start number cannot be greater than end number.";
            } else {
                for (let i = s; i <= e; i++) ids.push(i.toString());
            }
        } 
        // SCENARIO B: Alpha Range (2a-f)
        // Regex: Start must be Number+Letter (2a), End must be just Letter (f)
        else if (/^\d+[a-z]$/.test(start) && /^[a-z]$/.test(end)) {
            let prefix = start.slice(0, -1); // "2"
            let startChar = start.slice(-1); // "a"
            let endChar = end;               // "f"
            
            if (startChar >= endChar) {
                errorMsg = "Start letter must be before end letter.";
            } else {
                let sCode = startChar.charCodeAt(0);
                let eCode = endChar.charCodeAt(0);
                for (let i = sCode; i <= eCode; i++) {
                    ids.push(prefix + String.fromCharCode(i));
                }
            }
        } 
        // SCENARIO C: Invalid (5a-5c, 5a-6b, etc)
        else {
            errorMsg = "Invalid range format. Use '1-10' or '2a-f'.";
        }
    }
} else {
    // SCENARIO D: Single Item
    ids.push(input.trim());
}

// 4. ERROR HANDLING
if (errorMsg) {
    new Notice(`❌ ${errorMsg}`);
    return;
}

// 5. GENERATE FILES
let createdCount = 0;
let templateFile = tp.file.find_tfile("New Exercise"); // Ensure this template exists!

if (!templateFile) {
    new Notice("❌ Template 'New Exercise' not found!");
    return;
}

for (let id of ids) {
    // Format: AnaM_k4_z5
    let filename = `${subject}_${set}_z${id}`;
    let targetPath = `${folder.path}/${filename}`;
    
    if (await tp.file.exists(targetPath)) {
        // Skip existing files to prevent overwriting
        continue;
    }
    
    await tp.file.create_new(templateFile, filename, false, folder);
    createdCount++;
}

// 6. FEEDBACK
if (createdCount > 0) {
    new Notice(`✅ Generated ${createdCount} notes.`);
} else {
    new Notice("⚠️ No new notes created (files might already exist).");
}

tR = "";
_%>