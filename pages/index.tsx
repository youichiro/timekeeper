import React from 'react'
import Head from 'next/head'
import { Container } from '@material-ui/core'
import { Provider } from 'react-redux'

import WholeTimer from '../components/WholeTimer'
import AgendaList from '../components/AgendaList'
import store from '../stores'

const IndexPage: React.FC = () => (
  <div>
    <Head>
      <title>Timekeeper</title>
    </Head>
    <Provider store={store}>
      <Container fixed>
        <h1>Timekeeper</h1>
        <WholeTimer />
        <AgendaList />
      </Container>
    </Provider>
  </div>
)

export default IndexPage
