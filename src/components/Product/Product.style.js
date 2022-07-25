import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1E1E1',
  },
  image: {
    width: '90%',
    margin:10,
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
    resizeMode: 'contain',
    backgroundColor:'white',
  },
  inner_container: {
    padding:20,
    flex: 1,
    flexDirection:'column',
    color:'#dcdcdc',
    
  },
  title_text:{
    color:"#000000",
   fontSize:20,
 fontWeight:'bold',
 margin:10,

  },
  price:{
    color:"#191970",
    fontSize:20,
    margin:10,
  }
});
