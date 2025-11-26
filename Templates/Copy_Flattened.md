<%*
// 1. Get raw content
let text = await tp.file.content;

// 2. Strip YAML Frontmatter (The invisible metadata)
// Regex: Start of file, ---, content, ---, newline
text = text.replace(/^---\n[\s\S]*?\n---\n?/, "");

// 3. Flatten Links and Embeds
// Matches: ![[Target|Alias]] or [[Target|Alias]] or [[Target]]
// Group 1: Target (File path)
// Group 2: Alias (Display text)
const linkRegex = /!?\[\[(.*?)(?:\|(.*?))?\]\]/g;

text = text.replace(linkRegex, (match, target, alias) => {
    // If there is an alias (e.g. [[File|My Text]]), use "My Text"
    if (alias) return alias;
    
    // If no alias, use the Target (e.g. [[File]]), but clean it up
    // Optional: You might want to remove anchors like "File#Header" -> "File"
    // If you want to keep the anchor visible, remove the .split part below.
    return target; //.split("#")[0]; 
});

// 4. Clean up whitespace (Trim start/end)
text = text.trim();

// 5. Copy to Clipboard
await navigator.clipboard.writeText(text);
new Notice("📋 Copied flattened text to clipboard!");
_%>