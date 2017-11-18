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
  ScrollView,
  Image,
  DrawerLayoutAndroid 
} from 'react-native';

import Header from './Header';
import Home from './HomeView';
import styles from './style';

export default class DrawerLayoutView extends Component<{}> {

 openDrawer = () => { 
  this.refs['DRAWER'].openDrawer();
 }
 
 closeDrawer = () => {
   this.refs['DRAWER'].closeDrawer();
 }

  render() {
    const navigationView = (
    <View style={styles.dwView}>
      <ScrollView>
         <View style={styles.header}>
            <Image source={require('./imagen/iconUser.png')}  style={styles.iconImage}/>
            <Text style={styles.headerText}>user@localhost.com</Text>
         </View>
         <View style={styles.contentLink}>            
            <Text style={styles.dwItem}>Perfil</Text>
            <Text style={styles.dwItem}>Amigos</Text>
            <Text style={styles.dwItem}>Mensajes</Text>
            <Text style={styles.dwItem} onPress={this.closeDrawer}>Salir</Text>
         </View>
      </ScrollView>   
     </View> 
    );  
    return (
      <DrawerLayoutAndroid 
         drawerWidth={300}
         drawerPosition={DrawerLayoutAndroid.positions.Left}
         renderNavigationView={() => navigationView}
         ref={'DRAWER'}
      >
        <Header title="Header Mobile" menu={this.openDrawer} />       
        <Home />         
      </DrawerLayoutAndroid>
    );
  }
}

