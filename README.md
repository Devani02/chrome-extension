# Light/Dark Mode Toggle Chrome Extension

## 📌 Overview
This Chrome extension allows users to toggle between **Light Mode** and **Dark Mode** on any website with a simple switch. The setting persists across page reloads.

## 🚀 Features
- Toggle between **Light Mode** and **Dark Mode**
- Saves the user's preference
- Works on all websites
- Simple and lightweight

## 📂 File Structure
```
light-dark-mode-extension/
├── manifest.json
├── popup.html
├── popup.js
├── content.js
├── styles.css
├── icons/
│   ├── icon-16.png
│   ├── icon-48.png
│   ├── icon-128.png
└── README.md
```

## ⚙️ Installation Guide
1. **Download the extension files** or clone the repository.
   ```sh
   git clone <repository-url>
   ```
2. **Open Chrome and go to the Extensions page:**
   - Open Chrome
   - Type `chrome://extensions/` in the address bar
3. **Enable Developer Mode** (top-right corner)
4. **Click on "Load unpacked"** and select the downloaded folder
5. The extension will now appear in your toolbar!

## 🔧 How It Works
1. Click the extension icon to open the popup
2. Toggle the switch to switch between **Light Mode** and **Dark Mode**
3. The page will update instantly
4. The setting is saved, so the mode persists even after refreshing the page

## 📜 Manifest.json (Configuration)
This file defines the extension details, permissions, and scripts.

## 📜 Popup.html (User Interface)
Contains a simple toggle switch to change the theme.

## 📜 Popup.js (Logic for UI)
Handles user interactions and updates the theme.

## 📜 Content.js (Applies Dark/Light Mode)
Injects CSS to modify the page’s appearance.

## 📜 Styles.css (Styling)
Provides a clean UI for the extension popup.

## 🛠️ Customization
- Change icons inside the `icons/` folder
- Modify `styles.css` to customize dark mode styling
- Update `manifest.json` for extension details

## 🏆 Credits
Developed by **Rohini Devani** 🚀


