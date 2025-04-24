import React from "react"
import { Helmet } from "react-helmet"

export const Seo = ({ title = "Liya Blogs" }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="Lifestyle Blogger & Media Creative" />
      <link rel="icon" href="/favicon.png" type="image/png" />
    </Helmet>
  )
}
