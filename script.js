
// Initialize necessary variables
let heartCount = 0;
let copyCount = 0;
let coinCount = 100; // Starting coin count
let callHistory = [];

// the hear count functionality
function updateHeartCount() {
    document.getElementById('heartCount').innerText = heartCount;
}

// Copy count funtionality
function updateCopyCount() {
    document.getElementById('copyCount').innerText = copyCount;
}

// the coin count functionality
function updateCoinCount() {
    document.getElementById('coinCount').innerText = coinCount;
}

// Handle heart icon click to increase heart count
const heartIcons = document.querySelectorAll('#card-heart');
heartIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        heartCount++;
        updateHeartCount();
    });
});

// Handle copy button click to increase copy count
const copyBtns = document.querySelectorAll('.copyBtn');
copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        copyCount++;
        updateCopyCount();

        // Get the phone number from the card
        const contactNumber = e.target.closest('.card').querySelector('#contactNumber').innerText;

        // Copy to clipboard
        navigator.clipboard.writeText(contactNumber).then(() => {
            alert('Phone number copied: ' + contactNumber);
        }).catch(() => {
            alert('Failed to copy');
        });
    });
});



// Update the initial counts
updateHeartCount();
updateCopyCount();
updateCoinCount(); // Display initial coin count

