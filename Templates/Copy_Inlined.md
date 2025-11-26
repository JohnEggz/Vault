<%*
// Helper function to remove YAML Frontmatter
const stripYaml = (text) => {
    // Regex explanation:
    // ^---\n     -> Starts with --- and newline
    // [\s\S]*?   -> Match anything (lazy) including newlines
    // \n---\n?   -> End with newline, ---, and optional newline
    return text.replace(/^---\n[\s\S]*?\n---\n?/, "").trim();
}

// 1. Get content of CURRENT file
let finalContent = await tp.file.content;

// 2. Find the embed: ![[Filename]]
const regex = /!\[\[(.*?)(?:\|.*?)?\]\]/;
const match = finalContent.match(regex);

if (match) {
    const fullTag = match[0];   // ![[AnaM_k4_z5]]
    let linkPath = match[1];    // AnaM_k4_z5
    
    // Clean anchor (#)
    linkPath = linkPath.split("#")[0];

    // 3. Find Linked File
    const file = app.metadataCache.getFirstLinkpathDest(linkPath, tp.file.path(true));

    if (file) {
        // 4. Read Linked File
        let embeddedText = await app.vault.read(file);

        // 5. STRIP YAML FROM LINKED FILE (Parent)
        embeddedText = stripYaml(embeddedText);

        // 6. Inline it
        finalContent = finalContent.replace(fullTag, `\n${embeddedText}\n`);
        new Notice(`✅ Inlined: ${linkPath}`);
    } else {
        new Notice(`⚠️ Error: Could not find file '${linkPath}'`);
    }
}

// 7. STRIP YAML FROM CURRENT FILE (Child)
// We do this last so we are stripping the header of the final compiled text
finalContent = stripYaml(finalContent);

// 8. Copy to Clipboard
await navigator.clipboard.writeText(finalContent);
new Notice("📋 Copied Clean Text to Clipboard!");
_%>