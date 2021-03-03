import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ( { children, pageTitle }) => {
    const data = useStaticQuery(graphql`
        query myQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div>
            <title>{pageTitle}</title>
            <p> {data.site.siteMetadata.title} </p>
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