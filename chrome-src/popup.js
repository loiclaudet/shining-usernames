document.addEventListener("DOMContentLoaded", () => {
  restoreOptions();
  document
    .getElementById("default-color")
    .addEventListener("click", updatePreferences);
});

// Restores checkbox state using the preferences stored in chrome.storage.local
function restoreOptions() {
  // Use default fanciness value (true) set from background.js
  chrome.storage.local.get("fanciness", ({ fanciness }) => {
    document.getElementById("default-color").checked = !fanciness;
  });
}

function updatePreferences(event) {
  const fanciness = !event.target.checked;
  chrome.storage.local.set({ fanciness });
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      fanciness,
    });
  });
}
