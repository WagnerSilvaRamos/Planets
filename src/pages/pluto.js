import React from "react"
import { Scrollbars } from 'react-custom-scrollbars';

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoPluto from "../components/infopluto";

const PlutoPage = () => (
    <div className="pluto">
    <div className="container">
    <Layout>
    <SEO title="Pluto Page" />
    <div className="wow fadeInLeft container-img" data-wow-delay=".25s" data-wow-duration="3s">
    <img src={'./pluto.png'} alt="Pluto" className="img-fluid img-planet"/></div>
    <div id="content-info" className="wow zoomIn" data-wow-delay=".25s" data-wow-duration="3s">
    <Scrollbars style={{ width: 500, height: 500}}>
<InfoPluto />
</Scrollbars>
</div>
</Layout>
</div>
</div>
)

export default PlutoPage
