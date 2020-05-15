Example of a static Next.js app running on Firebase.

Local Development

Using a custom server so we can intercept requests to `/__` and forward them via a proxy to Firebase. You need to run `firebase serve` in parallel to the next server.

Access to firebase functions via explicit import (`import firebase from "firebase"`), but to avoid bundling the code we use a custom webpack config where `firebase` is marked as external. The actual code is loaded via script tags in _document.

You need to make sure to not use firebase APIs on the server, they are only available on the client.
