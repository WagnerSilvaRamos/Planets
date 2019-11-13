import React from "react"
import { Scrollbars } from 'react-custom-scrollbars';

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoNeptune   from "../components/infoneptune";

const NeptunePage = () => (
    <div className="neptune">
    <div className="container">
    <Layout>
    <SEO title="Neptune Page" />
    <div className="wow fadeInLeft container-img" data-wow-delay=".25s" data-wow-duration="3s">
    <img src={'./neptune.png'} alt="Neptune" className="img-fluid img-planet"/></div>
    <div id="content-info" className="wow zoomIn" data-wow-delay=".25s" data-wow-duration="3s">
    <Scrollbars style={{ width: 500, height: 500}}>
<InfoNeptune />
</Scrollbars>
</div>
</Layout>
</div>
</div>
)

export default NeptunePage

