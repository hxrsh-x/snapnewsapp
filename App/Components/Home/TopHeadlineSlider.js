import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions, StyleSheet} from 'react-native'
import Color from '../../Shared/Color'
import { useNavigation } from '@react-navigation/native'


function TopHeadlineSlider({newsList}) {
    
    const navigation = useNavigation() 

    const topNews = newsList.slice(0, 8)

  return (
      <View style={{marginTop:25}}>
          <FlatList
              data={topNews}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                  <TouchableOpacity onPress={()=>navigation.navigate('read-news', {news:item})}
                   style={{width:Dimensions.get('screen').width*0.8, marginRight:17}}>
                    <Image source={{uri:item.urlToImage}} 
                    style={{height:Dimensions.get('screen').width*0.75, borderRadius:17}}
                    />
                    <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                    <Text style={styles.source}>{item?.source?.name}</Text>
                  </TouchableOpacity>
              )}
          />
      </View>
  )
}

const styles = StyleSheet.create({
    title:{
        marginTop:10,
        fontSize:22,
        fontWeight:'800'
    },
    source:{
        color:Color.primary,
        
    }
})

export default TopHeadlineSlider