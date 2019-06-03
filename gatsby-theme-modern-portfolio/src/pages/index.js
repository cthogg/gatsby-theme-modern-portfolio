import React from "react";
import SEO from "../components/seo";
import { IoLogoLinkedin, IoMdMail } from "react-icons/io";
import { graphql } from "gatsby";

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Overlock');
body { font-family: 'Overlock', cursive;
  background-color: #E5F1F6;
  word-wrap: break-word;
}

h1{
  font-size: 2.4em
}
a{
  color: black
}

a:hover{
  text-decoration: underline;
}
ul{
  padding-left: 20px
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, [col-start] 1fr);
}

.two > p {
  margin: 2px
}

.two > h1 {
  margin: 2px
}
.two { 
  grid-column: col-start 3 / span 6;
}

@media screen and (max-width: 500px) {
  .two { 
    grid-column: col-start 1 / span 12;
  }
}
`

const logoStyle = {
  width: "27px",
  height: "27px"
};
const IndexPage = ({ data }) => {
  const { markdownRemark } = data;
  const { html, frontmatter } = markdownRemark;
  const {title,subtitle, email, linkedin} = frontmatter
  return (

<React.Fragment>
  <GlobalStyle whiteColor />
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
