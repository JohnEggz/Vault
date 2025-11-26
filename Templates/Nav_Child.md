<%*
const activeFile = app.workspace.getActiveFile();

if (activeFile) {
    // 1. Get all links and embeds
    const cache = app.metadataCache.getFileCache(activeFile);
    const links = cache.links || [];
    const embeds = cache.embeds || [];
    
    // 2. Combine and Sort by position (Top of file -> Bottom)
    // This ensures we always pick the very first link the user sees.
    const allLinks = [...links, ...embeds].sort((a, b) => {
        return a.position.start.offset - b.position.start.offset;
    });

    let found = false;

    // 3. Iterate and Open the first valid Markdown file
    for (let linkObj of allLinks) {
        let linkPath = linkObj.link.split("#")[0]; // Remove anchor
        let file = app.metadataCache.getFirstLinkpathDest(linkPath, activeFile.path);

        // CHECK: Exists AND is Markdown AND is not the current file (self-link)
        if (file && file.extension === "md" && file.path !== activeFile.path) {
            await app.workspace.activeLeaf.openFile(file);
            found = true;
            break; // Stop looking, we jumped.
        }
    }

    if (!found) {
        new Notice("🚫 No Markdown children found.");
    }
}
_%>