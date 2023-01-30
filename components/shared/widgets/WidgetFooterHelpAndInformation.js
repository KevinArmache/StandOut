import React from "react";

const WidgetFooterHelpAndInformation = () => {
  return (
    <aside className="widget widget_footer widget_align-right">
      <h3 className="widget-title">Help & Information</h3>
      <ul className="ps-list--line">
        <li>
          <a href="mailto:standoutqueries@gmail.com">Email</a>
        </li>
        <li>
          <a href="tel:+243819503892">+243 819 503 892</a>
        </li>
        {/* <li>
          <a href="#">Premier Delivery</a>
        </li> */}
        <li>
          <a href="#">FAQs</a>
        </li>
      </ul>
    </aside>
  );
};

export default WidgetFooterHelpAndInformation;
