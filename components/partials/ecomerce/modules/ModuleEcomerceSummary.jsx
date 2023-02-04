import React, { useEffect, useState } from "react";
import { getCartItemsHelper } from "~/utilities/ecomerce-helpers";
import Link from "next/link";
import { connect } from "react-redux";

const ModuleEcomerceSummary = ({ cart, code }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  // const [promoprice, setPromoprice] = useState(0);
  const [shipping, setShipping] = useState("");
  // setCodepromo(code);

  async function getProductByCardItems(cart) {
    const shoppingCart = await getCartItemsHelper(cart);
    if (shoppingCart) {
      setCartItems(shoppingCart.items);
    }
  }

  useEffect(() => {
    getProductByCardItems(cart);
  }, [cart]);

  function cacultTotal(dataArray) {
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
  }
  cacultTotal(cartItems);

  function valuepromo(total, code) {
    if (code > 0) {
      let value = 0;
      value = total - total * (code / 100);
      // setPromoprice(value);

      return parseFloat(value).toFixed(2);
    } else {
      return 0;
    }
  }

  // console.log(valuepromo(total, code));

  const handleChange = (event) => {
    setShipping(event.target.value);
  };

  let shippingprice = {
    DHL: 100,
    KPM: 20,
    LOCAL: 0,
  };

  const price = (total, shipping, shippingprice) => {
    let promoprice = valuepromo(total, code);
    if (promoprice > 0 && promoprice !== 0) {
      if (shipping === "Local Delivery") {
        return parseInt(promoprice) + shippingprice.LOCAL;
      } else if (shipping === "KPM Logistics") {
        return parseInt(promoprice) + shippingprice.KPM;
      } else if (shipping === "DHL") {
        return parseInt(promoprice) + shippingprice.DHL;
      } else {
        return parseInt(promoprice);
      }
    } else if (promoprice === 0) {
      if (shipping === "Local Delivery") {
        return total + shippingprice.LOCAL;
      } else if (shipping === "KPM Logistics") {
        return total + shippingprice.KPM;
      } else if (shipping === "DHL") {
        return total + shippingprice.DHL;
      } else {
        return total;
      }
    }
  };
  let lastprice = price(total, shipping, shippingprice);
  let lastshipping = shipping;
  let lastcode = code;
  // let context = react.createContext("Valeur initial");
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
            {total === NaN || total === null || total === undefined ? (
              <span>$</span>
            ) : (
              <span>{total} $</span>
            )}
          </span>
        </h4>
        <h4 className="color-white">
          With coupon code <span className="color-yellow">{`-${code} %`}</span>
          <span className="color-yellow">
            {total === NaN ||
            total === null ||
            total === undefined ||
            valuepromo(total, code) === undefined ? (
              <span>0 $</span>
            ) : (
              // METTRE UNE FONCTION OU LE RESULTAT D'UN HOOKS ICI
              <span>
                {`${valuepromo(total, code)}`}${/* {`${total}`}$ */}
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
              value="Local Delivery"
              onChange={handleChange}
            />
            <label htmlFor="shipping-1">
              {`Kinshasa (Local)`} <span>+$00.00</span>
            </label>
          </div>
          <div className="ps-radio">
            <input
              className="form-control"
              type="radio"
              id="shipping-2"
              name="shipping"
              value="KPM Logistics"
              onChange={handleChange}
            />
            <label htmlFor="shipping-2">
              KPM Logistics <span>+$20.00</span>
            </label>
          </div>
          <div className="ps-radio">
            <input
              className="form-control"
              type="radio"
              id="shipping-3"
              name="shipping"
              value="DHL"
              // checked={selected === "true"}
              onChange={handleChange}
            />
            <label htmlFor="shipping-3">
              DHL <span>+$100.00</span>
            </label>
          </div>
        </div>
        {/* <div className="ps-block__caculate">
          <h5>Calculate Shipping</h5>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Postcode / ZIP"
            />
          </div>
          <button className="ps-btn ps-btn--gray">Update Total</button>
        </div> */}
        <div className="ps-block__total">
          <h3 className="color-yellow">
            Total
            <span>{`${price(total, shipping, shippingprice).toFixed(
              2
            )}$`}</span>
            {/* <Transfer price={price(total, shipping).toFixed(2)} /> */}
          </h3>
        </div>
      </div>
      <div className="ps-block__bottom">
        <Link
          href={{
            pathname: "/shop/checkout",
            query: {
              price: lastprice,
              shipping: lastshipping,
              code: lastcode,
            }, // the data
          }}
        >
          <a className="ps-btn ps-btn--black">Proceed to checkout</a>
        </Link>
      </div>
    </div>
  );
};

export default connect((state) => state.cart)(ModuleEcomerceSummary);
