import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Dimensions, Image, Text} from 'react-native'
import COLORs from '../consts/colors'
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
const width = Dimensions.get("screen").width/2 -30
export default function Card({plant}) {
    const navigation = useNavigation(); 
    return (
        <TouchableOpacity
        onPress={() => navigation.navigate('Details', plant)}>        
        <View style={styles.Card}> 
            <View style={{alignItems:'flex-end', paddingRight:10,}}>
                <View style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: plant.like
                    ? 'rgba(245, 42, 42,0.2)'
                    : 'rgba(0,0,0,0.2) '
              }}>
                    <Icon
                        name="favorite" 
                        size={21} 
                        color={plant.like?COLORs.red:COLORs.dark}/>
                </View>
            </View>   
            <View style={{height:100, alignItems:'center', marginBottom:20}} >
              <Image style={{resizeMode:'contain', flex:1}} source={plant.img}/>
            </View>     
            <Text style={{ fontSize:17, fontWeight:'bold',marginLeft:8,marginTop:5 }}>{plant.name}</Text>

            <View 
               style={{
                   marginLeft:10,
                   marginTop:10,
                   flexDirection:'row', 
                   justifyContent:'space-between'
                   }}>
                <Text style={{fontWeight:'bold'}}>${plant.price}</Text>
                <View style={{
                    height:25,
                    width:25,
                    borderRadius:5,
                    backgroundColor:COLORs.green,
                    justifyContent:'center',
                    alignItems:'center',
                    marginRight:20
                }}>
                  <Text style={{fontSize:17, fontWeight:'bold', color:COLORs.white}}>+</Text>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Card:{
        height:225,
        width,
        marginHorizontal:2,
        borderRadius:10,
        marginBottom:20,
        backgroundColor:COLORs.light
    },

})