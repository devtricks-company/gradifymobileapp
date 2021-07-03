import React,{useEffect} from 'react'
import { useContext } from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import AuthContext from '../context/auth/authContext';
import CardContext from '../context/card/cardContext';
import ExperineceItem from '../components/ExperienceItem/ExperineceItem';

const Cards = ({navigation}) => {
    const { getAllCards,cards  } = useContext(CardContext);
    const {student} = useContext(AuthContext);
    useEffect(() => {
        (async () => {
            await getAllCards(student._id);    
        })();
    },[]);


    return (
        <View style={styles.cardContainer}>
          <View style={styles.cardHeader}></View>
          <View styles={styles.cardList}>
              {cards && console.log(cards[0].experience.title)}
               {cards && <FlatList
                    data={cards}
                    keyExtractor={item => item._id}
                    renderItem={({item}) => (
                     <ExperineceItem item={item}  navigation={navigation} />
                    )}
               
               />}    
          </View>  
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        flex:1,
       
    },
    cardHeader:{
        width:"100%",
        height:168,
        backgroundColor:'#1766C1',
        borderBottomRightRadius:50,
        borderBottomLeftRadius:50
    }

})

export default Cards
