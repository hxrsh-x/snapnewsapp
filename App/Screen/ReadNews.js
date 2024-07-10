//add time stamp using publishedAt from date-fns lib
//add readmore as a button

// import { useNavigation, useRoute } from '@react-navigation/native'
// import React, { useEffect } from 'react'
// import { Button, Image, Share, Text, TouchableOpacity, View } from 'react-native'
// import Color from '../Shared/Color';
// import { Ionicons } from '@expo/vector-icons';
// import { ScrollView } from 'react-native-gesture-handler';
// import * as WebBrowser from 'expo-web-browser';


// function ReadNews() {
//   const news=useRoute().params.news;
//   useEffect(()=> {
//       console.log(news)

//   },[])

//   const navigation = useNavigation();

//   const shareNews = ()=>{
//     Share.share({
//       message:news.title+"\n"+news.url
//     })
//   }

//   return (

//     <View style={{backgroundColor:Color.white, flex:1}} >
//         <View style={{marginTop:10, marginBottom:10, display:'flex', flexDirection:'row',
//           justifyContent:'space-between'
//         }}>

//           <TouchableOpacity onPress={navigation.goBack}>
//           <Ionicons name="arrow-back" size={30} color="black" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={()=>shareNews()} >
//           <Ionicons name="share-social-sharp" size={30} color="black" /> 
//           </TouchableOpacity>

//         </View>

//         <ScrollView>
//         <Image source={{uri:news.urlToImage}} style={{width:'100%', height:300,
//           borderRadius:15}} />

//         <Text style={{marginTop:10, fontSize:27, fontWeight:'bold'}} > {news.title} </Text>
//         <Text style={{marginTop:10, fontSize:18, color:Color.primary}} > {news.source.name} </Text>
//         <Text style={{marginTop:10, fontSize:20, color:Color.gray,
//           lineHeight:27
//         }} > {news.description}</Text>

//         </ScrollView>

//         <TouchableOpacity onPress={()=>WebBrowser.openBrowserAsync(news.url)} >
//         <Button style={{marginTop:10, fontSize:18, color:Color.primary, 
//           fontWeight:'bold'}} title='Read More'> </Button>
//         </TouchableOpacity>
//     </View>
//   )  
// }
 
// export default ReadNews

import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Button, Image, Share, Text, TouchableOpacity, View } from 'react-native'
import Color from '../Shared/Color';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

function ReadNews() {
  const news = useRoute().params.news;
  useEffect(() => {
    console.log(news)
  }, [])

  const navigation = useNavigation();

  const shareNews = () => {
    Share.share({
      message: news.title + "\n" + news.url
    })
  }

  return (
    <View style={{backgroundColor: Color.white, flex: 1}}>
      <View style={{
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={shareNews}>
          <Ionicons name="share-social-sharp" size={30} color="black" /> 
        </TouchableOpacity>
      </View>

      <ScrollView>
        <Image 
          source={{uri: news.urlToImage}} 
          style={{width: '100%', height: 300, borderRadius: 15}} 
        />
        <Text style={{marginTop: 10, fontSize: 27, fontWeight: 'bold'}}>
          {news.title}
        </Text>
        <Text style={{marginTop: 10, fontSize: 18, color: Color.primary}}>
          {news.source.name}
        </Text>
        <Text style={{
          marginTop: 10,
          fontSize: 20,
          color: Color.gray,
          lineHeight: 27
        }}>
          {news.description}
        </Text>
      </ScrollView>

      <Button 
        onPress={() => WebBrowser.openBrowserAsync(news.url)}
        title="Read More"
        color={Color.primary}
      />
    </View>
  )  
}
 
export default ReadNews