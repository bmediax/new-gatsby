import React from "react"
import { Link } from 'gatsby'

const Layout = ( { children, pageTitle }) => {
    return (
        <div>
            <title>{pageTitle}</title>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                { children }
            </main>
        </div>
    )
}

export default Layout