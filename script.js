//your JS code here. If required.
    function displayBrowserInfo() {
      var browserInfo = document.getElementById('browser-info');
      var userAgent = navigator.userAgent;
      var browserName, version;

      if (userAgent.indexOf("Firefox") !== -1) {
        browserName = "Firefox";
        version = userAgent.split("Firefox/")[1];
      } else if (userAgent.indexOf("Chrome") !== -1) {
        browserName = "Chrome";
        version = userAgent.split("Chrome/")[1];
      } else if (userAgent.indexOf("Edge") !== -1) {
        browserName = "Microsoft Edge";
        version = userAgent.split("Edge/")[1];
      } else if (userAgent.indexOf("Safari") !== -1) {
        browserName = "Safari";
        version = userAgent.split("Version/")[1];
      } else if (userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident") !== -1) {
        browserName = "Internet Explorer";
        version = userAgent.indexOf("MSIE") !== -1
          ? userAgent.split("MSIE ")[1].split(";")[0]
          : userAgent.split("rv:")[1].split(")")[0];
      } else {
        browserName = "Unknown";
        version = "N/A";
      }

      // Display the browser information in the div
      browserInfo.textContent = "You are using " + browserName + " version " + version;
    }

    // Call the function when the page loads
    window.onload = displayBrowserInfo;