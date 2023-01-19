import React from "react";

const WidgetFooterOnlineShop = () => {
  return (
    <aside className="widget widget_footer widget_align-right">
      <h3 className="widget-title">Online Shop</h3>
      <ul className="ps-list--line">
        <li>
          <a href="/search?keyword=Shoes">Shoes</a>
        </li>
        <li>
          <a href="/search?keyword=bags">Bags</a>
        </li>
        <li>
          <a href="/search?keyword=wallets">Wallets</a>
        </li>
        <li>
          <a href="/search?keyword=bels">Belts</a>
        </li>
      </ul>
    </aside>
  );
};

export default WidgetFooterOnlineShop;
