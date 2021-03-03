import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
        <h1>Homepage</h1>
        <StaticImage src="https://pbs.twimg.com/media/Evkn6fRWgAgxOWe?format=jpg&name=4096x4096" alt="A really good doggo" />
    </Layout>
  )
}

export default IndexPage
