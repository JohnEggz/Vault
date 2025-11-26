<%*
const leaf = app.workspace.activeLeaf;
if (leaf && leaf.view.getViewType() === "markdown") {
    const state = leaf.getViewState();
    if (state.state.mode !== 'source' || state.state.source === true) {
        state.state.mode = 'source';
        state.state.source = false;
        await leaf.setViewState(state);
    }
}
_%>
