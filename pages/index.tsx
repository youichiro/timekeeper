import React from 'react'
import { Container } from '@material-ui/core'
import Layout from '../components/Layout'
import WholeTimer from '../components/WholeTimer'
import AgendaList from '../components/AgendaList'

const IndexPage: React.FC = () => (
  <Layout title="Home">
    <Container fixed>
      <h1>Timekeeper</h1>
      <WholeTimer />
      <AgendaList />
    </Container>
  </Layout>
)

export default IndexPage
