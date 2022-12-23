import React from "react";

function Product({ product }) {
    return (
        <div className="single_product">
            <h1>{product.title}</h1>
            <p>{product.desc}</p>
            <h3>${product.price}</h3>
        </div>
    );
}

export default Product;