// Function to get data from a public API


    this.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(){
           alert('Redirecting !');
        });
    });
    
  const btn = document.getElementById('get-food');
  const img = document.getElementById('food-image');

  btn.addEventListener('click', () => {
    // 1. Call the API
    fetch('https://foodish-api.com/api/')
      .then(response => response.json()) // 2. Convert response to JSON
      .then(data => {
        // 3. Use the 'image' property from the API response
        img.src = data.image;
        img.style.display = 'block'; // Show the image once loaded
      })
      .catch(error => console.error('Error fetching food:', error));
  });

