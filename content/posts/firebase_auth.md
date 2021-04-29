---
title: Firebase auth with username
description: Adding custom username to firebase authentication
tags: ['reactJS', 'firebase', 'authentication']
date: 2021-03-13
---

Building our own authentication system can be difficult and time consuming. But Firebase with its backend services and easy to use SDK's makes authentication a much simpler process. However it comes with its own constraints. Once such problem is while authenticating a new user, firebase only makes use of email and password OR if user uses third party sign in like Google then in that case firebase will get users public profile from that service - Google.

Now one common feature which a lot of app eg. Twitter, require is a unique username for users. In that case we have to add a few more steps to our authentication process and so we can give each user a unique username.

## The Big Picture

- User will sign in with Google
- On signing in we will check if the user already has a username else they will be redirected to the page with a form to select a new username.
- Now to validate username we will have two documents in the firestore database. This will help us check if the username already exists.
  1. Users collection with unique id which will have email, password and username fields.
  2. Username collection with user id document and username fields.

Firebase config file

```console
lib/firebase.js
```

```jsx
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'your app info',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
```

Now to minimize the number of reads to the database we will set up the auth data in a global context so it's available to every page before the page is rendered. i.e. the firestore document will only be read once.

```console
lib/context.js
```

```jsx
import { createContext } from 'react';

export const UserContext = createContext({ user: null, username: null });
```

Provide context to the entire app

```console
src/App.js
```

```jsx
export default function App() {
  return (
    <UserContext.Provider value={user}>
      <Main />
    </UserContext.Provider>
  );
}
```

Let us create a custom hook to read current auth record and user profile document. This hook will return an object with user and username and replace the user in value in the code above. In our useEffect we are making a database call to the users collection with the user id which is available to us through the useAuthState(auth) hook. We have to remember to turn off realtime subscription.

```console
lib/hooks.js
```

```jsx
import { auth, firestore } from './firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export function useUserData() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    let unsubscribe;

    if (user) {
      const ref = firestore.collection('users').doc(user.uid);
      unsubscribe = ref.onSnapshot((doc) => {
        setUsername(doc.data()?.username);
      });
    } else {
      setUsername(null);
    }

    return unsubscribe;
  }, [user]);

  return { user, username };
}
```

In our main component we are going to grab the currently authenticated user. Check if the user is logged in

- if the user is logged in
  - check if username exists
    - if username exists
      - welcome
    - if username doesn't exist
      - username form
- if user is not logged in
  - sign in button

```console
pages/Main.js
```

```jsx
export default function Main(props) {
  const { user, username } = useContext(UserContext);

  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <div>
            WELCOME {username}!
            <SignOutButton />
          </div>
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}
```

Signing in with firebase google sign in

```console
components/SignInButton.js
```

```jsx
function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
}
```

Signing out with firebase

```console
components/SignOutButton.js
```

```jsx
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}
```
