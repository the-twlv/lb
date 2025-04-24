// src/pages/index.js
import * as React from "react"
import Seo from "../components/SEO"
import Home from "../components/Home"

export default function IndexPage() {
  return (
    <>
      <Seo
        title="Liya Blogs"
        description="Lifestyle Blogger & Media Creative"
        image="/liya-cover.jpg"
      />
      <Home />
    </>
  )
}
