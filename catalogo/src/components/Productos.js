import React, { useState } from 'react';
// Asegúrate de crear un archivo Productos.css para los estilos
import Product from './Product'; // Importa el componente Product
import products from './listaProducts'; // Importa la lista de productos
import { Link } from 'react-router-dom';


const Productos = () => {
    const [search, setSearch] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');

    // Filtrar productos por nombre y categoría
    const filteredProducts = products.filter((product) => {
        return (
            product.name.toLowerCase().includes(search.toLowerCase()) &&
            (categoryFilter === '' || product.category === categoryFilter)
        );
    });

    return (
        <div className="productos">
            {/* Barra de búsqueda y filtro */}
            <div className="search-filter">
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                >
                    <option value="">Filtrar por categoría</option>
                    <option value="Categoría 1">Categoría 1</option>
                    <option value="Categoría 2">Categoría 2</option>
                    {/* Agrega más categorías según sea necesario */}
                </select>
            </div>

            {/* Lista de productos */}
            <div className="product-grid">
                {filteredProducts.map((product) => (
                    <Link to={`/detalle/${product.id}`} key={product.id}>
                        <Product
                            id={product.id}
                            name={product.name}
                            category={product.category}
                            image={product.image}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Productos;
