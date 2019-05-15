import React from "react"
import SEO from "../components/seo"
import { IoLogoLinkedin, IoMdMail } from 'react-icons/io'

import "../components/layout.css"

const LINKEDIN_URL = 'https://www.linkedin.com/in/christopher-hogg-081a41128/'
const EMAIL_ADDRESS = 'chrishogg@protonmail.com'
const IndexPage = () => (
  <div className='wrapper'>
    <SEO title="Home" keywords={[`web developer`]} />
    <div className='two'>
      <h1>I am Chris Hogg.</h1>
      <h1>Web Developer.</h1>
      <p> <a href={`mailto:${EMAIL_ADDRESS}`}> <IoMdMail></IoMdMail> </a>   <a href={LINKEDIN_URL}> <IoLogoLinkedin></IoLogoLinkedin> </a> </p>
    </div>
  </div >
)

export default IndexPage
