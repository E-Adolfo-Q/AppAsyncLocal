/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { 
  Text,
  View,
  TextInput,
  AsyncStorage,
  ListView,
  TouchableOpacity 
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ItemList from './ItemList';
import styles from './style';

class HomeView extends Component {

constructor(props){
 super(props)
 const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});  
 this.state = {    
   text:'',
   items: [],
   listView: []
 }
}

componentWillMount() {
  this.getStoreItems();
}

getStoreItems = async () => {
  try{
   const value = await AsyncStorage.getItem('items');     
   if(value !== null){    
     const items = JSON.parse(value);     
     this.handleState(items,items);
   }
  }catch(error){
    console.log(error)
  }
}

handleChangeText = (text) => this.setState({text})
 
handleSend = () => {
  const { text, items } = this.state; 
  if(!text) return 
  const newItems = [
    ... items,
    { 
      key:Date.now(),
      text:text      
    }
  ]
  this.handleState(newItems,newItems,{text:''});
}

handleState =  async (items, listView, obj = {}) => {
  this.setState({
     items,
     listView,
      ...obj
  })
  try{
    await AsyncStorage.setItem('items',JSON.stringify(items));
  }catch(error){
    console.log(error);
  }
}

handleRemoveItem = (key) => {  
  const { items } = this.state;  
  const newItems = items.filter((item) => item.key != key);
  this.handleState(newItems,newItems)
}
 render(){   
  return(            
    <View style={styles.container}>
       <ItemList 
            listView={this.state.listView}
            onRemoveItems={this.handleRemoveItem}/>
       <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          value={this.state.text}
          placeholder="Agregar un Elemento"
          onChangeText={this.handleChangeText}
        />
        <TouchableOpacity onPress={this.handleSend}>
           <Icon name="ios-send-outline" size={30} color="gray" />
        </TouchableOpacity>
       </View>
    </View>
  ); 
 }  
}

export default HomeView;