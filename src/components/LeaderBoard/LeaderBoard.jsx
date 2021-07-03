import React from "react";
import { View, Text, StyleSheet } from "react-native";
const LeaderBoard = ({item,index}) => {
  return (
    <View style={styles.leaderContent}>
      
      <View style={styles.nameContainer}>
      <Text style={styles.number}>{index}</Text>
        <Text style={styles.name}>{item.firstName} {item.lastName}</Text>
      </View>
      <View style={styles.xpContainer}>
        <Text style={styles.xp}>{item.xp}</Text>
        <Text style={styles.XpText}>XP</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leaderContent: {
    width: "100%",
    height: 78,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor:"#bababa",
    borderStyle:"solid",
    borderBottomWidth:1,
    marginTop: 20,
  },
  number: {
    backgroundColor: "#0BC4B8",
    width: 39,
    height: 39,
    borderRadius: 50,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 39,
  },
  nameContainer:{
    flexDirection:'row',
    alignItems:'center', 
    justifyContent:"flex-start"
  },
  name:{
      paddingLeft:20,
      fontSize:21,
      fontWeight:'bold'
  },
  xpContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
        },
   xp:{
    color:"#FF4C00",
    fontSize:18,
    fontWeight:'bold',
    paddingRight:10

   },
   XpText:{
       fontSize:20,
       color:'#000',
       fontWeight:'bold'
   }     
  
});

export default LeaderBoard;
