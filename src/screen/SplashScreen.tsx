import { View, Text, Platform, Image } from 'react-native'
import React,{useEffect,FC} from 'react' 
import { navigate } from '../utils/NavigationUtil'
import { commonStyles } from '../styles/commonStyles'
import { Colors,screenWidth,screenHeight } from '../utils/Constants'

const SplashScreen:FC = () => {
   
    const navigateToHome = () =>{
        navigate('HomeScreen')
    }

    useEffect(()=>{
        const timeoutId = setTimeout(navigateToHome,1200);
        return () => clearTimeout(timeoutId)
    },[])
  return (
    <View style={[commonStyles.container,{backgroundColor:'#435158',flex:1}]}>
        <Image style={{width:screenWidth * 0.98, height:screenHeight *0.44}} source={require('../assets/images/DropmateLogo.png')}/>
    </View>
  )
}

export default SplashScreen