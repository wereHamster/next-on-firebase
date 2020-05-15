import Document, { Html, Head, Main, NextScript } from "next/document";

export default class extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />

          <script src="/__/firebase/6.5.0/firebase-app.js"></script>
          <script src="/__/firebase/init.js"></script>

          <NextScript />
        </body>
      </Html>
    );
  }
}
