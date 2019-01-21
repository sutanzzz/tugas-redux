import React from 'react'

import ProductListing from '../../features/product-listing'

import data from '../../data/product.json'

export default function HomePage (props) {
    return  <div className=''>
        <h2>Become a Host </h2>
        <ProductListing products={data.products} />
        </div>

}