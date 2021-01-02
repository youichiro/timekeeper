// https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head prefix="og: http://ogp.me/ns# website: http://ogp.me/ns/website#">
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.png" />
          <meta
            name="description"
            content="タイムキーパーの代わりになる君です"
          />
          <meta property="og:title" content="Timekeeper" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="タイムキーパーの代わりになる君です"
          />
          <meta property="og:url" content="https://time-keeper.vercel.app" />
          <meta
            property="og:image"
            content="https://time-keeper.vercel.app/favicon.png"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@cinnamon_416" />
          <meta name="twitter:creator" content="@cinnamon_416" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  }
}
