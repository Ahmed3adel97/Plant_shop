import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import COLORS from '../consts/colors'
import CategoryList from '../components/categoryList'
import Card from '../components/card'
import plants from '../consts/plants'

export default function Home({navigation}) {
    
 const renderItem = ({ item }) => (
        <Card plant={item} />
      );
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <View>
                <Text style={{fontSize:25, fontWeight:'bold'}}>Welcome to</Text>
                <Text style={{fontSize:40, fontWeight:'bold', color:COLORS.green}}>Plant Shop</Text>
            </View>
            <Icon name="shopping-cart" size={28} />
        </View>
        <View  style={{flexDirection:'row', marginTop:30}}>
          <View style={styles.searchContainer}>
            <Icon name="search" size={25} style={{marginLeft:20}}/>
            <TextInput placeholder="search" style={styles.input}/>
            </View>
          <View style={styles.sortBtn}>
            <Icon name="sort" size={30} color='#fff'/>
          </View>     
        </View>
        <CategoryList />
        <FlatList
           columnWrapperStyle={{justifyContent: 'space-between'}}
           showsVerticalScrollIndicator={false}
           contentContainerStyle={{
           marginTop: 10,
           paddingBottom: 50,
           }}
            numColumns={2}
            data={plants}
            renderItem={renderItem}
    
      />
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:20
  },
  header: {
    marginTop:70,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  searchContainer:{
    height:50,
    flex:1,
    flexDirection:'row',
    backgroundColor:COLORS.light,
    alignItems:'center',
    borderRadius:10
  },
  input:{
    fontSize:18,
    fontWeight:'bold',
    color:COLORS.white,
    flex:1
  },
  sortBtn:{
    height:50,
    width:50,
    backgroundColor:COLORS.green,
    borderRadius:10,
    alignItems:'center',
    marginLeft:10,
    justifyContent:'center'
  }
});
