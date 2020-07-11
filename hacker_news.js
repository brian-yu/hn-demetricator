window.addEventListener('DOMContentLoaded', () => {
    removeUpvotes();
});

removeUpvotes();

async function removeUpvotes() {
    for (const e of document.getElementsByClassName('score')) {
        if (e instanceof HTMLSpanElement) {
            e.innerText = "";
            e.style.width = 0;
        }
    }

    // Handle Vanilla HN.
    for (const e of document.getElementsByTagName('a')) {
        if (e.text.includes("comments")) {
            e.innerText = "comments";
        }
    }

    // Handle HNES.
    for (const e of document.getElementsByClassName('comments')) {
        if (e instanceof HTMLAnchorElement) {
            // Don't overwrite posts with 0 comments and posts with new comments.
            if (e.text != "0" && e.children.length == 0) {
                e.style.fontSize = ".7rem";
                e.innerText = "discuss";
            }
        }
    }
}