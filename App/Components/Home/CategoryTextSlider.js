import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Color from '../../Shared/Color'

function CategoryTextSlider({selectCategory}) {
    const [current, setCurrent]=useState(1)
    const categoryList=[
        {
            id:1,
            name:'Trending'
        },
        {
            id:2,
            name:'Tech'
        },
        {
            id:3,
            name:'Business'
        },
        {
            id:4,
            name:'Sports'
        },
        {
            id:5,
            name:'Gaming'
        },
        {
            id:6,
            name:'World'
        },
        {
            id:7,
            name:'Movies'
        },
    ]

    const onCategoryClick=(id)=>{
        setCurrent(id) 

    }

  return (
    <View style={{marginTop:10}}>
        <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index})=>(
            <TouchableOpacity onPress={() => {onCategoryClick(item.id);selectCategory(item.name)}}>
                <Text style={ item.id == current?styles.selectedCategory:
                styles.unselectedCategory
                }>{item.name}</Text>
            </TouchableOpacity>
        )}
        />
      </View>
  )
}

const styles = StyleSheet.create({
    unselectedCategory:{
        marginRight:17, 
        fontSize:20, 
        fontWeight:'bold',
        color:Color.gray,
    },
    selectedCategory:{
        marginRight:17, 
        fontSize:21, 
        fontWeight:'bold',
        color:Color.primary,
    }
})

export default CategoryTextSlider