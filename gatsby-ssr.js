/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it





const React = require("react")
exports.onRenderBody = ({
    setHeadComponents
  
}) => {
    setHeadComponents([
        <script
            key="1"
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
        />,

<script
    key="4"
    type="text/javascript"
    src="./jquery.nicescroll.min.js"
        />,

        <script
            key="2"
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        />,

        <script
            key="3"
            type="text/javascript"
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        />,

   <script
    key="5"
    type="text/javascript"
    src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.js"
        />,


       



    ])
   
 
}
