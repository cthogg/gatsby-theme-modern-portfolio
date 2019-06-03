import React from "react";
import SEO from "../components/seo";
import { IoLogoLinkedin, IoMdMail } from "react-icons/io";
import { graphql } from "gatsby";
import  Image  from "../components/image";
import "../components/layout.css";

const logoStyle = {
  width: "27px",
  height: "27px"
};
const IndexPage = ({ data }) => {
  const { markdownRemark } = data;
  const { html, frontmatter } = markdownRemark;
  const {title,subtitle, email, linkedin} = frontmatter
  return (
    <div className="wrapper">
      <SEO title="Home" keywords={[`web developer`]} />
      <div className="two">
        <h1>{title}</h1>
        <h1>{subtitle}</h1>
        <p>
          <a
            style={{ textDecoration: "none" }}
            href={`mailto:${email}`}
          >
            <IoMdMail style={logoStyle} />{" "}
          </a>{" "}
          <a href={linkedin}>
            {" "}
            <IoLogoLinkedin style={logoStyle} />{" "}
          </a>{" "}
        </p>
        <br />
        <br />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    markdownRemark {
      id
      html
      frontmatter {
        title
        subtitle
        email
        linkedin
      }
    }
  }
`;
