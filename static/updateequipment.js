/* document.addEventListener('DOMContentLoaded', function() {
    // Event listener for the DOMContentLoaded event
    var selectAllCheckbox = document.getElementById('select-all'); // Get the select-all checkbox element
    if (selectAllCheckbox) {
        // Check if the select-all checkbox element exists
        // Add event listener for the change event to toggle all checkboxes
        selectAllCheckbox.addEventListener('change', function() {
            var checkboxes = document.querySelectorAll('input[name="equipment_select"]');
            checkboxes.forEach(function(checkbox) {
                checkbox.checked = selectAllCheckbox.checked;
            });
        });
    } else {
        console.error('Element with ID "select-all" not found');
    }

    // Event listener for the update button
    var updateButton = document.getElementById('update-btn'); // Get the update button element
    if (updateButton) {
        // Check if the update button element exists
        updateButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default button behavior
            updateEquipment();
        });
    } else {
        console.error('Element with ID "update-btn" not found');
    }

    // Function to handle updating equipment
    function updateEquipment() {
        var checkboxes = document.querySelectorAll('input[name="equipment_select"]:checked');
        if (checkboxes.length > 0) {
            var url = document.getElementById('update-btn').getAttribute('data-url');
            if (url) {
                window.location.href = url; // Redirect to the specified URL
            } else {
                console.error('URL is not defined');
            }
        } else {
            console.error('No checkbox is checked');
        }
    }
});



 */

// Event listener for the update button
var updateButton = document.getElementById('update-btn'); // Get the update button element
if (updateButton) {
    // Check if the update button element exists
    updateButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default button behavior
        updateEquipment();
    });
} else {
    console.error('Element with ID "update-btn" not found');
}

// Function to handle updating equipment
function updateEquipment() {
    var checkboxes = document.querySelectorAll('input[name="equipment_select"]:checked');
    if (checkboxes.length > 0) {
        var url = document.getElementById('update-btn').getAttribute('data-url');
        if (url) {
            window.location.href = url; // Redirect to the specified URL
        } else {
            console.error('URL is not defined');
        }
    } else {
        console.error('No checkbox is checked');
    }
}
