const express = require('express');
const app = express();

// Ruta para el endpoint de mocking
app.get('/mockingproducts', (req, res) => {
  const mockProducts = generateMockProducts(); // Genera productos de ejemplo
  res.json(mockProducts);
});

// Manejador de errores personalizado
app.use((err, req, res, next) => {
  console.error(err); // Imprime el error en la consola para depuración
  res.status(500).json({ error: 'Ocurrió un error en el servidor' });
});

// Función para generar productos de ejemplo (mocking)
function generateMockProducts() {
  const products = [];
  for (let i = 0; i < 100; i++) {
    const product = {
      id: i + 1,
      name: `Producto ${i + 1}`,
      price: Math.random() * 100,
    };
    products.push(product);
  }
  return products;
}

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
