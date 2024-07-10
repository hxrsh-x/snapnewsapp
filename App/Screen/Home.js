import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import Color from '../Shared/Color'
import { Ionicons } from '@expo/vector-icons';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import HeadlineList from '../Components/Home/HeadlineList';
import GlobalApi from '../Services/GlobalApi'

function Home() {

  const [newsList, setNewsList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    //   getTopHeadline();
      getNewsByCategory('Trending');
  }, [])

  const getTopHeadline = async () => {
    const result = (await GlobalApi.getTopHeadline).data;
    setNewsList(result.articles.filter(article => article.urlToImage !== null));
  }

  const getNewsByCategory = async (category) => {
    setLoading(true);
    let result;
    if (category === 'Trending') {
      result = (await GlobalApi.getTopHeadline).data;
    } else {
      result = (await GlobalApi.getByCategory(category)).data;
    }
    setNewsList(result.articles.filter(article => article.urlToImage !== null));
    setLoading(false);
  }

  return (
    <ScrollView style={{backgroundColor: Color.white}}>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text style={styles.appName}> SnapNews </Text>
        <Ionicons style={{paddingRight: 5}} name="notifications-outline" size={30} color="black" />
      </View>


      <CategoryTextSlider selectCategory={(category) => getNewsByCategory(category)}/>

      {loading?<ActivityIndicator style={styles.activity}
    size={45} color={Color.primary}
    />:
    <View>

      <TopHeadlineSlider newsList={newsList} />

      <HeadlineList newsList={newsList} />
      </View>
    }
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  appName: {
    fontSize: 40, 
    fontWeight: 'bold', 
    color: Color.primary
  },
  activity:{
    marginTop:Dimensions.get('screen').height*0.36,
  }
})

export default Home