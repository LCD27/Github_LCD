import React,{Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Easing,
  Platform,
  ScrollView,
} from 'react-native'
import {
  AppContainer,
  Button
} from '../common'


import{
  LCDAnimated,
  LCDAnimatedScrollDemo,
  LCDAnimatedGesture,
  LCDFlatList,
  LCDGesture,
  LCDGesture2,
  LCDGesture3,
} from '../practises'

export default class PractisePage extends Component{
  constructor(props){
    super(props)

  }

  _onClick=()=>{

  }

  render(){

    const MyButton = Button.getButton;
    return <AppContainer style={styles.container}>
     {/*<LCDAnimated/>*/}
     {/*<LCDAnimatedScrollDemo/>*/}
     {/*<LCDAnimatedGesture/>*/}
     {/*<LCDFlatList/>*/}
     {/*<LCDGesture/>*/}
     {/*<LCDGesture2/>*/}
     <View style={{height:30,width: '100%'}}/>
     <LCDGesture3/>
    </AppContainer>
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  content: {
    backgroundColor: 'rgba(200, 230, 255, 0.8)',
    marginBottom:10,
    justifyContent:"center",
    alignSelf:"center",
  },
  button: Platform.select({
    ios: {},
    android: {
      elevation: 4,
      // Material design blue from https://material.google.com/style/color.html#color-color-palette
      backgroundColor: '#2196F3',
      borderRadius: 2,
      width:100,
      height:30,
    },
    justifyContent:"center",
    alignSelf:"center",
  }),
  buttonText: {
    alignSelf:"center",
  }
})
