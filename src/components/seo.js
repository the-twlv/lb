import * as React from "react"
import { Helmet } from "react-helmet"

export default function SEO({
  title = "Liya Blogs",
  description = "Lifestyle Blogger & Media Creative",
  lang = "en",
  meta = [],
}) {
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    >
      <link rel="icon" href="/favicon.png" />
    </Helmet>
  )
}
