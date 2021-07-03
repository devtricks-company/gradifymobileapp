import React, { useState } from "react";
import { useContext } from "react";
import { View, Text, StyleSheet, ImageBackground, Image,TextInput,Button } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import earth from "../assets/image/earth.png";
import gradifylogo from "../assets/image/gradifylogo.png";
import AuthContext from "../context/auth/authContext";


const Login = ({navigation}) => {
  const {loginStudent} = useContext(AuthContext);
  const [studentInfo,setStudentInfo] = useState({
    email:"",
    password:""
  });

 
  const loginHandler = async () => {
     const result = await loginStudent(studentInfo);
     console.log(result)
     if(result){
        navigation.navigate('stackProfile');
     }
  }
  
  return (
    <ImageBackground source={earth} style={styles.image}>
      <View style={styles.logoContainer}>
        <Image source={gradifylogo} />
      </View>
      <View style={styles.logoTextContainer}>
          <Text style={styles.logoText}>WELCOME TO</Text>
      </View>
      <View style={styles.logoHeadline}>
          <Text style={styles.headline}>GRADify</Text>
      </View>
      <View style={styles.loginContent}>
            <View style={styles.loginContentCenter}>
                <Text style={styles.account}>Account Login</Text>   
                <TextInput style={styles.input}   placeholder="Email" value={studentInfo.email} onChangeText={text => setStudentInfo({...studentInfo,email:text})} /> 
                <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" onChangeText={text => setStudentInfo({...studentInfo,password:text})} /> 
               <View style={styles.loginButton}>
                  <Pressable onPress={loginHandler} style={styles.buttonLogin}   >
                        <Text style={styles.loginText}>Login To Your Account</Text>     
                  </Pressable>
               </View>
            </View>
           
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoTextContainer:{
      alignItems:'center',
      justifyContent:'center',
     
  },
  logoText:{
      color:'white'
  },
  logoHeadline:{
      alignItems:'center',
      
  },
  headline:{
      color:'white',
      fontSize:55,
      fontWeight:'700'
  },
  loginContent:{
     
      alignItems:'center'
  },
  loginContentCenter:{
      padding:30,
      backgroundColor:'white',
      width:'85%',
      borderRadius:15,
      marginTop:30,
      alignItems:'center',
      
  },
  account:{
      fontWeight:'bold',
      fontSize:15,
      paddingBottom:30
  },
  input:{
      width:"90%",
      borderWidth:1,
      borderStyle:"solid",
      marginTop:20,
      borderRadius:15,
      borderColor:"#DEDEEA",
      padding:8
  },
  loginButton:{
    marginTop:50,
    width:"100%",
   
  },
  buttonLogin:{
      backgroundColor:"#615DFA",
      borderRadius:15,
      justifyContent:'center',
      alignItems:"center",
      padding:10
  },
  loginText:{
      color:'white',
      fontWeight:"bold"
  }

});

export default Login;
