import React from "react"
import { Scrollbars } from 'react-custom-scrollbars';

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoSaturn  from "../components/infosaturne";

const SaturnPage = () => (
    <div className="saturn">
    <div className="container">
    <Layout>
    <SEO title="Saturn Page" />
    <div className="wow fadeInLeft container-img" data-wow-delay=".25s" data-wow-duration="3s">
    <img src={'./saturn.png'} alt="Saturn" className="img-fluid img-saturn"/></div>
    <div id="content-info" className="wow zoomIn" data-wow-delay=".25s" data-wow-duration="3s">
    <Scrollbars style={{ width: 500, height: 500}}>
<InfoSaturn />
</Scrollbars>
</div>
</Layout>
</div>
</div>
)

export default SaturnPage

