import Navigation from './src/navigation/Navigation'
import React,{useEffect} from 'react' 
import { Platform } from 'react-native'
import { requestPhotoPermission } from './src/utils/Constants'
import { checkFilePermissions } from './src/utils/libraryHelpers'
const App = () => {
   useEffect(()=>{
          requestPhotoPermission(); //storage acess permision for ios
          checkFilePermissions(Platform.OS); //storage acess permission for android
      })
  return (
    <Navigation/>
  )
}

export default App