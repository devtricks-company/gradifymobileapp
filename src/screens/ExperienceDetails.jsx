import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
const ExperienceDetails = ({route,navigation}) => {
    const {item} = route.params;
    return (
       
            <LinearGradient colors={[`${item.experience.experienceType.color}`,'#fff']}  style={styles.detailsContainer}>
                <View style={styles.closeHeader}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.close}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} >{item.experience.title}</Text>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.subtitle} >{item.experience.subTitle}</Text>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.description} >{item.experience.description}</Text>
                </View>
                <View style={styles.titleContainer}>
                    <Image  style={styles.image} source={{
                        uri: item.experience.experienceCardPic.replace('localhost','10.0.2.2')
                    }} />
                </View>
                <View style={styles.bottomContent}>
                    <Image style={styles.icon} source={{uri:item.experience.experienceType.icon.replace('localhost','10.0.2.2')}} />    
                    <View style={styles.xpContianer}>
                        <Text style={styles.xpNumber} >{item.experience.xpCompletion}</Text>
                        <Text style={styles.xpText} >XP</Text> 
                         
                    </View>
                    <View style={styles.message}>
                        <Text style={styles.cardMessage}>{item.experience.completionType.message}</Text>
                    </View>
                    <View style={styles.completeContainer}>
                        <TouchableOpacity style={styles.completeButton}>
                            <Text style={styles.buttonText}>{item.experience.completionType.buttonTitle}</Text>
                        </TouchableOpacity>
                    </View>
                
                </View>
            </LinearGradient>
      
    )
}


const styles = StyleSheet.create({
    detailsContainer:{
        flex:1,
        position:'relative'
    },
    closeHeader:{
        marginTop:50,
        width:80,
       
    },
    close:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        paddingLeft:20
    },
    titleContainer:{
        alignItems:'center',
        marginTop:15
    },
    title:{
        color:'white',
        fontSize:30,
        fontWeight:'bold'
    },
    subtitle:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
    description:{
        color:'white',
        fontSize:15,
        textAlign:'center'
    },
    image:{
        width:200,
        height:200,
        
    },
    bottomContent:{
        position:'absolute',
        bottom:0,
        left:0,
        width:'100%',
        height:219,
        backgroundColor:"white",
        borderTopRightRadius:15,
        borderTopLeftRadius:15
    },
    icon:{
        width:60,
        height:60,
        position:'absolute',
        top:-25,
        right:30
    },
    xpContianer:{
        flexDirection:'row',
        marginTop:5
    },
    xpNumber:{
        color:'black',
        fontSize:20,
        paddingLeft:20,
        fontWeight:'bold'
    },
    xpText:{
        color:'#FF0000',
        fontSize:20,
        paddingLeft:3,
        fontWeight:'bold'
    },
    message:{
        alignItems:'center',
        marginTop:50
    },
    cardMessage:{
        color:"black",
        fontWeight:'bold',
        fontSize:15
    },
    completeContainer:{
        alignItems:'center',
        marginTop:20
    },
    completeButton:{
        backgroundColor:"#5CFF88",
        borderRadius:15
    },
    buttonText:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        paddingLeft:100,
        paddingRight:100,
        paddingTop:10,
        paddingBottom:10,
        
    }
})
export default ExperienceDetails
