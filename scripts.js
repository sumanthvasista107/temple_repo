function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle
    ("active");
    
    const links = menu.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');

        if (targetId === "#") {
            window.scrollTo({
                top: 0, // Scroll to the top of the page
                behavior: 'smooth'
            });
        } else {
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 15, // Adjust 60px according to header height
                behavior: 'smooth'
            });
        }
    });
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();

    // Name validation: at least 2 characters, letters and spaces only
    if (!/^[A-Za-z\s]{2,}$/.test(name)) {
        alert('Please enter a valid name with at least 2 characters.');
        return;
    }

    // Phone validation: 10 digits only
    if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    var form = e.target;
    var formData = new FormData(form);

    fetch('https://formspree.io/f/mldrveae', {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Show the thank you modal
            document.getElementById('thankYouModal').style.display = 'block';
            
            // Reset the form
            form.reset();
        } else {
            alert('Oops! There was a problem sending your message.');
        }
    }).catch(error => {
        alert('Oops! There was a problem sending your message.');
    });
});

// Close the modal when the "Close" button is clicked
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('thankYouModal').style.display = 'none';
});



