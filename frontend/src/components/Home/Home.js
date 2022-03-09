import React, { Fragment } from 'react';
import { CgMouse } from "react-icons/all";
import './Home.css';
import Product from './Product';

const product = {
    name: "Blue Shirt",
    ratings: "4",
    image: [{url:'https://img3.exportersindia.com/product_images/bc-full/2019/7/6447138/mens-shirts-1563255452-4999364.jpeg'}],
    price: "500",
    _id: "1234"
}

function Home() {
    return (
        <Fragment>

            <div className="banner">
                <h1>Welcome to Ecommerce</h1>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>

                <a href="#container">
                    <button>
                        Scroll <CgMouse />
                    </button>
                </a>
            </div>

            <h2 className="homeHeading">Featured Products</h2>
            <div className="container" id="container">
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
                <Product product={product} />
            </div>
        </Fragment>
    )
}

export default Home