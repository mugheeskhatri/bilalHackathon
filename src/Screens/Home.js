import React from "react";
import {View,Text} from 'react-native'
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

function Home(){
    const state = useSelector(state=>state)
    return(
        <View>
            <Text>Home</Text>
            <Icon name="pluscircleo" size={100} color="black" />
        </View>
    )
}

export default Home;