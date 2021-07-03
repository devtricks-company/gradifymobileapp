import React,{useState,useEffect} from 'react'
import { View,Text,StyleSheet,Image } from 'react-native';
import shiled from '../../assets/image/shild.png';

const XpLinearChart = ({xp}) => {
    const [level,setLevel] = useState(0);
    const [percent,setPercent] = useState(0);
    useEffect(() => {
        const result = xp / 3500;
        const levelNumber = Math.floor(result);
        setLevel(levelNumber);
        const percentProgress = (result - levelNumber).toFixed(2) * 100;
        setPercent(percentProgress);

    },[xp]);
    return (
        <View style={styles.xpContainerChart}>
            <View>
                <Image source={shiled} />
                
                <Text style={styles.level}>{level}</Text>
            </View>
            <View style={{width:"70%",justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.exp}>{xp} EXP </Text>
                <View style={styles.mainProgress}>
                    <View style={[styles.progress,{width:`${percent}%`}]}></View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    xpContainerChart:{
        flexDirection:'row',

        width:"90%",
        height:100,
        padding:10,
        backgroundColor:'white',
        marginTop:20,
        shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor:'white',
    elevation: 5,
    },
    mainProgress:{
        width:"100%",
        backgroundColor:'#E3E3E3',
        height:30,
        borderRadius:50
    },
    progress:{
       
        height:30,
        backgroundColor:"#4ED486",
        borderRadius:50
    },
    exp:{
        fontWeight:'bold',
        fontSize:22,
        paddingBottom:5
    },
    level:{
        position:'absolute',
        top:20,
        left:34,
        color:'white',
        fontSize:25,
        fontWeight:'bold'
        
    }
})
export default XpLinearChart
