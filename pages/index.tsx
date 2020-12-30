import React from 'react'
import { Container } from '@material-ui/core'
import { Provider } from 'react-redux'

import Layout from '../components/Layout'
import WholeTimer from '../components/WholeTimer'
import AgendaList from '../components/AgendaList'
import store from '../stores'

const IndexPage: React.FC = () => (
  <Provider store={store}>
    <Layout title="Home">
      <Container fixed>
        <h1>Timekeeper</h1>
        <WholeTimer />
        <AgendaList />
      </Container>
    </Layout>
  </Provider>
)

export default IndexPage
