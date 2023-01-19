import React from "react";

const WidgetFooterAbout = () => {
  return (
    <aside className="widget widget_footer widget_align-right">
      <h3 className="widget-title">About StandOut</h3>
      <ul className="ps-list--line">
        <li>
          <a href="/pages/about-us">About us</a>
        </li>
        <li>
          <a href="/pages/about-us#ps-about-quote">Founder</a>
        </li>
        <li>
          <a href="/pages/about-us#ps-about-intro">Corporate</a>
        </li>
        <li>
          <a href="/pages/about-us#ps-site-partners">Partner</a>
        </li>
      </ul>
    </aside>
  );
};

export default WidgetFooterAbout;
