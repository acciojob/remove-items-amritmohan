//your JS code here. If required.
var selectElement = document.getElementById("colorSelect");
        var buttonElement = document.querySelector("input[type='button']");

        buttonElement.addEventListener("click", () => {
            // Get the selected option
            var selectedIndex = selectElement.selectedIndex; // Get the selected option index
            if (selectedIndex !== -1) { // Ensure an option is selected
                selectElement.remove(selectedIndex); // Remove the selected option
            }

        })