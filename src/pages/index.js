import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <div className="index">
    <div className="container">
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>This site is a small project developed using Gatsby technology, for study purposes, it has information about our solar system,
    enjoy, browse and learn a little more about.
    thanks.</p>
     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, marginLeft: `40px` }} className="wow zoomIn"  data-wow-delay=".2s" data-wow-duration="3s">
      <Image />
    </div>
   </Layout>
</div>
</div>
)

export default IndexPage
