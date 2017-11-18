/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList 
} from 'react-native';

import Item from './Item';
import styles from './style';

class ItemList extends Component {

  FlatListItemSeparator = () => {
    return(
      <View 
       style={{
         height:1,
         width:"100%",
         backgroundColor:'#607D8B'
       }}
      />      
    )
  } 

  _renderItem = ({item}) => {
    return(
      <Item
         key={item.key}       
         remove={this.props.onRemoveItems}
         text={item} 
     />
    )
  }


 render(){
  return(            
   <View style={styles.MainContainer}>
    <FlatList      
        data={this.props.listView}
        renderItem={this._renderItem}
        ItemSeparatorComponent={this.FlatListItemSeparator}   
    />
   </View>
  ); 
 }  
}

export default ItemList;