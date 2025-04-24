// src/components/SEO.js
import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" href="/favicon.png" type="image/png" />
    </Helmet>
  )
}

export default Seo
