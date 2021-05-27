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
let db = firebase.firestore();
db.settings({ timestampsInSnapshots: true});



// LOGIN 

let inputEmail = document.querySelector('#InputEmail');
let inputPassword = document.querySelector('#InputPassword');
let submitBtn = document.querySelector('.submit-btnn');

let userVerification = function(){
  let email = inputEmail.value;
  let pass = inputPassword.value;
  // const auth = firebase.auth();
  firebase.auth().signInWithEmailAndPassword(email, pass).then( userCredential => {
    let user = userCredential.user;
    console.log(email,pass);
    window.location.href = "/src/Index.html";
  }).catch( e => {
    let errorCode = e.code;
    console.log("error");
  });
}

submitBtn.addEventListener('click', userVerification);
// login page styles
// db.collection('Products').get().then((snapshot) =>{
//   snapshot.docs.forEach(doc => {
//     console.log(doc.data())
//   })
// } )
