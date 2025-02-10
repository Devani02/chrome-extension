document.addEventListener("DOMContentLoaded", function () {
    let toggleSwitch = document.getElementById("toggleSwitch");

    // Get stored dark mode preference
    chrome.storage.sync.get("darkMode", function (data) {
        toggleSwitch.checked = !!data.darkMode;
    });

    toggleSwitch.addEventListener("change", function () {
        let newMode = toggleSwitch.checked;
        chrome.storage.sync.set({ darkMode: newMode });

        // Send message to content.js to update dark mode on the webpage
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: toggleDarkMode,
                args: [newMode]
            });
        });
    });
});

// Function to toggle dark mode (executed in webpage)
function toggleDarkMode(darkMode) {
    if (darkMode) {
        document.documentElement.classList.add("dark-mode");
    } else {
        document.documentElement.classList.remove("dark-mode");
    }
}
