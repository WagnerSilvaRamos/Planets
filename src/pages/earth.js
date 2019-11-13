import React from "react"
import { Scrollbars } from 'react-custom-scrollbars';

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoEarth from "../components/infoearth";

const EarthPage = () => (
    <div className="earth">
    <div className="container">
    <Layout>
    <SEO title="Earth Page" />
    <div className="wow fadeInLeft container-img" data-wow-delay=".25s" data-wow-duration="3s">
    <img src={'./earth.png'} alt="Earth" className="img-fluid img-planet"/></div>
    <div id="content-info" className="wow zoomIn" data-wow-delay=".25s" data-wow-duration="3s">
    <Scrollbars style={{ width: 500, height: 500}}>
<InfoEarth />
</Scrollbars>
</div>
</Layout>
</div>
</div>
)

export default EarthPage

