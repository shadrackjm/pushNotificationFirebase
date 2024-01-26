// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');
/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
*/
firebase.initializeApp({
    apiKey: 'AIzaSyB5NaG9fzp7ZzYPNV7_Unl9jHtzUEKsPLs',
    authDomain: "push-notification-app-15f6d.firebaseapp.com",
    projectId: 'push-notification-app-15f6d',
    storageBucket: 'push-notification-app-15f6d.appspot.com',
    messagingSenderId: '645901941142',
    appId: '1:645901941142:web:e7047672e14426e6c405b7',
    // measurementId: 'G-measurement-id',
});

// const firebaseConfig = {
//     apiKey: "AIzaSyB5NaG9fzp7ZzYPNV7_Unl9jHtzUEKsPLs",
//     authDomain: "push-notification-app-15f6d.firebaseapp.com",
//     projectId: "push-notification-app-15f6d",
//     storageBucket: "push-notification-app-15f6d.appspot.com",
//     messagingSenderId: "645901941142",
//     appId: "1:645901941142:web:e7047672e14426e6c405b7"
//   };

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log("Message received.", payload);
    const title = "Hello world is awesome";
    const options = {
        body: "Your notificaiton message .",
        icon: "/firebase-logo.png",
    };
    return self.registration.showNotification(
        title,
        options,
    );
});