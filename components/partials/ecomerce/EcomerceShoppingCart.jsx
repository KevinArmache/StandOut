import React from "react";
import { useState, useEffect } from "react";
import ModuleEcomerceTableCartItems from "~/components/partials/ecomerce/modules/ModuleEcomerceTableCartItems";
import Link from "next/link";
import ModuleEcomerceSummary from "~/components/partials/ecomerce/modules/ModuleEcomerceSummary";
import { baseUrl } from "~/repositories/Repository";
import { set } from "lodash";

const EcomerceShoppingCart = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [response, setResponse] = useState("");

  const handleChange = async (event) => {
    // 👇 Get input value from "event"
    setValue(event.target.value);
    const response = await fetch(`${baseUrl}/discounts`);
    const json = await response.json();
    setData(json);
  };

  const handleClick = async (value) => {
    for (let i = 0; i < data.length; i++) {
      if (value === data[i].code) {
        setResponse(`Votre code promo est valide 🎉`);
        break;
      } else {
        setResponse(`Votre code promo n'est pas valide 😢`);
      }
    }
  };
  return (
    <div className="ps-shopping-cart">
      <ModuleEcomerceTableCartItems />

      <div className="ps-section__content">
        <div className="ps-section__actions">
          <figure>
            <Link href="/shop">
              <a className="ps-btn ps-btn--outline">Continue shopping</a>
            </Link>
          </figure>
          <div className="form-group">
            <label>Discount Code</label>
            <div className="form-group__content">
              <input
                className="form-control"
                type="text"
                placeholder="Enter your code"
                onChange={handleChange}
              />
              <a onClick={() => handleClick(value)}>Apply</a>
            </div>
            <span className="color-yellow">{response}</span>
          </div>
        </div>
        <ModuleEcomerceSummary />
      </div>
    </div>
  );
};

export default EcomerceShoppingCart;
