import React from 'react'
import Head from 'next/head'
import { Container } from '@material-ui/core'

import AgendaList from '../components/agenda/AgendaList'
import Buttons from '../components/buttons/Buttons'
import ProgressBar from '../components/graphics/ProgressBar'
import ProgressCircle from '../components/graphics/ProgressCircle'

const IndexPage: React.FC = () => (
  <div>
    <Head>
      <title>Timekeeper</title>
    </Head>
    <Container fixed>
      <h1>Timekeeper</h1>
      <AgendaList />
      <ProgressCircle />
      <ProgressBar />
      <Buttons />
    </Container>
  </div>
)

export default IndexPage
