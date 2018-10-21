import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
    <Layout>
        <h1>My first component</h1>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default IndexPage
