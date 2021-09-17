import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

let signup = (data,{navigation})=>{
    auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(() => {
     navigation.navigate('Home')
     database().ref('/users/').push(data)
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }else{
        alert('something wrong')
      }
  
     
    });
}

let login = (data,{navigation})=>{
    auth().signInWithEmailAndPassword(data.email,data.password)
    .then(()=>{
       navigation.navigate('Home')
    })
    .catch((e)=>{
        alert('something went wrong')
    })
}

let signOut = ()=>{
    auth()
  .signOut()
  .then(() => console.log('User signed out!'));
}


let forgot = ({email})=>{
  auth().sendPasswordResetEmail(email)
  .then(()=>{
      alert('Code sent to your email')
  })
  .catch((e)=>{
      console.log(e)
  })

}


async function onFacebookButtonPress() {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}

export {
    signup,
    login,
    signOut,
    onFacebookButtonPress,
    forgot
}