import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'
import { injectGlobal } from 'emotion';


injectGlobal`
    @font-face {
        font-family: "POLYA";
        src: url("/static/fonts/POLYA.otf");
    }

    @font-face {
        font-family: "FARRAY";
        src: url("/static/fonts/FARRAY.otf");
    }
`;

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  constructor (props) {
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render () {
    return (
      <html>
        <Head>
          <title>brent soles | developer. designer.</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <meta name="description" content="Portland, OR based developer with a diverse range of skills. Primarily developing using ReactJS, Node.js, GraphQL, MongoDB, and C#."></meta>
          <meta name="keywords" content="Javascript,Developer,Designer,Portland,OR,ReactJS,GraphQL,Node.js,C#"></meta>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <style>{`* { margin: 0; padding: 0; font-size: 10px}/* custom! */`}</style>
          {/* <style type="text/css" media="screen, print">{`
                @font-face {
                    font-family: "POLYA";
                    src: url("/static/fonts/POLYA.otf");
                }`
            }</style> */}
          <link href="https://fonts.googleapis.com/css?family=Hind+Madurai:700" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
