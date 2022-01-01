import React from "react";
import Blog from "../../components/Blog/Blog";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const getRandomColor = () => {
  const color = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];
  return color[Math.floor(Math.random() * color.length)];
};

const blog = [
  {
    id: 1,
    heading: "Top 5 fresh little-known films to watch out for",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan efficitur.",
    author: "John Doe",
    timestamp: "1640520740",
  },
  {
    id: 2,
    heading: "Top 5 fresh little-known films to watch out for",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan efficitur.",
    author: "John Doe",
    timestamp: "1640520740",
  },
  {
    id: 3,
    heading: "Top 5 fresh little-known films to watch out for",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan efficitur.",
    author: "John Doe",
    timestamp: "1640520740",
  },
  {
    id: 4,
    heading: "Top 5 fresh little-known films to watch out for",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan efficitur.",
    author: "John Doe",
    timestamp: "1640520740",
  },
  {
    id: 5,
    heading: "Top 5 fresh little-known films to watch out for",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan efficitur.",
    author: "John Doe",
    timestamp: "1640520740",
  },
  {
    id: 6,
    heading: "Top 5 fresh little-known films to watch out for",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan efficitur.",
    author: "John Doe",
    timestamp: "1640520740",
  },
];

const BlogSection = () => {
  const BlogContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    margin-left: 2rem;
  `;
  
  return (
    <>
     <SectionTitle heading="Blogs" subHeading="Financial literacy is important"/>
      <BlogContainer>
        {blog.map((item) => (
          <Blog
            key={item.id}
            heading={item.heading}
            text={item.text}
            author={item.author}
            timestamp={item.timestamp}
            color={getRandomColor()}
          />
        ))}
      </BlogContainer>
    </>
  );
};

export default BlogSection;
