import React from "react";
import { connect } from "react-redux";

import Rating from "~/components/elements/Rating";
import SubModuleDetailSpecification from "~/components/elements/products/detail/modules/SubModuleDetailSpecification";
import SubModuleDetailShopping from "~/components/elements/products/detail/modules/SubModuleDetailShopping";

const ModuleDetailInformation = ({ product }) => {
  function outofstock(product) {
    if (product.out_of_stock === true) {
      return (
        <div>
          <del className="line-out-of-stock">
            <h4 className="ps-product__price">{product.price}$</h4>
          </del>
          <span className="out-of-stock">Out of stock</span>
        </div>
      );
    } else {
      return (
        <div>
          <h4 className="ps-product__price">{product.price}$</h4>
        </div>
      );
    }
  }

  return (
    <div className="ps-product__info">
      {console.log(product)}
      <div className="ps-product__info-header">
        <div className="ps-product__rating">
          <Rating />
          <span>1 Review</span>
        </div>
        <h2 className="ps-product__title">{product.title}</h2>
        <span className="ps-product__sku">SKU: AB1609456789</span>
      </div>

      {outofstock(product)}

      <div className="ps-product__desc">
        <p>{product.short_description}</p>
      </div>
      <SubModuleDetailShopping product={product} />
      <SubModuleDetailSpecification />
    </div>
  );
};

export default connect((state) => state.cart)(ModuleDetailInformation);
