import React from "react"
import { Link } from 'gatsby'

const Layout = ( { children }) => {
    return (
        <React.Fragment>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <main>
                { children }
            </main>
        </React.Fragment>
    )
}

export default Layout