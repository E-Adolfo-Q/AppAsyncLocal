import {   
    StyleSheet,    
  } from 'react-native';

const styles = StyleSheet.create({    
    
    /*estilo componente HomeView*/
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',       
     },
     welcome:{
        fontSize:15,
        color:'#000'
     },
     inputContainer:{   
       height:50,
       backgroundColor:'white',
       paddingHorizontal:10,
       flexDirection:'row',
       alignItems:'center'   
     },
     input:{
       height:50,
       flex:1
     },
     /*fin del estilos HomeView*/
     
     /*estilos componente DrawerLayoutView*/
     header:{
        height:120,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffb300',
        paddingTop:20,
        paddingBottom:20,
       },
       headerText:{
        color:'white',
        fontSize:14
       },
       dwView: {
         flex: 1,      
         backgroundColor:'#2c3849',
       },
       dwItem:{
         margin:10,
         fontSize:15,
         color:'#fff',
         textAlign:'left'  
       },
       iconImage: {
         width: 80,
         height: 80,
         borderRadius:100
       },
       contentLink:{
         marginTop:30,
         alignItems:'center'
       },
       /* fin del estilos componente DrawerLayoutView*/

       /*estilos componente header*/
       headerContainer:{
        backgroundColor:'#ffb300',
        flexDirection:'row',
        paddingHorizontal:20, 
        height:50    
       }, 
       textHeader:{
        color:'#fff',
        fontSize:16,
        marginHorizontal:80,      
        alignSelf: 'center'  
       },
       contentButtonMobile:{
        alignSelf: 'center' 
       },
       /*fin del estilos componente header*/

       /*estilos componente ItemList*/
       MainContainer: {
        flex:1, 
        flexDirection:'row',        
        margin:10,              
      },
      /*fin del estilos componente ItemList*/

      /*estilos componente Item*/
      item:{
        backgroundColor:'#2c3849',        
        padding: 10,
        margin: 10,
        borderRadius: 5,       
        alignItems:'center'
      },
      textitem:{           
        fontSize:16,
        color:'#fff'
      }
      /*fin estilo componente Item*/
     
  });

  export default styles