import React from 'react'
import Layout from '../components/Layout'
// import CurrentTime from '../components/CurrentTime'
// import Timer from '../components/Timer'
import WholeTimer from '../components/WholeTimer'

const IndexPage: React.FC = () => (
  <Layout title="Home">
    <h1>Timekeeper</h1>
    <WholeTimer />
  </Layout>
)

export default IndexPage
