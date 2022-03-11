import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from "@material-ui/lab"

function Product({product}) {
    const options = {
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
    };
    return (
        <Link className="productCard" to={product._id}>
            <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                <Rating {...options} />
                <span>({product.numOfReviews})</span>
            </div>
            <span>{`₹${product.price}`}</span>
        </Link>
    )
}

export default Product