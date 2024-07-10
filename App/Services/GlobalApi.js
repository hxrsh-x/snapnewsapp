import { create } from 'apisauce';

const api = create({
  baseURL: 'https://newsapi.org/v2',
})

const apiKey = 'apiKey=0cbe40424a4641359c7c62d55dd01f05'

const country = 'country=in&'

const category = 'category=business&'

const getTopHeadline=api.get('/top-headlines?'+country+apiKey)
const getByCategory=(category)=>api.get('/everything?q='+category+"&apiKey=0cbe40424a4641359c7c62d55dd01f05")

export default {
  getTopHeadline, getByCategory
}
