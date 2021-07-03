import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import coinsImage from "../assets/image/coin.png";
import BackPictureProfile from "../components/BackPictureProfile/BackPictureProfile";
import PolygonProfile from "../components/PolygonChart/PolygonProfile";
import ProfileName from "../components/ProfileName/ProfileName";
import XpLinearChart from "../components/XpLinearChart/XpLinearChart";
import { useContext } from "react";
import AuthContext from "../context/auth/authContext";
import LeaderBoard from "../components/LeaderBoard/LeaderBoard";
import { useEffect } from "react/cjs/react.development";
const isAndroid = Platform.OS === "android" ? true : false;
const ProfileScreen = ({ navigation }) => {
  const { student, isAuthenticate, loading, getLeaderBoard, leaderboards } =
    useContext(AuthContext);
  useEffect(() => {
    (async () => {
      await getLeaderBoard();
    })();
  }, []);
  return (
    <>
      {!loading ? (
        <>
          <SafeAreaView>
            <View style={styles.profileContainer}>
              <View style={styles.profileHeader}>
                <TouchableOpacity>
                  <AntDesign name="bars" size={32} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="ios-notifications" size={28} color="black" />
                </TouchableOpacity>
              </View>
              <ScrollView showsVerticalScrollIndicator>
                <View style={styles.profileXpCoinsContainer}>
                  <View style={styles.headerxpcontainer}>
                    <View style={styles.headerxp}>
                      <Text style={styles.xpnumber}>
                        {student.xp ? student.xp : 0}
                      </Text>
                      <Text style={styles.xp}>XP</Text>
                    </View>
                  </View>
                  <View style={styles.headercoinscontainer}>
                    <View style={styles.headercoins}>
                      <Image source={coinsImage} />
                      <Text style={styles.coinsNumber}>0</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.profileInfoContainer}>
                  <View style={styles.profileInfo}>
                    <BackPictureProfile />
                    <PolygonProfile
                      XP={student.xp ? student.xp : 0}
                      studentPic={student.studentPicture}
                    />
                    <ProfileName
                      studentName={student.firstName + " " + student.lastName}
                    />
                  </View>
                  <XpLinearChart xp={student.xp ? student.xp : 0} />
                  <View style={styles.leaderBoardContainer}>
                    <View style={styles.leaderBoardHeader}>
                      <Text style={styles.leaderBoardHeaderText}>
                        Leader Board
                      </Text>
                    </View>

                    <View style={styles.leaderBoardContent}>
                      {leaderboards && (<FlatList style={{flex:1}}
                    data={leaderboards}
                    keyExtractor={item => item._id}
                    renderItem={({item,index}) => <LeaderBoard item={item} index={++index} />}
                  />)}
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </SafeAreaView>
        </>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
   
    marginTop: isAndroid ? 25 : 0,
    
  },
  profileHeader: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileXpCoinsContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerxpcontainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 5,
  },
  headercoinscontainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "flex-end",
  },
  headerxp: {
    paddingTop: 18,
    paddingBottom: 18,
    width: "80%",
    paddingRight: 15,
    paddingLeft: 5,
    backgroundColor: "#1069C1",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headercoins: {
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 10,
    width: "85%",
    backgroundColor: "#1069C1",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
  },
  xpnumber: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  xp: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  coinsNumber: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  profileInfoContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 55,
    flexWrap: "wrap",
    minHeight:500
  },
  profileInfo: {
    width: "90%",
    height: 436,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "white",
    elevation: 5,
  },
  leaderBoardContainer: {
    width: "100%",
    height: 250,
    padding: 20,
    marginTop: 30,
    alignItems: "center",
  },
  leaderBoardHeader: {
    width: "100%",
    height: 70,

    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "white",
    elevation: 5,
  },
  leaderBoardHeaderText: {
    fontSize: 40,
    fontWeight: "bold",
    textShadowColor: "#13C4B8",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: "#3E3F5E",
  },
  leaderBoardContent: {
    width: "100%",
    minHeight:400,   
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "flex-start",
    justifyContent:'flex-start',
    padding:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "white",
    elevation: 5,
    marginTop: 25,
  },
  scrollView: {
    height: '20%',
    width: '80%',
    margin: 20,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'lightblue'
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingBottom: 50
  }
});

export default ProfileScreen;
