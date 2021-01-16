import React from 'react'
import Head from 'next/head'
import { Container } from '@material-ui/core'
import {
  createMuiTheme,
  ThemeProvider,
  Theme,
  makeStyles,
  createStyles,
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'

import AgendaList from '../components/agenda/AgendaList'
import Buttons from '../components/counter/Buttons'
import ProgressBar from '../components/graphics/ProgressBar'
import ProgressCircle from '../components/graphics/ProgressCircle'
import { useSelector } from '../stores'
import TextReaderDialog from '../components/text-reader/TextReaderDialog'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      height: 600,
      [theme.breakpoints.down('xs')]: {
        height: 360,
      },
    },
    circle: {
      height: 600,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        height: 200,
      },
    },
  })
)

const IndexPage: React.FC = () => {
  const classes = useStyles()
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
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Container maxWidth="md" style={{ marginTop: 40, marginBottom: 40 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8} className={classes.list}>
              <AgendaList />
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className={classes.circle}>
                <ProgressCircle />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div>
                <ProgressBar />
                <Buttons />
              </div>
            </Grid>
          </Grid>
          <TextReaderDialog />
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default IndexPage
