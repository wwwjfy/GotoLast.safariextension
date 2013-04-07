window.addEventListener("keydown", onKeydown, false);

function onKeydown(e) {
    if (!e.metaKey && !e.ctrlKey && e.altKey && !e.shiftKey && e.keyCode == 57) {
        safari.self.tab.dispatchMessage('Go to Last tab');
    }
}
