import * as React from "react"
import { Link } from 'gatsby'

// markup
const IndexPage = () => {
  return (
    <main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <title>Home Page</title>
      <h1> Hi there you </h1>
    </main>
  )
}

export default IndexPage
