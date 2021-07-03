import React from 'react';
import {View,Text,StyleSheet,ImageBackground} from 'react-native';
import backprofile from '../../assets/image/backprofile.jpg'
const BackPictureProfile = () => {
    return (
        <View style={styles.backProfilePic}>
            <ImageBackground source={backprofile} style={styles.backProfileImage} ></ImageBackground>        
        </View>
    )
}


const styles = StyleSheet.create({
    backProfilePic:{
        width:"100%",
        height:144,
        
    },
    backProfileImage:{
        width:"100%",
        aspectRatio:16/9
    }
})
export default BackPictureProfile
