import React from 'react'
import Head from 'next/head'
import { Container } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import AgendaList from '../components/agenda/AgendaList'
import Buttons from '../components/buttons/Buttons'
import ProgressBar from '../components/graphics/ProgressBar'
import ProgressCircle from '../components/graphics/ProgressCircle'
import {useSelector} from '../stores'


const IndexPage: React.FC = () => {
  const theme = useSelector(state => state.theme)

  const muiTheme = createMuiTheme({
    palette: {
      type: theme
    }
  })

  return (
    <div>
      <Head>
        <title>Timekeeper</title>
      </Head>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Container fixed>
          <h1>Timekeeper</h1>
          <AgendaList />
          <ProgressCircle />
          <ProgressBar />
          <Buttons />
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default IndexPage
