chrome.storage.sync.get("darkMode", function (data) {
    if (data.darkMode) {
        document.documentElement.classList.add("dark-mode");
    }
});
