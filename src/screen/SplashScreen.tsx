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
    <View style={[commonStyles.container,{backgroundColor:'#435158'}]}>
        <Image style={{width:screenWidth * 0.94, height:screenHeight *0.44,borderRadius:12}} source={require('../assets/images/Dropmate_Icon_1024x1024.png')}/>
    </View>
  )
}

export default SplashScreen