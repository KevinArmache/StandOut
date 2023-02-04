import React from "react";
import { useState } from "react";
import ModuleEcomerceTableCartItems from "~/components/partials/ecomerce/modules/ModuleEcomerceTableCartItems";
import Link from "next/link";
import ModuleEcomerceSummary from "~/components/partials/ecomerce/modules/ModuleEcomerceSummary";
import { baseUrl } from "~/repositories/Repository";

const EcomerceShoppingCart = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [response, setResponse] = useState("");
  const [code, setCode] = useState(0);
  const [pourcentage, setPourcentage] = useState(0);

  const handleChange = async (event) => {
    // 👇 Get input value from "event"
    setValue(event.target.value);
    const response = await fetch(`${baseUrl}/discounts`);
    const json = await response.json();
    setData(json);
  };

  const handleClick = async (value) => {
    for (let i = 0; i < data.length; i++) {
      console.log(data);
      if (value === data[i].code) {
        setCode(data[i].pourcentage);
        setResponse(
          `Your promo code is valid 🎉 you have ${data[i].pourcentage}% discount`
        );
        return code;
      } else {
        setResponse(`Your promo code is not valid 😢`);
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

        <ModuleEcomerceSummary code={code} pourcentage={pourcentage} />
      </div>
    </div>
  );
};

export default EcomerceShoppingCart;
