import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./src/screens/ProfileScreen";
import AuthState from "./src/context/auth/AuthState";
import CardState from "./src/context/card/CardState";
import { MaterialCommunityIcons , FontAwesome5 , Feather} from '@expo/vector-icons';
import Login from "./src/screens/Login";
import Cards from "./src/screens/Cards";
import ExperienceDetails from "./src/screens/ExperienceDetails";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen}   options={{
        
          tabBarIcon: ({  color }) => (
            <FontAwesome5 name="user" size={24} color={ color } />
          ),
        }} />
      <Tab.Screen name="Cards" component={Cards} options={{
          
          tabBarIcon: ({  color }) => (
            <Feather name="compass" size={24}  color={ color } />
          ),
        }}/>
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <AuthState>
      <CardState>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="stackProfile" component={TabNavigation} />
            <Stack.Screen name="ExperienceDetails" component={ExperienceDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </CardState>
    </AuthState>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
