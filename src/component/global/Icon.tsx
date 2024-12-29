import { View, Text } from 'react-native'
import React,{FC} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {RFValue} from 'react-native-responsive-fontsize'

interface IconProps {
  Color?:string,
  size:number,
  name:string,
  iconFamily:'MaterialCommunityIcons' | 'MaterialIcons' | 'Ionicons';
}


const Icon:FC<IconProps> = ({Color,size,name,iconFamily}) => {
  return (
   <>
    {iconFamily === 'Ionicons' && <Ionicons name={name} color={Color} size={RFValue(size)} />}
    {iconFamily === 'MaterialCommunityIcons' && <MaterialCommunityIcons name={name} color={Color} size={RFValue(size)} />}
    {iconFamily === 'MaterialIcons' && <MaterialIcons name={name} color={Color} size={RFValue(size)} />}
   </>
  )
}

export default Icon