import React, { useEffect, useState } from "react";
import { getCartItemsHelper } from "~/utilities/ecomerce-helpers";
import { connect } from "react-redux";
import { baseUrl } from "~/repositories/Repository";
import Link from "next/link";

const ModuleCheckoutSummary = ({
  cart,
  firstName,
  lastName,
  company,
  country,
  address,
  zip,
  city,
  email,
  telephone,
  note,
  data,
}) => {
  const [payment, setPayment] = useState("");

  const ButtonCheckOut = () => {
    if (
      telephone === "" ||
      firstName === "" ||
      lastName === "" ||
      country === "" ||
      address === "" ||
      city === "" ||
      email === "" ||
      payment === "" ||
      data.shipping === ""
    ) {
      //   console.log("vide");
      return (
        <span className="ps-btn ps-btn--fullwidth ps-btn--black">
          you still have fields to fill in
        </span>
      );
    } else {
      if (payment === "Paypal") {
        // <Link href="/shop/checkout-success">

        // <a
        //   className="ps-btn ps-btn--fullwidth ps-btn--black"
        //   href={`https://api.maxicashapp.com/PayEntry?data={PayType: "MaxiCash",Amount: ${convertCentime},Currency: "maxiDollar",Telephone: ${telephone},MerchantID: "92c52d36dcb548b697adf342902049b6",MerchantPassword: "689ef565a804482fb64155271fcda878",Language:"fr",Reference: "01",Accepturl: "https://facebook.com",Declineurl: "https://facebook.com",Cancelurl: "https://twitter.com",NotifyURL: "https://netlify.com"}`}
        // >
        //   Process to checkout
        // </a>
        // </Link>
        return <p>Paypal</p>;
      } else {
        // <Link href="/shop/checkout-success">

        // <a
        //   className="ps-btn ps-btn--fullwidth ps-btn--black"
        //   href={`https://api.maxicashapp.com/PayEntry?data={PayType: "MaxiCash",Amount: ${convertCentime},Currency: "maxiDollar",Telephone: ${telephone},MerchantID: "92c52d36dcb548b697adf342902049b6",MerchantPassword: "689ef565a804482fb64155271fcda878",Language:"fr",Reference: "01",Accepturl: "https://facebook.com",Declineurl: "https://facebook.com",Cancelurl: "https://twitter.com",NotifyURL: "https://netlify.com"}`}
        // >
        //   Process to checkout
        // </a>
        // </Link>
        return <p>Visa</p>;
      }
    }
  };
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

  let cartItemsViews;
  if (cartItems) {
    cartItemsViews = cartItems.map((item) => (
      <Link key={item.id} href={`/product/${item.id}`}>
        <a>
          {/* {console.log(item)} */}
          <strong>
            {item.title}
            <span>x{item.quantity}</span>
          </strong>
          <small>{item.price}$</small>
        </a>
      </Link>
    ));
  }
  {
    console.log(data);
  }
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
      sum = Math.round(sum * 100) / 100;
      setTotal(sum);
    }, [dataArray]);
    return total;
  }
  let convertCentime = total(cartItems) * 100;

  function checkshipping(data) {
    if (data.shipping === "DHL") {
      return (
        <span className="color-yellow">
          <strong>{data.shipping} +100$ </strong>
        </span>
      );
    } else if (data.shipping === "KPM Logistics") {
      <span className="color-yellow">
        <strong> {data.shipping} +20$ </strong>
      </span>;
    } else if (data.shipping === "Local Delivery") {
      <span className="color-yellow">
        <strong> {data.shipping} +0$ </strong>
      </span>;
    }
  }
  function checkcodepromo(data) {
    if (data.code > 0) {
      return (
        <figcaption>
          With coupon code<span> - {data.code}%</span>
        </figcaption>
      );
    } else {
      <figcaption>
        With coupon code<span> - 0%</span>
      </figcaption>;
    }
  }

  const handleChange = (event) => {
    setPayment(event.target.value);

    if (payment === "Paypal") {
      return <p>Paypal</p>;
    } else {
      return <p>Visa</p>;
    }
  };
  return (
    <div className="ps-block--checkout-order">
      <div className="ps-block__content">
        <figure>
          <figcaption>
            <strong>Product</strong>
            <strong>total</strong>
          </figcaption>
        </figure>
        <figure className="ps-block__items">{cartItemsViews}</figure>
        <figure>
          <figcaption>
            <strong>Subtotal</strong>
            <small>{total(cartItems)}$</small>
          </figcaption>
        </figure>
        <figure className="ps-block__shipping">
          <h3>Shipping</h3>
          {checkshipping(data)}
          <p>Enter your address to view shipping options.</p>
        </figure>
        <figure className="ps-block__total">
          {checkcodepromo(data)}
          <figcaption>
            Total<span>{data.price}$</span>
          </figcaption>
        </figure>
        <figure className="ps-block__payment-methods">
          <div className="ps-radio">
            <input
              className="form-control"
              type="radio"
              id="payment-method-1"
              name="payment-method"
              value="Visa"
              onChange={handleChange}
            />
            <label htmlFor="payment-method-1">Visa</label>
          </div>
          <div className="ps-radio">
            <input
              className="form-control"
              type="radio"
              id="payment-method-2"
              name="payment-method"
              value="Paypal"
              onChange={handleChange}
            />
            <label htmlFor="payment-method-2">Paypal</label>
          </div>
          <p>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our
            <a href="#"> privacy policy.</a>
          </p>
        </figure>
      </div>
      <div className="ps-block__footer">
        {/* <a
            className="ps-btn ps-btn--fullwidth ps-btn--black"
            href={`https://api-testbed.maxicashapp.com/PayEntry?data={PayType: "MaxiCash", Amount: "1000", Currency: "MaxiDollar", Telephone: ${telephone}, MerchantID: "92c52d36dcb548b697adf342902049b6", MerchantPassword: "689ef565a804482fb64155271fcda878", Language:"fr", Reference: "01", Accepturl: "https://instagram.com", Declineurl: "https://facebook.com", Cancelurl: "https://twitter.com", notification: "https://netlify.com"}`}
          >
            Process to checkout
          </a> */}
        {/* {handleChange()} */}
        {ButtonCheckOut()}

        {/*<button className="ps-btn ps-btn--fullwidth ps-btn--black">
                    Process to checkout
                </button>*/}
      </div>
    </div>
  );
};
// <Link href="/shop/checkout-success">

// <a
//   className="ps-btn ps-btn--fullwidth ps-btn--black"
//   href={`https://api.maxicashapp.com/PayEntry?data={PayType: "MaxiCash",Amount: ${convertCentime},Currency: "maxiDollar",Telephone: ${telephone},MerchantID: "92c52d36dcb548b697adf342902049b6",MerchantPassword: "689ef565a804482fb64155271fcda878",Language:"fr",Reference: "01",Accepturl: "https://facebook.com",Declineurl: "https://facebook.com",Cancelurl: "https://twitter.com",NotifyURL: "https://netlify.com"}`}
// >
//   Process to checkout
// </a>
// </Link>
export default connect((state) => state.cart)(ModuleCheckoutSummary);
