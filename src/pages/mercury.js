import React from "react"
import { Scrollbars } from 'react-custom-scrollbars';

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoMercury   from "../components/infomercury";

const MercuryPage = () => (
    <div className="mercury">
    <div className="container">
    <Layout>
    <SEO title="Mercury Page" />
    <div className="wow fadeInLeft container-img" data-wow-delay=".25s" data-wow-duration="3s">
    <img src={'./mercury.png'} alt="Mercury" className="img-fluid img-planet"/></div>
    <div id="content-info" className="wow zoomIn" data-wow-delay=".25s" data-wow-duration="3s">
    <Scrollbars style={{ width: 500, height: 500}}>
<InfoMercury />
</Scrollbars>
</div>
</Layout>
</div>
</div>
)

export default MercuryPage


