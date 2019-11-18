import React from 'react'
import "./layout.css"

//import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"


const Menu = () => {
    return(
        <div className="menu">
        <div className="container">
        <nav className="navbar navbar-expand-xl">
        <a className="navbar-brand" href="./">Infos Planet App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"> <span className="navbar-toggler-icon"></span> </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
        <li className="nav-item" ><img src={'./moon.png'} alt="Moon"  />
        <AniLink swipe to="/moon" className="nav-link"   activeStyle={{ textDecoration: "salmon double underline" }}  activeClassName="active">Moon</AniLink>
        </li>
        <li className="nav-item"><img src={'./sun.png'} alt="Sun" />
        <AniLink swipe to="/sun" className="nav-link" activeStyle={{ textDecoration: "salmon double underline" }}  activeClassName="active">Sun</AniLink>
        </li>
    <li className="nav-item"><img src={'./mars.png'} alt="Sun" />
        <AniLink swipe to="/mars" className="nav-link" activeStyle={{ textDecoration: "salmon double underline" }}  activeClassName="active">Mars</AniLink>
        </li>
        <li className="nav-item"><img src={'./jupiter.png'} alt="Jupiter" />
        <AniLink swipe to="/jupiter" className="nav-link" activeStyle={{ textDecoration: "salmon double underline" }}  activeClassName="active"  >Jupiter</AniLink>
        </li>
        <li className="nav-item"><img src={'./pluto.png'} alt="Pluto" />
        <AniLink swipe to="/pluto" className="nav-link" activeStyle={{ textDecoration: "salmon double underline" }}  activeClassName="active"  >Pluto</AniLink>
        </li>
        <li className="nav-item"><img src={'./venus.png'} alt="Venus" />
        <AniLink swipe to="/venus" className="nav-link" activeStyle={{ textDecoration: "salmon double underline" }}  activeClassName="active"  >venus</AniLink>
        </li>
        <li className="nav-item"><img src={'./earth.png'} alt="Earth"   />
    <AniLink swipe to="/earth" className="nav-link" activeStyle={{ textDecoration: "salmon double underline" }}  activeClassName="active">earth</AniLink>
        </li>
        <li className="nav-item"><img src={'./neptune.png'} alt="Neptun" />
        <AniLink swipe to="/neptun" className="nav-link" activeStyle={{ textDecoration: "salmon double underline" }}  activeClassName="active"  >neptune</AniLink>
        </li>
        <li className="nav-item"><img src={'./saturno.png'} alt="Saturn" />
        <AniLink swipe to="/saturn" className="nav-link" activeStyle={{ textDecoration: "salmon double underline" }}  activeClassName="active"  > Saturn</AniLink>
        </li>
        <li className="nav-item"><img src={'./mercury.png'} alt="Mercury" />
        <AniLink swipe to="/mercury" className="nav-link" activeStyle={{ textDecoration: "salmon double underline" }}  activeClassName="active"  >Mercury</AniLink>
        </li>
        <li className="nav-item"><img src={'./uranus.png'} alt="Uranus" />
        <AniLink swipe to="/uranus" className="nav-link" activeStyle={{ textDecoration: "salmon double underline" }}  activeClassName="active"  >Uranus</AniLink>
        </li>

        </ul>
        </div>
        </nav>
        </div>
        </div>
);
}


export default Menu