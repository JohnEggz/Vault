<%*
const leaf = app.workspace.activeLeaf;
const file = leaf.view.file;

if (file) {
    // 1. CAPTURE CURRENT CURSOR POSITION
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
    
    if (currentIndex !== -1 && currentIndex < files.length - 1) {
        const nextFile = files[currentIndex + 1];
        
        // 2. OPEN NEXT FILE
        await leaf.openFile(nextFile);
        
        // 3. RESTORE CURSOR (With Safety Check)
        // We need to re-fetch the view because the file changed
        const newView = app.workspace.activeLeaf.view;
        
        if (newView.getViewType() === "markdown") {
            const editor = newView.editor;
            const maxLines = editor.lineCount();
            
            // Ensure we don't try to go to line 50 in a 10-line file
            let targetLine = Math.min(cursor.line, maxLines - 1);
            // Ensure we don't put cursor past the end of the text on that line
            let lineLength = editor.getLine(targetLine).length;
            let targetCh = Math.min(cursor.ch, lineLength);

            editor.setCursor({ line: targetLine, ch: targetCh });
            
            // Optional: Scroll the view to center the cursor
            editor.scrollIntoView({
                from: {line: targetLine, ch: 0},
                to: {line: targetLine, ch: 0}
            }, true);
        }
    } else {
        new Notice("🚫 End of folder");
    }
}
_%>