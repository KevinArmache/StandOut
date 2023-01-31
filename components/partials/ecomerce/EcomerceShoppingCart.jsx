import React from "react";
import { useState, useEffect } from "react";
import ModuleEcomerceTableCartItems from "~/components/partials/ecomerce/modules/ModuleEcomerceTableCartItems";
import Link from "next/link";
import ModuleEcomerceSummary from "~/components/partials/ecomerce/modules/ModuleEcomerceSummary";
import { baseUrl } from "~/repositories/Repository";

const EcomerceShoppingCart = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    // 👇 Get input value from "event"
    setValue(event.target.value);
  };

  const handleClick = async (value) => {
    console.log(value);
    const response = await fetch(`${baseUrl}/discounts`);
    const json = await response.json();
    setData(json);
    console.log(data);
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
          </div>
        </div>
        <ModuleEcomerceSummary />
      </div>
    </div>
  );
};

export default EcomerceShoppingCart;
