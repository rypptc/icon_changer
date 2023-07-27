// content.js
// This script will be injected into Twitter pages to set the custom icon
console.log("content.js is running!");

// Wait for 1 second before running the main function
setTimeout(function() {
  console.log("the page has loaded!");

  chrome.storage.local.get("twitterIcon", function(data) {
    const customIcon = data.twitterIcon;

    if (customIcon) {
      // Find the <a> element with aria-label="Twitter"
      const twitterLink = document.querySelector('a[aria-label="Twitter"]');
      console.log("twitterLink", twitterLink);

      if (twitterLink) {
        // Find the <svg> element inside the <a> link
        const svgElement = twitterLink.querySelector('svg');
        console.log("svgElement", svgElement);

        if (svgElement) {
          // Create a new image element
          const imgElement = document.createElement('img');
          imgElement.setAttribute('src', customIcon);

        // Set the size of the custom icon (adjust the values as needed)
        imgElement.style.width = '40px'; // Example: 40 pixels
        imgElement.style.height = '40px'; // Example: 40 pixels

          // Replace the <svg> element with the new image element
          svgElement.parentNode.replaceChild(imgElement, svgElement);
        } else {
          console.log("No SVG element found inside the Twitter link.");
        }
      } else {
        console.log("No Twitter link found on the page.");
      }

      console.log("Custom Icon Data URL:", customIcon);
    } else {
      console.log("No custom icon data found.");
    }
  });
}, 1000); // 1000 milliseconds = 1 second
