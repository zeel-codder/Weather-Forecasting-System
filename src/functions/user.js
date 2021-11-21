// eslint-disable-next-line no-unused-vars
import {auth} from '../firebase';


const SingUp= async(data)=>{

    console.log(data);
    
    const {email,password,name,contry,state}=data;

    

   await auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
     console.log(userCredential.user);

     const name1=`${name},${state},${contry}`;
     userCredential.user.updateProfile({
         displayName:name1
     })


    // userCredential.

    //  userCredential.
  })


}

const SingIn=async (data)=>{

    const {email,password}=data;

    console.log(data);

    await auth.signInWithEmailAndPassword(email,password);
    
// auth.currentUser
}

const isUserLogin=async(load,state)=>{

    // auth.signOut();

    // console.log('call',auth.currentUser)

     auth.onAuthStateChanged((user)=>{

        if(user){
            state(true);
        }
        load(false);
         
     })


}
const getUser=()=>{

    // auth.signOut();

    // console.log('call',auth.currentUser)

    const user=  auth.currentUser;



    return user;

}

const out= async()=>{
    auth.signOut().then(function() {
        // Sign-out successful.
      }, function(error) {
        // An error happened.
      });
    
}

export {SingIn,SingUp,isUserLogin,getUser,out};