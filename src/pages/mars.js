import React from "react"
import { Scrollbars } from 'react-custom-scrollbars';

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoMars from "../components/infomars";

const MarsPage = () => (
    <div className="mars">
    <div className="container">
    <Layout>
    <SEO title="Mars Page" />
    <div className="wow fadeInLeft container-img" data-wow-delay=".25s" data-wow-duration="3s">
    <img src={'./mars.png'} alt="Mars" className="img-fluid img-planet"/></div>
    <div id="content-info" className="wow zoomIn" data-wow-delay=".25s" data-wow-duration="3s">
    <Scrollbars style={{ width: 500, height: 500}}>
<InfoMars />
</Scrollbars>
</div>
</Layout>
</div>
</div>
)

export default MarsPage
