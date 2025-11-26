<%*
const leaf = app.workspace.activeLeaf;
const file = leaf.view.file;

if (file) {
    // 1. CAPTURE CURRENT CURSOR
    let cursor = { line: 0, ch: 0 };
    if (leaf.view.getViewType() === "markdown") {
        cursor = leaf.view.editor.getCursor();
    }

    const folder = file.parent;
    const files = folder.children
        .filter(f => f instanceof tp.obsidian.TFile && f.extension === "md")
        .sort((a, b) => {
            return a.name.localeCompare(b.name, undefined, {numeric: true, sensitivity: 'base'});
        });

    const currentIndex = files.indexOf(file);
    
    if (currentIndex > 0) {
        const prevFile = files[currentIndex - 1];
        
        // 2. OPEN PREV FILE
        await leaf.openFile(prevFile);
        
        // 3. RESTORE CURSOR
        const newView = app.workspace.activeLeaf.view;
        
        if (newView.getViewType() === "markdown") {
            const editor = newView.editor;
            const maxLines = editor.lineCount();
            
            let targetLine = Math.min(cursor.line, maxLines - 1);
            let lineLength = editor.getLine(targetLine).length;
            let targetCh = Math.min(cursor.ch, lineLength);

            editor.setCursor({ line: targetLine, ch: targetCh });
            
            editor.scrollIntoView({
                from: {line: targetLine, ch: 0},
                to: {line: targetLine, ch: 0}
            }, true);
        }
    } else {
        new Notice("🚫 Start of folder");
    }
}
_%>