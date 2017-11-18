import React,{ Component } from 'react';
import {
    Text,
    View,   
    TouchableWithoutFeedback,
    Animated,
    Alert
} from 'react-native';

import styles from './style';

const ACTION_TIMER = 400;

class Item extends Component{

 state = {
  pressAction: new Animated.Value(0),
 }

componentWillMount(){
  const { pressAction } = this.state;
  this._value = 1;
  pressAction.addListener((v) => this._value = v.value);   
}

pressIn  = () => {
  const { pressAction } = this.state;
  Animated.timing(pressAction,{
      duration: ACTION_TIMER,
      toValue: 1
  }).start(this.animationActionComplete)
}

animationActionComplete = () => {
 const message = '¿Seguro que quiere eliminarlo?';
 if(this._value === 1){
   Alert.alert(
     'Eliminar',
      message,
      [
        {
          text: 'Borrar',
          onPress: this.borrar   
        },
        {
          text: 'Cancelar',
          onPress:null
        }
      ]
   );
 }
}

borrar = () => {
  const {remove,text} = this.props;  
  remove(text.key)
}

render(){
 const { text } = this.props; 
 return(   
  <TouchableWithoutFeedback 
    onPressIn={this.pressIn}
    onPressOut={this.onPressOut} 
  >
  <View style={styles.item}>
    <Text style={styles.textitem}>{text.text}</Text>
  </View>
  </TouchableWithoutFeedback> 
  )
 }
}

export default Item;