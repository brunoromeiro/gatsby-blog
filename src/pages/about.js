import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import About from '../components/About'

const AboutPage = () => {
  return (
      <Layout>
          <SEO title="Sobre" />
          <About />
      </Layout>
  )
}

export default AboutPage
