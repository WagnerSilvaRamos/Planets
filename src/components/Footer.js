import React from 'react'
import "./layout.css"

const Footer = () => 
 (
     <div>
         <div className="container">
        <footer>
            <p>© {new Date().getFullYear()}, Developed By <a href="http://www.wagneramos.com.br">Wagner Ramos</a> with
          {` `}
                <a href="https://www.gatsbyjs.org">Gatsby.JS</a></p>

<a href="/"> Go back to the homepage</a>
        </footer>
        </div>
        </div>
 );

export default Footer





