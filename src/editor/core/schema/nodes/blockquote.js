const blockquote = {
    content: "block+",
        group: "block",
        parseDOM: [{tag: "blockquote"}],
        toDOM: function toDOM() {
        return ["blockquote", 0]
    }
};

export {blockquote}