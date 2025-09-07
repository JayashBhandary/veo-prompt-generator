# Veo 3 AI Video JSON Prompt Generator 🎬

A handy Chrome extension to help you craft structured JSON prompts for AI video generation models. This tool provides a user-friendly interface to break down your creative ideas into key components, generating both a detailed JSON object and a human-readable summary.



---

## Features ✨

* **Intuitive Form:** Easily input the main subject, action, setting, lighting, and other details.
* **Predefined Styles:** Choose from a variety of visual styles (e.g., Photorealistic, Anime, Cinematic) and camera shots (e.g., Wide, Close-up, Drone).
* **Structured JSON Output:** Automatically generates a well-formatted JSON object, perfect for use with an AI video model's API.
* **Prompt Summary:** Creates a concise, human-readable sentence from all your inputs.
* **One-Click Copy:** Instantly copy the generated JSON to your clipboard with a single click.
* **Sleek Dark UI:** A modern, responsive, and comfortable dark theme for ease of use.

---

## Installation 🚀

To install and use this extension locally, follow these steps:

1.  **Download the Code:**
    * Clone the repository: `git clone https://github.com/JayashBhandary/veo-prompt-generator.git`
    * Or, download the project as a ZIP file and unzip it.

2.  **Load the Extension in Chrome:**
    * Open your Chrome browser and navigate to `chrome://extensions`.
    * Enable **Developer mode** using the toggle switch in the top-right corner.
    * Click the **"Load unpacked"** button that appears on the left.
    * Select the directory where you cloned or unzipped the project files.
    * The extension's icon will now appear in your browser's toolbar. Pin it for easy access!

---

## How to Use 📝

1.  Click the extension's icon in your browser toolbar to open the popup window.
2.  Fill out the form fields with the details of the video you want to create.
3.  Click the **"Generate Prompt"** button.
4.  The generated JSON will appear in the text area at the bottom.
5.  Click **"Copy to Clipboard"** to grab the JSON and use it wherever you need!

---

## Technologies Used 💻

This extension is built with web-native technologies, keeping it lightweight and fast.

* **HTML:** For the structure of the popup.
* **CSS:** For the modern, dark-themed styling.
* **JavaScript:** For all the interactive logic, including prompt generation and clipboard functionality.

---

## File Structure 📂

Here's a quick overview of the key files in this project:
```python
├── popup.html       # The main UI for the extension popup
├── popup.css        # All styles for the popup interface
├── popup.js         # Logic for prompt generation and clipboard functionality
├── manifest.json    # The extension's configuration file required by Chrome
└── images/          # Contains the extension icons (icon16.png, etc.)
```