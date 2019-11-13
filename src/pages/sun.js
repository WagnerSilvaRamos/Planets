import React from "react"
import { Scrollbars } from 'react-custom-scrollbars';

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoSun from "../components/infosun";

const SunPage = () => (
    <div className="sun">
    <div className="container">
    <Layout>
    <SEO title="Sun Page" />
    <div className="wow fadeInLeft container-img" data-wow-delay=".25s" data-wow-duration="3s">
    <img src={'./sun.png'} alt="Sun" className="img-fluid img-sun"/></div>
    <div id="content-info" className="wow zoomIn" data-wow-delay=".25s" data-wow-duration="3s">
    <Scrollbars style={{ width: 500, height: 500}}>
<InfoSun />
</Scrollbars>
</div>
</Layout>
</div>
</div>
)

export default SunPage
