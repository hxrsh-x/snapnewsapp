import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import Color from '../../Shared/Color'
import { useNavigation } from '@react-navigation/native'

function HeadlineList({newsList}) {

  const navigation = useNavigation() 

  return (
    <View>
        <View style={{height:2, backgroundColor:Color.black, marginTop:10, marginBottom:-3}} ></View>
        <FlatList
            data = {newsList}
            renderItem = {({item})=>(
              <View>
              <TouchableOpacity onPress={()=>navigation.navigate('read-news', {news:item})}
               style={{marginTop:15, display:'flex', flexDirection:'row'}} >
                <Image source={{uri:item.urlToImage}}
                style={{width:100, height:100, borderRadius:15}}
                />

                <View style={{marginLeft:10, marginRight:110}}>
                <Text numberOfLines={3} style={{fontSize:18, fontWeight:'bold', marginTop:7}} >{item.title}</Text>
                <Text style={{color:Color.primary, marginTop:7}}>{item?.source?.name}</Text>
                </View>
              </TouchableOpacity> 
              <View style={{height:0.8, backgroundColor:Color.black, marginTop:10, marginBottom:-3}} ></View>
              </View>   
              
  )}

        />
    </View>
  )
}

export default HeadlineList