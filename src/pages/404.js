import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"


const NotFoundPage = () => (
  <div className="not-found">
    <div className="container">
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Please, Return to Home or navigate for links Above</p>
<button type="button" className="btn btn-primary">Back Home</button>
  </Layout>
  </div>
  </div>
)

export default NotFoundPage
