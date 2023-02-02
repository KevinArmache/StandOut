import React, { useEffect, useState } from "react";
import { getCartItemsHelper } from "~/utilities/ecomerce-helpers";
import Link from "next/link";
import { connect } from "react-redux";

const ModuleEcomerceSummary = ({ cart, code }) => {
  const [amount, setAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  async function getProductByCardItems(cart) {
    const shoppingCart = await getCartItemsHelper(cart);
    if (shoppingCart) {
      setCartItems(shoppingCart.items);
    }
  }

  useEffect(() => {
    getProductByCardItems(cart);
  }, [cart]);

  function total(dataArray) {
    const [total, setTotal] = useState(0);
    useEffect(() => {
      let empty = [];
      let sum;
      dataArray.map((item) => {
        let calcul = item.price * item.quantity;
        empty.push(calcul);
        sum = empty.reduce(function (a, b) {
          return a + b;
        });
      });
      console.log(sum);

      sum = Math.round(sum * 100) / 100;
      setTotal(sum);
    }, [dataArray]);
    return total;
  }

  // console.log();

  let cartItemsViews;
  if (cartItems) {
    cartItemsViews = cartItems.map((item) => (
      <Link href="/">
        <a>
          <strong>
            {item.title}
            <span>x{item.quantity}</span>
          </strong>
          <small>{item.price}$</small>
        </a>
      </Link>
    ));
  }
  return (
    <div className="ps-block--checkout-total">
      <div className="ps-block__top">
        <h4 className="color-white">
          Subtotal
          <span className="color-yellow">
            {total(cartItems) === NaN ||
            total(cartItems) === null ||
            total(cartItems) === undefined ? (
              <span>0 $</span>
            ) : (
              <span>{total(cartItems)} $</span>
            )}
          </span>
        </h4>
        <h4 className="color-white">
          With coupon code
          {/* {parseFloat(
                  item.PrixAvantPromotion -
                    item.PrixAvantPromotion *
                      (item.ReductionEnPourcentage / 100)
                ).toFixed(2)}
                $ */}
          <span className="color-yellow">
            {total(cartItems) === NaN ||
            total(cartItems) === null ||
            total(cartItems) === undefined ? (
              <span>0 $</span>
            ) : (
              <span>
                {total(cartItems) - total(cartItems) * (code / 100)} $
              </span>
            )}
          </span>
        </h4>
        <div className="ps-block__shipping">
          <h5>Shipping</h5>
          <div className="ps-radio">
            <input
              className="form-control"
              type="radio"
              id="shipping-1"
              name="shipping"
            />
            <label htmlFor="shipping-1">
              Free Shipping <span>+$00.00</span>
            </label>
          </div>
          <div className="ps-radio">
            <input
              className="form-control"
              type="radio"
              id="shipping-2"
              name="shipping"
            />
            <label htmlFor="shipping-2">
              Flat Rate <span>+$10.00</span>
            </label>
          </div>
          <div className="ps-radio">
            <input
              className="form-control"
              type="radio"
              id="shipping-3"
              name="shipping"
            />
            <label htmlFor="shipping-3">
              Local Delivery <span>+$20.00</span>
            </label>
          </div>
        </div>
        <div className="ps-block__caculate">
          <h5>Calculate Shipping</h5>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Postcode / ZIP"
            />
          </div>
          <button className="ps-btn ps-btn--gray">Update Total</button>
        </div>
        <div className="ps-block__total">
          <h3>
            Total<span>$199.70</span>
          </h3>
        </div>
      </div>
      <div className="ps-block__bottom">
        <Link href="/shop/checkout" total>
          <a className="ps-btn ps-btn--black">Proceed to checkout</a>
        </Link>
      </div>
    </div>
  );
};

export default connect((state) => state.cart)(ModuleEcomerceSummary);
