import React, { useEffect, useState } from "react";
import Logo from "~/components/elements/basic/Logo";
import { toggleDrawer } from "~/store/app/action";
import { useDispatch } from "react-redux";
import { stickyHeaderModile } from "~/utilities/common-helpers";
import ModuleHeaderActions from "~/components/shared/headers/modules/ModuleHeaderActions";
import Router from "next/router";

const HeaderMobile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (process.browser) {
      window.addEventListener("scroll", stickyHeaderModile);
    }
  }, []);

  // Kevin Code Start
  const [keyword, setKeyword] = useState(null);

  function handleSetKeyword(e) {
    e.preventDefault();
    if (e.target.value !== "") {
      setKeyword(e.target.value);
    } else {
      setKeyword(e.target.value);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (keyword !== "") {
      Router.push(`/search?keyword=${keyword}`);
    }
  }
  // Kevin Code End
  return (
    <header
      className="header header--mobile"
      data-sticky="true"
      id="header-sticky-mobile"
    >
      <div className="header__left">
        <Logo />
      </div>

      <div className="header__right">
        <div className="header__container">
          {/* <a className="header__search-mini" href="#">
            <i className="icon-magnifier"></i>
          </a> */}
          <form
            className="ps-form--header-search visible-mobile-search-bar"
            onSubmit={(e) => handleSubmit(e)}
            method="post"
          >
            <input
              className="form-control"
              type="text"
              placeholder="Search Searching..."
              onChange={(e) => handleSetKeyword(e)}
            />
            <button onClick={(e) => handleSubmit(e)}>
              <i className="icon-magnifier"></i>
            </button>
          </form>
        </div>
        <ModuleHeaderActions />
      </div>
    </header>
  );
};

export default HeaderMobile;
