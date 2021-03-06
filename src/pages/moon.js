import React from "react"
import { Scrollbars } from 'react-custom-scrollbars';

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoMoon from "../components/infomoon";

const MoonPage = () => (
    <div className="moon">
    <div className="container">
    <Layout>
    <SEO title="Moon Page" />
    <div className="wow fadeInLeft container-img" data-wow-delay=".25s" data-wow-duration="3s">
    <img src={'./moon.png'} alt="Moon" className="img-fluid img-planet"/></div>
    <div id="content-info" className="wow zoomIn" data-wow-delay=".25s" data-wow-duration="3s">
    <Scrollbars style={{ width: 500, height: 500}}>
<InfoMoon />
</Scrollbars>
</div>
</Layout>
</div>
</div>
)

export default MoonPage