import React from 'react'
import Layout from '../components/Layout'
import CurrentTime from '../components/CurrentTime'

const IndexPage: React.FC = () => (
  <Layout title="Home">
    <h1>Timekeeper</h1>
    <CurrentTime/>
  </Layout>
)

export default IndexPage
