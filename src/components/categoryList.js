import React,{useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

import COLORs from '../consts/colors'
export default function CategoryList() {
    const [categoryIndex, setCategoryIndex] = React.useState(0);
    const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];
    return (
        <View style={styles.categoryContainer}>          
            {categories.map((item, index) =>(
                <TouchableOpacity
                key={index}
                onPress={()=>setCategoryIndex(index)}
                >
                <Text 
                style={[
                    styles.categoryText,
                    categoryIndex === index && styles.categoryTextSelected,
                  ]}>
                 {item}
                </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    categoryContainer: {
      flexDirection:'row',
      marginTop:20,
      marginBottom:20,
      justifyContent:'space-between'
    },
    categoryText:{
        color:"grey",
        fontWeight:"bold",
        fontSize:15
    },
    categoryTextSelected:{
        color:COLORs.green,
        borderBottomWidth:2,
        borderBottomColor:COLORs.green,
        paddingBottom:5
    }
   
  });