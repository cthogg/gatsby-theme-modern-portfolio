import React from "react"
import SEO from "../components/seo"
import TestComp from '../components/TestComp'
import { IoLogoLinkedin, IoMdMail } from 'react-icons/io'
import { graphql } from "gatsby"


import "../components/layout.css"


const logoStyle = {
  width: '27px',
  height: '27px'

}
const LINKEDIN_URL = 'https://www.linkedin.com/in/christopher-hogg-081a41128/'
const EMAIL_ADDRESS = 'chrishogg@protonmail.com'
const IndexPage = ({ data }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark

  return (
    <div className='wrapper'>
      <SEO title="Home" keywords={[`web developer`]} />
      <div className='two'>
      <TestComp> </TestComp>
        <h1>I am Chris Hogg.</h1>
        <h1>Web Developer.</h1>
        <p><a style={{ textDecoration: 'none' }} href={`mailto:${EMAIL_ADDRESS}`}><IoMdMail style={logoStyle}></IoMdMail> </a>   <a href={LINKEDIN_URL}> <IoLogoLinkedin style={logoStyle}></IoLogoLinkedin> </a> </p>
        <br />
        <br />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div >
  )
}

export default IndexPage


export const pageQuery = graphql`
  query{
    markdownRemark {
      id
      html
      frontmatter{title,path,date
      
      }
    }
  }
`