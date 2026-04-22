


    this.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(){
           alert('Redirecting !');
        });
    });
    
  const btn = document.getElementById('get-food');
  const img = document.getElementById('food-image');

  btn.addEventListener('click', () => {
   
    fetch('https://foodish-api.com/api/')
      .then(response => response.json()) 
      .then(data => {
        
        img.src = data.image;
        img.style.display = 'block'; 
      })
      .catch(error => console.error('Error fetching food:', error));
  });


async function fetchNewProduct() {
    
    const randomId = Math.floor(Math.random() * 100) + 1;
    const cardElement = document.getElementById('product-card');

    try {
        const response = await fetch(`https://dummyjson.com/products/${randomId}`);
        const product = await response.json();

        
        cardElement.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}" class="product-img">
            <h2>${product.title}</h2>
            <p class="category">${product.category.toUpperCase()}</p>
            <p class="description">${product.description}</p>
            <p class="price">$${product.price}</p>
        `;
    } catch (error) {
        cardElement.innerHTML = `<p>Error loading product. Please try again.</p>`;
        console.error("API Error:", error);
    }
}


fetchNewProduct();

async function searchProduct() {
    const query = document.getElementById('search-input').value;
    const cardElement = document.getElementById('product-card');

    if (!query) return; 

    try {
        const response = await fetch(`https://dummyjson.com{query}`);
        const data = await response.json();

        if (data.products.length > 0) {
            const product = data.products[0]; 
            cardElement.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}" class="product-img">
                <h2>${product.title}</h2>
                <p class="category">${product.category.toUpperCase()}</p>
                <p class="description">${product.description}</p>
                <p class="price">$${product.price}</p>
            `;
        } else {
            cardElement.innerHTML = `<p>No products found for "${query}".</p>`;
        }
    } catch (error) {
        cardElement.innerHTML = `<p>Error searching for product.</p>`;
        console.error("API Error:", error);
    }
}


