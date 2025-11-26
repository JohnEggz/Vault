<%*
const leaf = app.workspace.activeLeaf;
if (leaf && leaf.view.getViewType() === "markdown") {
    const state = leaf.getViewState();
    if (state.state.mode !== 'preview') {
        state.state.mode = 'preview';
        await leaf.setViewState(state);
    }
}
_%>
