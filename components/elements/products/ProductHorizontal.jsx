import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Link from 'next/link';
import Rating from '~/components/elements/Rating';
import { addItem } from '~/store/cart/action';
import { addItemToWishlist } from '~/store/wishlist/action';

import {
    SPGetProductPrice,
    SPGetProductThumbailImages,
} from '~/utilities/product-helper';
import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';

const ProductHorizontal = ({ product }) => {
    // Views
    const priceView = SPGetProductPrice(product);
    const thumbnailImage = SPGetProductThumbailImages(product);

    return (
        <div className="ps-product ps-product--horizontal">
            <div className="ps-product__thumbnail">
                {thumbnailImage}
                <Link href={`/product/${product.id}`}>
                    <a className="ps-product__overlay"></a>
                </Link>
            </div>
            <div className="ps-product__content">
                <div className="ps-product__header">
                    <figure>
                        <Link href={`/product/${product.id}`}>
                            <a className="ps-product__title">{product.title}</a>
                        </Link>

                        <p className="ps-product__price">
                            <span>£</span> {product.price}
                        </p>
                    </figure>
                    <div className="ps-product__rating">
                        <Rating />
                    </div>
                </div>
                <div className="ps-product__desc">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore.
                    </p>
                </div>
                <ModuleProductActions product={product} />
            </div>
        </div>
    );
};

export default ProductHorizontal;
