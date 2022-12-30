import React from 'react';
import { connect } from 'react-redux';

import Rating from '~/components/elements/Rating';
import SubModuleDetailSpecification from '~/components/elements/products/detail/modules/SubModuleDetailSpecification';
import SubModuleDetailShopping from '~/components/elements/products/detail/modules/SubModuleDetailShopping';

const ModuleDetailInformation = ({ product }) => {
    return (
        <div className="ps-product__info">
            <div className="ps-product__info-header">
                <div className="ps-product__rating">
                    <Rating />
                    <span>1 Review</span>
                </div>
                <h2 className="ps-product__title">{product.title}</h2>
                <span className="ps-product__sku">SKU: AB1609456789</span>
                <h4 className="ps-product__price">£{product.price}</h4>
            </div>
            <div className="ps-product__desc">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore.
                </p>
            </div>
            <SubModuleDetailShopping product={product} />
            <SubModuleDetailSpecification />
        </div>
    );
};

export default connect((state) => state.cart)(ModuleDetailInformation);
