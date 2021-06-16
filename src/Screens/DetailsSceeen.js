import React from 'react'
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native'
import COLORs from '../consts/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function DetailsSceeen({navigation, route}) {
    const plant = route.params
    console.log(plant)
    return (
        <SafeAreaView style={{backgroundColor:COLORs.white, flex:1, }}>
            <View style={styles.header}>
                <Icon name='arrow-back' size={28} onPress={()=> navigation.goBack()}/>
                <Icon name='shopping-cart' size={28} />
            </View>
            <View style={styles.imageContainer}>
               <Image style={{resizeMode:'contain', flex:1}} source={plant.img}/>
            </View>
            <View style={styles.detailsContainer}>
                <View
                style={{
                    marginLeft: 20,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                }}>
                <View style={styles.line} />
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Best choice</Text>
                </View>
                <View
                style={{
                    marginLeft: 20,
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>{plant.name}</Text>
                <View style={styles.priceTag}>
                    <Text
                    style={{
                        marginLeft: 15,
                        color: COLORs.white,
                        fontWeight: 'bold',
                        fontSize: 16,
                    }}>
                    ${plant.price}
                    </Text>
                </View>
                </View>
                <View style={{paddingHorizontal: 20, marginTop: 10}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
                <Text
                    style={{
                    color: 'grey',
                    fontSize: 16,
                    lineHeight: 22,
                    marginTop: 10,
                    }}>
                    {plant.about}
                </Text>
                <View
                    style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    }}>
                    <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <View style={styles.borderBtn}>
                        <Text style={styles.borderBtnText}>-</Text>
                    </View>
                    <Text
                        style={{
                        fontSize: 20,
                        marginHorizontal: 10,
                        fontWeight: 'bold',
                        }}>
                        1
                    </Text>
                    <View style={styles.borderBtn}>
                        <Text style={styles.borderBtnText}>+</Text>
                    </View>
                    </View>

                    <View style={styles.buyBtn}>
                    <Text
                        style={{color: COLORs.white, fontSize: 18, fontWeight: 'bold'}}>
                        Buy
                    </Text>
                    </View>
                </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        paddingHorizontal:20,
        marginTop:40,
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    imageContainer:{
        flex:0.45,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
    },
    detailsContainer:{
        flex: 0.55,
        marginHorizontal: 7,
        marginBottom: 7,
        borderRadius: 20,
        marginTop: 30,
        paddingTop: 30,
    },
    line: {
        width: 25,
        height: 2,
        backgroundColor: COLORs.dark,
        marginBottom: 5,
        marginRight: 3,
      },
      borderBtn: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 40,
      },
      borderBtnText: {fontWeight: 'bold', fontSize: 28},
      buyBtn: {
        width: 130,
        height: 50,
        backgroundColor: COLORs.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
      },
      priceTag: {
        backgroundColor: COLORs.green,
        width: 80,
        height: 40,
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
      },
})