import React from 'react'
import { Container } from '@material-ui/core'
import Layout from '../components/Layout'
// import CurrentTime from '../components/CurrentTime'
import WholeTimer from '../components/WholeTimer'

const IndexPage: React.FC = () => (
  <Layout title="Home">
    <Container fixed>
      <h1>Timekeeper</h1>
      <WholeTimer />
    </Container>
  </Layout>
)

export default IndexPage
