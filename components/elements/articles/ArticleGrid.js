import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { baseUrl } from "~/repositories/Repository";
import LazyLoad from "react-lazyload";
import moment from "moment";
import TweetEmbed from "react-tweet-embed";

const ArticleGrid = ({ post }) => {
  let partialThumbnail, partialCategories;
  if (post) {
    {
      console.log("article : ", post);
    }
    if (post.thumbnail !== null) {
      partialThumbnail = (
        <LazyLoad>
          <img src={`${baseUrl}${post.thumbnail.url}`} alt="img" />
        </LazyLoad>
      );
    }
    if (post.categories) {
      if (post.categories.length > 0) {
        partialCategories = post.categories.map((item) => (
          <Link
            href="/category/[slug]"
            as={`/categories/${item.slug}`}
            key={item.id}
          >
            <a>{item.name}</a>
          </Link>
        ));
      } else {
        partialCategories = (
          <Link href="/blog">
            <a>Others</a>
          </Link>
        );
      }
    }
    return (
      <article className="ps-post">
        <div className="ps-post__thumbnail">
          <Link href="/post/[slug]" as={`/post/${post.slug}`}>
            <a className="ps-post__overlay"></a>
          </Link>
          {partialThumbnail}
        </div>
        <div className="ps-post__content">
          <Link href="/post/[slug]" as={`/post/${post.slug}`}>
            <a className="ps-post__title">{post.title}</a>
          </Link>
          <p className="ps-post__meta">
            {partialCategories}
            {moment(post.created_at).format("ll")}
          </p>
        </div>
      </article>
    );
  }
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/blogs`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(posts);
  }, []);

  return (
    <article className="ps-post">
      <div className="ps-post__thumbnail">
        <Link href="/post/[slug]" as={`/post/${post.slug}`}>
          <a className="ps-post__overlay"></a>
        </Link>
        {partialThumbnail}
      </div>
      <div className="ps-post__content">
        <Link href="/post/[slug]" as={`/post/${post.slug}`}>
          <a className="ps-post__title">{post.title}</a>
        </Link>
        <p className="ps-post__meta">
          {partialCategories}
          {moment(post.created_at).format("ll")}
        </p>
      </div>
    </article>
  );
};

export default ArticleGrid;
