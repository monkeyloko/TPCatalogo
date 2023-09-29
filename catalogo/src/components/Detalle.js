import React from 'react';
import { useParams } from 'react-router-dom'; // Asegúrate de crear un archivo DetalleProducto.css para los estilos
import products from './listaProducts';
import './Detalle.css'

const Detalle = () => {
    // Obtén el ID del producto de los parámetros de la URL
    const { id } = useParams();

    // Aquí puedes buscar el producto con el ID en tu lista de productos
    // Supongamos que tienes una función para buscar el producto por ID
    // y la lista de productos se llama 'products'
    const product = products.find((product) => product.id === parseInt(id));

    if (!product) {
        // Si no se encuentra el producto, puedes mostrar un mensaje de error o redirigir a una página de error
        return <div>No se encontró el producto.</div>;
    }

    return (
        <div className="detalle-producto">
            <h2>{product.name}</h2>
            <p>Categoría: {product.category}</p>
            <img src={product.image} alt={product.name} />
            {/* Agrega más detalles del producto aquí */}
        </div>
    );
};


export default Detalle;
