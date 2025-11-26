<%*
const leaf = app.workspace.activeLeaf;
if (leaf) {
    const view = leaf.view;
    
    // Check if it's a Markdown Editor (Source or Live Preview)
    if (view.getViewType() === "markdown") {
        // 1. Force Focus
        view.editor.focus();
        
        // 2. Optional: Jiggle the layout to ensure cursor is visible
        // (Scrolls to where the cursor currently is)
        const cursor = view.editor.getCursor();
        view.editor.scrollIntoView({
            from: cursor,
            to: cursor
        }, true);
        
        new Notice("🎯 Focused");
    } else {
        // If you are on a Canvas or PDF, just focus the frame
        view.contentEl.focus();
    }
}
_%>