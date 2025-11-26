<%*
const pluginID = "obsidian-latex-suite";
const plugin = app.plugins.getPlugin(pluginID);

if (plugin) {
    // Log all setting keys to the console
    console.log("LATEX SUITE SETTINGS:", plugin.settings);
    
    // Check specific common names
    const s = plugin.settings;
    let status = "";
    
    if (s.hasOwnProperty("conceal")) status += "Found 'conceal' ";
    if (s.hasOwnProperty("mathConceal")) status += "Found 'mathConceal' ";
    if (s.hasOwnProperty("concealmath")) status += "Found 'concealmath' ";
    
    new Notice(`Diagnostics run. Check Console (Ctrl+Shift+I). Found: ${status || "Nothing obvious"}`);
} else {
    new Notice(`❌ Plugin '${pluginID}' not found. Check folder name!`);
}
_%>