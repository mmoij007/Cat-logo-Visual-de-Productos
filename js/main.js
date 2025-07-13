// Smooth scroll for the gallery button
document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#gallery').scrollIntoView({ behavior: 'smooth' });
});

// Scroll animations
const sections = document.querySelectorAll('section');
const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Dark mode toggle
const themeSwitch = document.getElementById('checkbox');
themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Load products from localStorage or use sample data
let products = JSON.parse(localStorage.getItem('products')) || [
    {
        id: 1,
        name: 'Producto 1',
        image: 'images/product1.jpg',
        price: '$10'
    },
    {
        id: 2,
        name: 'Producto 2',
        image: 'images/product2.jpg',
        price: '$15'
    },
    {
        id: 3,
        name: 'Producto 3',
        image: 'images/product3.jpg',
        price: 'Consultar'
    }
];

// Populate product gallery
const productList = document.getElementById('product-list');
function displayProducts(productsToDisplay) {
    productList.innerHTML = '';
    productsToDisplay.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        productList.appendChild(card);
    });
}

displayProducts(products);

// Search functionality
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchString);
    });
    displayProducts(filteredProducts);
});

// Sample featured product data
const featuredProducts = [
    {
        name: 'Producto Destacado 1',
        image: 'images/featured1.jpg',
        price: '$25'
    },
    {
        name: 'Producto Destacado 2',
        image: 'images/featured2.jpg',
        price: '$30'
    }
];

// Populate featured products carousel
const carousel = document.querySelector('.carousel');
featuredProducts.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <a href="https://wa.me/yourphonenumber" class="whatsapp-btn">Consultar por WhatsApp</a>
    `;
    carousel.appendChild(card);
});
