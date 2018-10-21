import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>技術ブログです</h1>
    <p>こんにちは</p>
    <Link to="/page-2/">Go to page 2</Link>
    <br/>
    <Link to="/page-3/">Go to page 3</Link>
  </Layout>
)

export default IndexPage
