import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "./redux/cartActions";



const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 25000 },
    { id: 3, name: "Headphones", price: 3000 }
];

function ProductList() {
    const dispatch = useDispatch();
    const items = useSelector( state => state.items);

    return (
        <>
            <h2>Products</h2>

            {products.map(p => (
                <div key={p.id} style={{ marginBottom: 10 }}>
                    <strong>{p.name}</strong> - ₹{p.price}
                    <button
                        style={{ marginLeft: 10 }}
                        onClick={() => dispatch(addToCart(p))}
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </>
    )
}

export default ProductList