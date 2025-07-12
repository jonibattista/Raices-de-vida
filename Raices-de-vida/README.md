Raíces de Vida 🌱

E-commerce desarrollado con React + Firebase como proyecto final de curso.

🚀 Tecnologías usadas

React

React Router DOM

Firebase (Firestore)

Context API (para el carrito)

Vite (entorno de desarrollo)

CSS

📦 Funcionalidades

Listado dinámico de productos desde Firestore

Detalle individual de cada producto

Filtro por categoría

Carrito de compras con:

Agregar productos

Modificar cantidades

Eliminar productos

Vaciar carrito

Formulario de checkout con generación de orden en Firestore

Visualización del ID de la orden confirmada

Navegación SPA sin recarga de página

📁 Estructura sugerida de componentes

src/
├── App.jsx
├── main.jsx
├── firebaseConfig.js
├── context/
│ └── CartContext.jsx
├── components/
│ ├── NavBar.jsx
│ ├── CartWidget.jsx
│ ├── ItemListContainer.jsx
│ ├── ItemList.jsx
│ ├── Item.jsx
│ ├── ItemDetailContainer.jsx
│ ├── ItemDetail.jsx
│ ├── ItemCount.jsx
│ ├── Cart.jsx
│ ├── CartItem.jsx
│ └── CheckoutForm.jsx

Desarrollado por Jonatan Gabriel Battista 💻
