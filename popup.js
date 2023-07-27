document.getElementById("changeIconBtn").addEventListener("click", function () {
const fileInput = document.getElementById("iconInput");
const file = fileInput.files[0];

if (!file) {
    alert("Please select an image file.");
    return;
}

if (!file.type.startsWith("image/")) {
    alert("Invalid file format. Please select an image file.");
    return;
}

// Convert the selected image file to a data URL
const reader = new FileReader();
reader.onload = function () {
    const dataURL = reader.result;

    // Save the dataURL to local storage
    chrome.storage.local.set({ twitterIcon: dataURL }, function () {
    alert("Twitter icon changed successfully! The next time you open or refresh the Twitter site, you will see your custom icon.");

        });
    };
reader.readAsDataURL(file);
});

