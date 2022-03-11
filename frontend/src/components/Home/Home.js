import React, { Fragment, useEffect } from 'react';
import { CgMouse } from "react-icons/all";
import './Home.css';
import Product from './Product';
import MetaData from '../layouts/MetaData';
import { getProduct, } from '../../actions/productAction';
import { useSelector, useDispatch } from "react-redux";

function Home() {

    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch]);

    return (
        <Fragment>
            <MetaData title="ECOMMERCE" />
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
                {products &&
                    products.map((product) => (
                        <Product key={product._id} product={product} />
                    ))}
            </div>
        </Fragment>
    )
}

export default Home