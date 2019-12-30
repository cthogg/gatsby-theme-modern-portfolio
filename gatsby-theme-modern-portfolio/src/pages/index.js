import React from "react";
import SEO from "../components/seo";
import { IoLogoLinkedin, IoMdMail, IoLogoGithub } from "react-icons/io";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const logoStyle = {
  width: "27px",
  height: "27px",
  textDecoration: "none"
};
const IndexPage = ({ data }) => {
  const { markdownRemark } = data;
  const { html, frontmatter } = markdownRemark;
  const {title,subtitle, email, linkedin, github} = frontmatter
  return (

<React.Fragment>
  <Layout> 
    <div className="wrapper">
      <SEO title="Home" keywords={[`web developer`]} />
      <div className="two">
        <h1>{title}</h1>
        <h1>{subtitle}</h1>
        <p>
          <a
            style={logoStyle}
            href={`mailto:${email}`}
          >
            <IoMdMail style={logoStyle} />
          </a>{" "}
          <a href={linkedin}>
            <IoLogoLinkedin style={logoStyle} />
          </a>{" "}
          <a href={github}>
            <IoLogoGithub style={logoStyle} />
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
    </Layout>
    </React.Fragment>
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
