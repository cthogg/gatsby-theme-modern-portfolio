/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark {
          id
          frontmatter {
            textColor
            backgroundColor
            fontUrl
            fontFamily
          }
        }
      }
    `}
    render={data => {
      const {textColor, backgroundColor, fontUrl, fontFamily} = data.markdownRemark.frontmatter

      const GlobalStyle = createGlobalStyle`
@import url(${props => props.theme.fontUrl});
body { font-family:  ${props => props.theme.fontFamily};
  background-color: ${props => props.theme.backgroundColor};
  word-wrap: break-word;
  color: ${props => props.theme.textColor};
}

h1{
  font-size: 2.4em
}
a{
  color: ${props => props.theme.textColor}
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
`;
      return (
        <ThemeProvider
          theme={{ backgroundColor: backgroundColor, textColor: textColor, fontUrl: fontUrl, fontFamily: fontFamily }}
        >
          <>
            <GlobalStyle />
            <main>{children}</main>
          </>
        </ThemeProvider>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
