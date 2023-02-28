import React from "react"
import Navbar from "./Navbar"

const Layout = (props) => (
    <div className="text-center p-10 flex-1">
        {props.children}
    </div>
)

export default { Layout, Navbar }