import Document, { Html, Head, Main, NextScript } from "next/document";

export default class extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script defer src="/__/firebase/6.5.0/firebase-app.js"></script>
          <script defer src="/__/firebase/6.5.0/firebase-firestore.js"></script>
          <script defer src="/__/firebase/init.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
