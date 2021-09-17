
import { View, Text, TextInput, TouchableOpacity, ScrollView,StyleSheet } from "react-native";
import React ,{useState} from "react";
import Icon from "react-native-vector-icons/Entypo";
import Icon1 from "react-native-vector-icons/Fontisto";
import Icon2 from "react-native-vector-icons/AntDesign";
import { signup } from "../config/action";


function SignUp({navigation}) {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [name , setName] = useState('')
    const [age , setAge] = useState('')
    let work = ()=>{
        let data = {
            email,
            name,
            password,
            age
        }
        if(email === ''){
            alert('Enter email')
        }else if(password === ''){
            alert('please enter password')
        }else if(name === ''){
            alert('Enter the name')
        }else if(age == ''){
            alert('Enter the age')
        }else{
 signup(data,{navigation})
        }
    }
    return (
       
<View style={{ flex: 1 }}>

            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <Icon name='add-user' size={110} color='green' />
                </View>

            </View>


            <View style={{ flex: 5, }}>

                <View style={{ alignItems: 'center' }}>

                    <View style={style.input1Div}>
                        <Icon name='user' size={30} color='green' />
                        <TextInput style={style.inputText} onChangeText={(e)=> setName(e)} placeholder='Enter the username' />
                    </View>
                    <View style={style.inputDiv}>
                        <Icon2 name='questioncircle' size={30} color='green' />
                        <TextInput keyboardType={'number-pad'} style={style.inputText} onChangeText={(e)=> setAge(e)} placeholder='Enter the age' />
                    </View>
                    <View style={style.inputDiv}>
                        <Icon1 name='email' size={30} color='green' />
                        <TextInput keyboardType={'email-address'}  style={style.inputText} onChangeText={(e)=> setEmail(e)} placeholder='Enter the email' />
                    </View>
                    <View style={style.inputDiv}>
                        <Icon1 name='locked' size={30} color='green' />
                        <TextInput style={style.inputText}  onChangeText={(e)=> setPassword(e)} placeholder='Enter the password' />
                    </View>
                </View>

                <View style={{ alignItems: 'center',marginTop:35 }}>
                    <TouchableOpacity style={style.signUpDiv} onPress={work}>
                        <Text style={style.signUpText}>SignUp</Text>
                    </TouchableOpacity>
                    <View style={{marginTop:20}}>
                        <TouchableOpacity onPress={()=>navigation.navigate('LogIn')}>
                            <Text style={{fontSize:15}}>Already have an account?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>

     
    )
}

export default SignUp;

const style = StyleSheet.create({
    inputDiv:{
        flexDirection: 'row', 
        borderBottomWidth: 2, 
        width: '80%',
         borderColor: 'green',
         marginTop: 20
    },
    input1Div:{
        flexDirection: 'row',
         borderBottomWidth: 2,
          width: '80%', 
          borderColor: 'green'
    },
    inputText:{
        paddingVertical: 2,
         paddingHorizontal: 13,
          fontSize: 15
    },
    signUpText:{
        paddingVertical: 2,
         paddingHorizontal: 13, 
         fontSize: 15
    },
    signUpDiv:{
        backgroundColor: 'green',
        width:'60%', 
        alignItems:'center',
        paddingVertical:8
    }

})