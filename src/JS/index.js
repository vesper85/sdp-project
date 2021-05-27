var firebaseConfig = {
  apiKey: 'AIzaSyBzwvgAfn7avAy-FCdHU7MbhMPUTmJmBKU',
  authDomain: 'sdp-project-bcc70.firebaseapp.com',
  projectId: 'sdp-project-bcc70',
  storageBucket: 'sdp-project-bcc70.appspot.com',
  messagingSenderId: '547125601481',
  appId: '1:547125601481:web:cb2c8f0771cd84e2005918',
  measurementId: 'G-C01496J3Y6',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
let firestore = firebase.firestore();
let test = firestore.doc('Products/shoes');
console.log(test);


// login page styles

