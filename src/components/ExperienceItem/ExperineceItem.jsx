import React,{useEffect,useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
const ExperineceItem = ({ item,navigation }) => {
    const [month,setMonth] = useState(null);
    const [day,setDay] = useState(null);
    const [year,setYear] = useState(null);

    useEffect(() => {

        const months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];
     
           const getMonthFromDate = new  Date(item.experience.startDate).getMonth();
        const getDayFromDate = new  Date(item.experience.startDate).getDate();
        const getYearfromDate = new  Date(item.experience.startDate).getFullYear();
        setMonth(months[getMonthFromDate]);
        setDay(getDayFromDate);
        setYear(getYearfromDate);
    },[]);
    return (
    <TouchableOpacity style={styles.expItemContainer} onPress={() => navigation.navigate('ExperienceDetails',{
      item
    }) }>
      <View style={styles.iconContainer}>
        <Image
          style={styles.expIcon}
          source={{
            uri: item.experience.experienceType.icon.replace(
              "localhost",
              "10.0.2.2"
            ),
          }}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.experience.title}</Text>
        <Text style={styles.subTitle}>{item.experience.subTitle}</Text>
        <Text style={styles.Date}>{month} {day},{year} </Text>
      </View>
      <View style={styles.state}>
        <Text></Text>
      </View>
      <View style={styles.xp}>
        <Text style={styles.xpStyle}>XP</Text>
        <Text style={styles.xpNumber}>{item.experience.xpCompletion}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  expItemContainer: {
    paddingLeft: 10,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    padding: 15,
    flex: 1,
  },
  expIcon: {
    width: 49,
    height: 49,
  },
  content: {
    marginTop: 20,
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderBottomColor: "gray",
    paddingBottom: 15,
    flex: 3,
  },
  xp: {
    marginTop: 20,
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderBottomColor: "gray",
    padding: 0,
    paddingBottom: 10,
    flex: 1,
  },
  state: {
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderBottomColor: "gray",
    marginTop: 20,
    padding: 0,
    flex: 1,
  },
  xpStyle: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
  },
  xpNumber:{
      color:'#FF4C00',
      fontWeight:'bold',
      fontSize:20,
      marginTop:-10
  },
  title:{
      fontSize:18,
      fontWeight:'bold'
  }
});

export default ExperineceItem;
