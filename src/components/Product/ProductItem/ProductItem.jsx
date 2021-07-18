import React from 'react';
import PropTypes from 'prop-types';

ProductItem.propTypes = {
    product: PropTypes.object,
};

ProductItem.defaultProps = {
    product: {},
};

function ProductItem(props) {
    const { product } = props;
    const isStatus = product.status ? "Còn hàng" : "Hết hàng";
    const styleColor = product.status ? "green" : "red";
    // console.log(product);
    return (
        <tr className="product__item">
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>
                <span style={{ backgroundColor: styleColor, padding: "0 7px", color: "white" }}>{isStatus}</span>
            </td>
            <td>
                <button>Sửa</button>
                <button>Xóa</button>
            </td>
        </tr>
    );
}

export default ProductItem;