import React, { useState } from "react";
import { View,TouchableOpacity,Text } from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


function ImagePic(){
    const [image,setImage] = useState('')
   const picImage = ()=>{
    var options = {
        title: 'Select Image',
     };
     launchImageLibrary(options, response => {
        console.log('Response = ', response.assets[0].uri);
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          setImage(response.assets[0].uri)
        }
     });
   }
     return(
         <View>
             <TouchableOpacity onPress={picImage}><Text>Open Gallery</Text></TouchableOpacity>
         </View>
     )}

     export default ImagePic;
