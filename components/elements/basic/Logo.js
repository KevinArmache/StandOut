import React from "react";
import Link from "next/link";

const Logo = ({ url = "/", light }) => {
  if (light) {
    return (
      <Link href={url}>
        <a className="ps-logo">
          {/* <img src="/static/img/logo-white.png" alt="" /> */}
        </a>
      </Link>
    );
  } else {
    return (
      <Link href={url}>
        <a className="ps-logo">
          <img src="/static/img/logo.svg" alt="" />
          {/* <img src="/static/img/Attachment-1.jpeg" alt="" /> */}
        </a>
      </Link>
    );
  }
};

export default Logo;
