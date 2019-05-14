import React from "react"
import SEO from "../components/seo"
import { FaLinkedin } from 'react-icons/fa'
import "../components/layout.css"

const LINKEDIN_URL = 'https://www.linkedin.com/in/christopher-hogg-081a41128/'

const IndexPage = () => (
  <div className='wrapper'>
    <SEO title="Home" keywords={[`web developer`]} />
    <div className='two'>
      <h1>I am Chris Hogg.</h1>
      <h1>Web Developer.</h1>
      <a href="mailto:chrishogg@protonmail.com">chrishogg@protonmail.com</a>
      <p> <a href={LINKEDIN_URL}> <FaLinkedin></FaLinkedin> </a> </p>
    </div>
  </div >
)

export default IndexPage
