import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const getTimstampDiff = (timestamp) => {
  const date = new Date();
  const currentTimestamp = date.getTime();
  const diff = currentTimestamp - timestamp*1000;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor(diff / (1000 * 60));
  const seconds = Math.floor(diff / 1000);

  if (days > 0) {
    return `${days} days ago`;
  } else if (hours > 0) {
    return `${hours} hours ago`;
  } else if (minutes > 0) {
    return `${minutes} minutes ago`;
  } else {
    return `${seconds} seconds ago`;
  }
};

const Blog = ({ heading, text, author, timestamp, color }) => {
  const CardContainer = styled.div`
    height: 12rem;
    width: 28rem;
    background-color: ${color};
    border-radius: 10px;
    margin: 10px;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  `;

  const Heading = styled.h3`
    font-weight: 700;
    color: #0f0f0f;
  `;

  const Description = styled.p`
    font-weight: 300;
  `;

  const BlogFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  `;

  const BlogAuthor = styled.p`
    font-weight: 700;
  `;

  const BlogTimestamp = styled.p`
    font-weight: 300;
  `;
  const Wrapper = styled.div`
    margin: 1rem;
  `;
  return (
    <>

      <CardContainer>
        <Wrapper>
          <Heading>{heading}</Heading>
          <Description>{text}</Description>
          <BlogFooter>
            <BlogAuthor>{author}</BlogAuthor>
            <BlogTimestamp>{getTimstampDiff(timestamp)}</BlogTimestamp>
          </BlogFooter>
        </Wrapper>
      </CardContainer>
    </>
  );
};

Blog.prototype = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  logo: PropTypes.any.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default Blog;
