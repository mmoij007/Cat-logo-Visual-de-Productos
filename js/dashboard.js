// This is a simplified dashboard functionality.
// In a real application, you would use a backend to store and manage product data.

document.addEventListener('DOMContentLoaded', () => {
    const addProductForm = document.getElementById('add-product-form');
    const productManagementList = document.getElementById('product-management-list');

    // Dummy product data
    let products = [
        { id: 1, name: 'Producto 1', price: '$10', image: 'images/product1.jpg' },
        { id: 2, name: 'Producto 2', price: '$15', image: 'images/product2.jpg' }
    ];

    function renderProducts() {
        productManagementList.innerHTML = '<h3>Gestionar Productos</h3>';
        products.forEach(product => {
            const productEl = document.createElement('div');
            productEl.classList.add('product-item');
            productEl.innerHTML = `
                <span>${product.name} - ${product.price}</span>
                <button onclick="deleteProduct(${product.id})">Eliminar</button>
            `;
            productManagementList.appendChild(productEl);
        });
    }

    addProductForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const productName = document.getElementById('product-name').value;
        const productPrice = document.getElementById('product-price').value;
        // In a real app, you would handle the image upload to a server.
        // Here we just simulate adding the product.
        const newProduct = {
            id: products.length + 1,
            name: productName,
            price: productPrice,
            image: 'images/new-product.jpg' // Placeholder
        };
        products.push(newProduct);
        renderProducts();
        addProductForm.reset();
    });

    window.deleteProduct = (id) => {
        products = products.filter(product => product.id !== id);
        renderProducts();
    };

    renderProducts();
});
