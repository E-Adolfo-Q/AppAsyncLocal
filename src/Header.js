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
  TouchableHighlight 
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style';

const Header = (props) => (
    <View style={styles.headerContainer}>
      <TouchableHighlight 
         onPress={props.menu}
         style={styles.contentButtonMobile}
         underlayColor="transparent"
        >
        <Icon name="ios-menu" size={30} color="#fff"/>
      </TouchableHighlight>        
      <Text style={styles.textHeader}>{props.title}</Text>
    </View>
)

export default Header;