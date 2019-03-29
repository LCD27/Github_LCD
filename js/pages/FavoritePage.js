import React,{Component} from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

import{
  connect
} from 'react-redux'

import {
  testAction
} from '../actions/testAction'
import Toast from 'react-native-root-toast'

import {
  AppContainer,
  Button,
} from '../common'
/**
 * 收藏页面
 */
class FavoritePage extends Component{

  _onClick = ()=>{
    // NavigationUtil.navigate('MyPage')
    // this.props.navigation.navigate('HomePage')
    this.props.changTest('FavoritePage')
  }


  render(){
    console.warn(this.props)
    return <AppContainer style={styles.container}>
    <View style={{backgroundColor:'red',height:30,width:'100%'}}/>
      <Button textName={this.props.test} onClick = {this._onClick}/>
    </AppContainer>
  }
}

const mapStateToProps = state =>({
  test:state.test2
})

const mapDispatchToProps = dispatch => {
  return {
    changTest: test => dispatch(testAction(test))
  }
}
/**当不添加mapStateToProps时，不会更新当前的容器组件*/
export default connect(mapStateToProps,mapDispatchToProps)(FavoritePage)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    backgroundColor: '#F5FCFF',
  },
})
