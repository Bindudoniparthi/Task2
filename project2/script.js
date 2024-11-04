// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Thank you for your message!');
  document.getElementById('contactForm').reset();
});

// Dynamic Image Gallery
function addImage() {
  const imageUrl = document.getElementById('imageURL').value.trim();
  if (!imageUrl) {
    alert('Please enter an image URL');
    return;
  }

  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = 'Gallery Image';
  img.style.width = '100px';
  img.style.margin = '10px';
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function () {
    imgContainer.remove();
  };

  imgContainer.appendChild(img);
  imgContainer.appendChild(deleteButton);

  document.getElementById('images').appendChild(imgContainer);
  document.getElementById('imageURL').value = '';
}
