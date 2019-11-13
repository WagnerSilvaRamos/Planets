import React from "react"
import { Scrollbars } from 'react-custom-scrollbars';

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoJupiter from "../components/infojupiter";

const JupiterPage = () => (
    <div className="jupiter">
    <div className="container">
    <Layout>
    <SEO title="Jupiter Page" />
    <div className="wow fadeInLeft container-img" data-wow-delay=".25s" data-wow-duration="3s">
    <img src={'./jupiter.png'} alt="Jupiter" className="img-fluid img-planet"/></div>
    <div id="content-info" className="wow zoomIn" data-wow-delay=".25s" data-wow-duration="3s">
    <Scrollbars style={{ width: 500, height: 500}}>
<InfoJupiter />
</Scrollbars>
</div>
</Layout>
</div>
</div>
)

export default JupiterPage
