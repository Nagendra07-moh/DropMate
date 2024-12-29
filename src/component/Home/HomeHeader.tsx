import { View, Text,SafeAreaView,TouchableOpacity, Image } from 'react-native'
import React,{FC} from 'react'
import { homeHeaderStyles } from '../../styles/homeHeaderStyles'
import { commonStyles } from '../../styles/commonStyles'
import Icon from '../global/Icon'
import Svg,{Path,Defs,LinearGradient,Stop} from 'react-native-svg'
import { screenHeight, screenWidth } from '../../utils/Constants'





const HomeHeader = () => {
  return (
    <View style={homeHeaderStyles.mainContainer}>
      <SafeAreaView/>
      <View style={[commonStyles.flexRowBetween,homeHeaderStyles.container,{height:screenHeight * 0.07}]}>
        <TouchableOpacity>
          <Icon iconFamily='Ionicons' name='menu' size={22} Color='#fff'/>
        </TouchableOpacity>
        <Image source={require('../../assets/icons/Dropmate.png')} style={homeHeaderStyles.logo}/>
        <TouchableOpacity onPress={() => {}}>
            <Image source={require('../../assets/images/profile.jpg')}  style={homeHeaderStyles.profile}/>
        </TouchableOpacity>
      </View> 

      {/* Svg Starts Here! */}
      <Svg 
      height={screenHeight *0.18}
      width={screenWidth}
      viewBox='0 0 1140 220'
      style={homeHeaderStyles.curve}
      >
        <Defs>
          {/* <LinearGradient */}
        </Defs>

      </Svg>

    </View>
  )
}

export default HomeHeader