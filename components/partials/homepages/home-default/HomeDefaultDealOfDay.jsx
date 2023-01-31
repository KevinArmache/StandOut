import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { baseUrl } from "~/repositories/Repository";
import CountDown from "~/components/elements/CountDown";
const HomeDefaultDealOfDay = () => {
  const [data, setData] = useState();

  // Function to collect data
  const requestDefaultDealOfDay = async () => {
    const response = await fetch(`${baseUrl}/promotions`).then((response) =>
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
            className="ps-deal-of-day bg--top-right image-deal-of-the-day"
            // 1041x500 size image Large
            //
            style={{
              backgroundImage: `url('${baseUrl}${item.items[0].image.url}')`,
            }}
          >
            <div className="ps-section__content">
              <p>
                <strong>Deal of the day</strong>
              </p>
              <h3 className="color-yellow">{item.name}</h3>
              <h5>
                <del>{item.PrixAvantPromotion} $</del>
                &nbsp;
                {parseFloat(
                  item.PrixAvantPromotion -
                    item.PrixAvantPromotion *
                      (item.ReductionEnPourcentage / 100)
                ).toFixed(2)}
                $
              </h5>
              <div className="ps-section__badge">
                <span className="ps-badge ps-badge--sale">
                  Save <strong>{item.ReductionEnPourcentage} %</strong>
                </span>
              </div>
              <div className="ps-section__countdown">
                <CountDown
                  timeTillDate={`${item.DateFinPromotion}`}
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
