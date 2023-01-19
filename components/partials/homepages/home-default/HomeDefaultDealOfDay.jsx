import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { baseUrl } from "~/repositories/Repository";
import CountDown from "~/components/elements/CountDown";
const HomeDefaultDealOfDay = () => {
  const [data, setData] = useState();

  // Function to collect data
  const requestDefaultDealOfDay = async () => {
    const response = await fetch(`${baseUrl}/promotions/`).then((response) =>
      response.json()
    );

    setData(response);
  };

  useEffect(() => {
    requestDefaultDealOfDay();
  }, []);
  return (
    <div>
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="ps-deal-of-day bg--top-right"
            style={{
              backgroundImage: `url('${baseUrl}${item.items[0].image.url}')`,
            }}
          >
            <div className="ps-section__content">
              <p>Deal of the day</p>
              <h3>{item.name}</h3>
              <h5>
                <del>{`${item.PrixAvantPromotion}`}</del>
                &nbsp;{`${item.PrixApresPromotion}`}
              </h5>
              <div className="ps-section__badge">
                <span className="ps-badge ps-badge--sale">
                  Save <strong>{`${item.ReductionEnPourcentage}`}</strong>
                </span>
              </div>
              <div className="ps-section__countdown">
                <CountDown
                  timeTillDate={`${item.DateDeFinDePromotion}`}
                  timeFormat="DD MM YYYY, h:mm a"
                />
              </div>
              <div className="ps-section__footer">
                <a className="ps-link--under" href="#">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default HomeDefaultDealOfDay;
