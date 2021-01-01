import React from 'react'
import Head from 'next/head'
import { Container } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'

import AgendaList from '../components/agenda/AgendaList'
import Buttons from '../components/counter/Buttons'
import ProgressBar from '../components/graphics/ProgressBar'
import ProgressCircle from '../components/graphics/ProgressCircle'
import { useSelector } from '../stores'

const IndexPage: React.FC = () => {
  const theme = useSelector((state) => state.theme)

  const muiTheme = createMuiTheme({
    palette: {
      type: theme,
      primary: {
        light: '#4dabf5',
        main: '#2196f3',
        dark: '#1769aa',
        contrastText: '#fff',
      },
      secondary: {
        light: '#f73378',
        main: '#f50057',
        dark: '#ab003c',
        contrastText: '#000',
      },
    },
  })

  return (
    <div style={{ flexGrow: 1 }}>
      <Head>
        <title>Timekeeper</title>
      </Head>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Container
          maxWidth="md"
          style={{ marginTop: '5vh', marginBottom: '5vh' }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6} style={{ height: '60vh' }}>
              <AgendaList />
            </Grid>
            <Grid item xs={6}>
              <div
                style={{
                  height: '60vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <ProgressCircle />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ height: '30vh' }}>
                <Buttons />
                <ProgressBar />
              </div>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default IndexPage
