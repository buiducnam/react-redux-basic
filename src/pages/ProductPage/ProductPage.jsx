import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductList from 'components/Product/ProductList/ProductList';
import ProductItem from 'components/Product/ProductItem/ProductItem';
import './ProductPage.scss';

function ProductPage() {
    const [products, setProducts] = useState([
        { id: 1, title: "Iphone X", price: 2000, status: true },
        { id: 2, title: "Sam sung", price: 100, status: false },
        { id: 3, title: "Nokia", price: 500, status: true }
    ]);
    return (
        <div className="product__page">
            <Link to="/product/add">Thêm sản phẩm</Link>

            <ProductList>
                {
                    products.map((product) => {
                        return (
                            <ProductItem key={product.id} product={product} />
                        )
                    })
                }
            </ProductList>
        </div>
    );
}

export default ProductPage;