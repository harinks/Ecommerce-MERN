import React, { Fragment, useEffect } from 'react';
import { CgMouse } from "react-icons/all";
import './Home.css';
import MetaData from '../layouts/MetaData';
import { getProduct, clearErrors} from '../../actions/productAction';
import { useSelector, useDispatch } from "react-redux";
import Loader from '../layouts/Loader/Loader';
import ProductCard from './ProductCard';
import { useAlert } from "react-alert";

function Home() {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.products)

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [dispatch, error, alert]);

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
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
                                <ProductCard key={product._id} product={product} />
                            ))}
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Home