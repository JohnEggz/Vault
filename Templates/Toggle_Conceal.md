<%*
const pluginID = "obsidian-latex-suite";
const plugin = app.plugins.getPlugin(pluginID);

if (plugin) {
    // 1. Toggle the MASTER switch
    plugin.settings.concealEnabled = !plugin.settings.concealEnabled;
    const newState = plugin.settings.concealEnabled;

    // 2. Save settings to disk
    await plugin.saveSettings();

    // 3. Restart the plugin to force the editor to repaint
    // This is required because the conceal logic runs on plugin load
    await app.plugins.disablePlugin(pluginID);
    await app.plugins.enablePlugin(pluginID);

    new Notice(`LaTeX Conceal: ${newState ? "ON" : "OFF"}`);
} else {
    new Notice(`❌ Plugin '${pluginID}' not found.`);
}
_%>