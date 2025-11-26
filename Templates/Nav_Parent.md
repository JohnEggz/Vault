<%*
const activeFile = app.workspace.getActiveFile();

if (activeFile) {
    // 1. Get Backlinks
    const backlinksMap = app.metadataCache.getBacklinksForFile(activeFile);
    const backlinkPaths = Array.from(backlinksMap.data.keys());
    
    let found = false;

    // 2. Iterate and Open the first valid Markdown file
    for (let path of backlinkPaths) {
        let file = app.vault.getAbstractFileByPath(path);

        // CHECK: Exists AND is Markdown
        if (file && file instanceof tp.obsidian.TFile && file.extension === "md") {
            await app.workspace.activeLeaf.openFile(file);
            found = true;
            break; // Stop looking, we jumped.
        }
    }

    if (!found) {
        new Notice("🚫 No Markdown parent found.");
    }
}
_%>