import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogPage = ( {data}) => {
    return (
        <Layout pageTitle="Blogs">
            <p> Some stuff here </p>
            {data.allFiles.nodes.map(node => (
                <h1>{node.name}</h1>
            ))}
        </Layout>
    )
}

export const query = graphql`
    query blogQuery {
        allFile(filter: {absolutePath: {regex: "/blog/"}}) {
            nodes {
            ext
            dir
            name
            }
        }
    }
`

export default BlogPage