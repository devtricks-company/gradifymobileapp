import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
const ProfileName = ({studentName}) => {
    return (
        <View style={styles.profilename}>
             <Text style={styles.profileText} >{studentName}</Text>   
        </View>
    )
}

const styles = StyleSheet.create({
    profilename:{
        width:"100%",
        color:"black",
        flexDirection:"row",
        justifyContent:"center",
        marginTop:-80

    },
    profileText:{
        fontSize:25
    }
})
export default ProfileName
