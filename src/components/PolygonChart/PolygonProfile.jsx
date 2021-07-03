import Svg, { Polygon } from "react-native-svg";
import React,{useState,useEffect} from "react";
import { View, StyleSheet,Image } from "react-native";

import c from '../../assets/image/Base.png'
const PolygonProfile = ({XP,studentPic}) => {
    const [progress,setProgress] = useState(null);
    useEffect(() => {
        const result = XP / 3500;
        const level = Math.floor(result);
        const percent = (result - level).toFixed(2) * 100;
        setProgress((331 * (percent / 100)) + 330);
    },[XP]);
  return (
    <View
      style={{ width: 256, height: 256, position: "relative", zIndex: 1000,top:-50 }}
    >
      <Svg>
        <Polygon
          points="100 20,50 50,50 100,100 130,150 100,150 50"
          style={{
            width: "100%",
            height: "100%",
            fill: "white",
            stroke: "#f7f7fa",
            strokeWidth: 15,
            strokeLinecap: "round",
            transform: "scale(1.6)",
            borderRadius: 5,
            strokeLinejoin: "round"
          }}
        />
        <Polygon
          points="100 20,50 50,50 100,100 130,150 100,150 50"
          style={{
            width: "100%",
            height: "100%",
            fill: "none",
            stroke: "#f7f7fa",
            strokeWidth: 15,
            strokeLinecap: "round",
            transform: "scale(1.6)",
            borderRadius: 5,
            strokeDasharray: 331,
            stroke: "#2ED2E2",
            strokeDashoffset: progress,
            strokeLinejoin: "round"
          }}
        />
      </Svg>
      {console.log(studentPic)}
      <Image source={{uri:studentPic.replace('localhost','10.0.2.2')}}  style={styles.profilePic} />
    </View>
  );
};
const styles = StyleSheet.create({
    profilePic:{
        position: "absolute",
      width:110,
      height:110,
      left:110,
      top:60,
    
    zIndex:20
    }
})
export default PolygonProfile;
