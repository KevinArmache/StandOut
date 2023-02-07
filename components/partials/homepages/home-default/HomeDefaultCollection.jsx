import React from "react";
import Link from "next/link";

const HomeDefaultCollection = () => {
  return (
    // <div className="ps-home-collection-2">
    //   <figure>
    //     <div className="ps-block--collection-2 left">
    //       <div
    //         className="ps-block__thumbnail bg--top-right image-new-arrival"
    //         style={{
    //           backgroundImage:
    //             "url('/static/img/homepage/home-right-to-left/collection/1.jpg')",
    //         }}
    //       ></div>
    //       <div className="ps-block__content">
    //         <span className="color-yellow-black">Top Tendencies</span>
    //         <h4 className="color-white">New Arrival</h4>
    //         <Link href="/shop">
    //           <a href="#new-arrival" className="ps-link--under">
    //             Discover more
    //           </a>
    //         </Link>
    //       </div>
    //     </div>
    //   </figure>
    //   <figure>
    //     {/* <div className="ps-block--collection-2 center white"> */}
    //     <div className="ps-block--collection-2 right white">
    //       <div
    //         className="ps-block__thumbnail bg--cover  image-best-seller"
    //         style={{
    //           backgroundImage:
    //             "url('/static/img/homepage/home-right-to-left/collection/2.jpg')",
    //         }}
    //       ></div>
    //       <div className="ps-block__content">
    //         <span className="color-white-black">Top Picks</span>
    //         <h4 className="color-yellow">Best Sellers</h4>
    //         <Link href="/shop">
    //           <a href="#topsellers" className="ps-link--under">
    //             Discover more
    //           </a>
    //         </Link>
    //       </div>
    //     </div>
    //   </figure>
    //   <figure>
    //     <div className="ps-block--collection-2 left">
    //       <div
    //         className="ps-block__thumbnail bg--top-left image-trendy"
    //         style={{
    //           backgroundImage:
    //             "url('/static/img/homepage/home-right-to-left/collection/3.jpg')",
    //         }}
    //       />
    //       <div className="ps-block__content">
    //         <span className="color-yellow-black">Stay On Trends</span>
    //         <h4 className="color-white">Trendy</h4>
    //         <Link href="/shop">
    //           <a className="ps-link--under">Discover more</a>
    //         </Link>
    //       </div>
    //     </div>
    //   </figure>
    // </div>

    <div className="container-discovery">
      <div className="container-item">
        <div className="image-item">
          <img
            className="margin-right"
            src="/static/img/homepage/home-right-to-left/collection/1.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div className="text-item">
          <span className="color-yellow-black">Top Tendencies</span>
          <h4 className="color-white">New Arrival</h4>
          <Link href="/shop">
            <a href="#new-arrival" className="ps-link--under">
              Discover more
            </a>
          </Link>
        </div>
      </div>
      <div className="container-item  ">
        <div className="image-item">
          <img
            className="margin-left"
            src="/static/img/homepage/home-right-to-left/collection/2.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div className="text-item text-item-right">
          <span className="color-white-black">Top Picks</span>
          <h4 className="color-yellow">Best Sellers</h4>
          <Link href="/shop">
            <a href="#topsellers" className="ps-link--under">
              Discover more
            </a>
          </Link>
        </div>
      </div>
      <div className="container-item">
        <div className="image-item">
          <img
            className="margin-right"
            src="/static/img/homepage/home-right-to-left/collection/3.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div className="text-item">
          <span className="color-yellow-black">Stay On Trends</span>
          <h4 className="color-white">Trendy</h4>

          <Link href="/shop">
            <a className="ps-link--under">Discover more</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeDefaultCollection;
