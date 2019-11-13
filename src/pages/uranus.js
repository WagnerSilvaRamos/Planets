import React from "react"
import { Scrollbars } from 'react-custom-scrollbars';

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoUranus   from "../components/InfoUranus";

const UranusPage = () => (
    <div className="uranus">
    <div className="container">
    <Layout>
    <SEO title="Uranus Page" />
    <div className="wow fadeInLeft container-img" data-wow-delay=".25s" data-wow-duration="3s">
    <img src={'./uranus.png'} alt="Uranus" className="img-fluid img-planet"/></div>
    <div id="content-info" className="wow zoomIn" data-wow-delay=".25s" data-wow-duration="3s">
    <Scrollbars style={{ width: 500, height: 500}}>
<InfoUranus />
</Scrollbars>
</div>
</Layout>
</div>
</div>
)

export default UranusPage


