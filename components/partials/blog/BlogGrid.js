import React, { useEffect, useState } from "react";
import PostRepository from "~/repositories/PostRepository";
import ArticleGrid from "~/components/elements/articles/ArticleGrid";
import SuproPagination from "~/components/elements/basic/SuproPagination";
import TweetEmbed from "react-tweet-embed";
import { baseUrlProduct } from "~/repositories/Repository";
import { InstagramEmbed } from "react-social-media-embed";

const BlogGrid = ({ collectionSlug, column }) => {
  // const [loading, setLoading] = useState(true);
  // const [posts, setPosts] = useState(null);
  // const [blogs, setBlogs] = useState();

  // const response = fetch(`${baseUrlProduct}/blogs`).then((response) =>
  //   response.json()
  // );

  // // update the state
  // setBlogs(response);
  // console.log(blogs);

  // async function getPosts() {
  //   let queries, APIPosts;
  //   if (collectionSlug !== undefined) {
  //     queries = {
  //       slug_eq: collectionSlug,
  //     };
  //     APIPosts = await PostRepository.SPGetPostItemOfCollectionBySlug(queries);
  //   } else {
  //     queries = {
  //       _limit: 6,
  //     };
  //     APIPosts = await PostRepository.getPosts(queries);
  //   }

  //   if (APIPosts) {
  //     setTimeout(function () {
  //       setLoading(false);
  //     }, 200);
  //     setPosts(APIPosts);
  //     return APIPosts;
  //   } else {
  //     setPosts(null);
  //     return null;
  //   }
  // }

  // useEffect(() => {
  //   getPosts();
  // }, []);
  // let viewPostItems;
  // if (!loading) {
  //   viewPostItems = blogs.map((item) => {
  //     if (column === "3") {
  //       return (
  //         <div className=" col-md-4 col-sm-6" key={item.id}>
  //           {/* <ArticleGrid post={item} /> */}
  //           <blogModify />

  //         </div>
  //       );
  //     } else if (column === "4") {
  //       return (
  //         <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
  //           {/* <ArticleGrid post={item} /> */}
  //           <blogModify />
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <div className="col-md-6" key={item.id}>
  //           {/* <ArticleGrid post={item} /> */}
  //           <blogModify />
  //         </div>
  //       );
  //     }
  //   });
  // }

  return (
    <div className="ps-blog ps-blog--grid">
      <div className="container">
        <div className="ps-blog__header">
          {/* <ul className="ps-blog__categories">
                        <li className="active">
                            <a href="#">All Categories</a>
                        </li>
                        <li>
                            <a href="#">Fashion</a>
                        </li>
                        <li>
                            <a href="#">DIY</a>
                        </li>
                        <li>
                            <a href="#">Women</a>
                        </li>
                        <li>
                            <a href="#">Beauty</a>
                        </li>
                        <li>
                            <a href="#">Lifestyle</a>
                        </li>
                    </ul> */}
        </div>
        <div className="ps-blog__content">
          <div className="ps-post-items">
            <div className="rowModify">
              {/* {viewPostItems} */}
              <TweetEmbed
                tweetId="1584480219725201408"
                options={{ cards: "hidden" }}
              />
              <TweetEmbed
                tweetId="1586889325320572928"
                options={{ theme: "dark" }}
              />
              <TweetEmbed
                tweetId="1389272778382188544"
                options={{ theme: "dark" }}
              />
              <TweetEmbed
                tweetId="1389272815312965642"
                options={{ theme: "dark" }}
              />
              <TweetEmbed
                tweetId="1389160892030402560"
                options={{ theme: "dark" }}
              />
              <TweetEmbed
                tweetId="1130416134640099328"
                options={{ theme: "dark" }}
              />
              {/* INSTAGRAM IFRAME */}
              <div>
                <InstagramEmbed url="https://www.instagram.com/p/BuGx1xKBL_y/" />
              </div>
              <div>
                <InstagramEmbed url="https://www.instagram.com/p/CkqWCbesUCm/" />
              </div>{" "}
              <div>
                <InstagramEmbed url="https://www.instagram.com/p/COa32aIn0md/" />
              </div>{" "}
              <div>
                <InstagramEmbed url="https://www.instagram.com/p/COVKzmHn6_Q/" />
              </div>
            </div>
          </div>
        </div>
        <div className="ps-blog__footer">{/* <SuproPagination /> */}</div>
      </div>
    </div>
  );
};

export default BlogGrid;
