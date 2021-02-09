import React from 'react';
import Products from '../components/Products';
import { Helmet } from 'react-helmet'
import initialState from '../initialState';

const Home = () => {
  return (
    <>
    <Helmet>
    <title>Fashion Girls - Products</title>
        </Helmet>
    <Products products={initialState.products} />
    </>
  );
}

export default Home;
