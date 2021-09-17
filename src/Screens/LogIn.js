
import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { login , onFacebookButtonPress , forgot } from "../config/action";

function LogIn({navigation}) {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    let work = ()=>{
        let data = {
            email,
            password
        }
if(email === ''){
    alert('enter email')
}else if(password === ''){
    alert('enter password')
}else{
    login(data,{navigation})
}
    }

    let forgetPass = ()=>{
        let data = {
            email
        }
        forgot(data)
    }



    return (
        <ScrollView>
            <View style={style.main}>

                <View style={style.mainTextDivv}>
                    <Icon name='login' size={100} color='green' />
                    <View style={style.mainTextDiv}>
                        <Text style={style.mainText}>Login</Text>
                    </View>
                </View>

                <View style={style.inputMain}>

                    <View style={style.inputDiv}>
                        <Icon1 name='email' size={30} color='green' />
                        <TextInput keyboardType={'email-address'} style={style.input}  onChangeText={(e)=> setEmail(e)} placeholder='Enter the email' />
                    </View>
                    <View style={style.inputDiv}>
                        <Icon1 name='locked' size={30} color='green' />
                        <TextInput style={style.input} onChangeText={(e)=> setPassword(e)} placeholder='Enter the password' />
                    </View>
                    <View style={style.btnDivv}>
                        <TouchableOpacity style={style.login} onPress={work}>
                            <Text style={style.loginText}>Login</Text>
                        </TouchableOpacity>
                    </View>


                </View>
                <View style={style.btnDiv}>
                    <View style={style.forgotDiv}>
                        <TouchableOpacity onPress={forgetPass}>
                            <Text style={style.forgotText}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.socialDivv}>

                        <View style={style.or}>
                            <Text style={style.orText}>or</Text>
                        </View>

                        <View style={style.socialmain}>
                            <View style={style.socialDiv}>
                                <TouchableOpacity>
                                <Icon2 name='googleplus' size={45} color='red' />
                                </TouchableOpacity>
                            </View>
                            <View style={style.socialDiv}>
                            <TouchableOpacity onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}>
                                <Icon name='facebook-with-circle' size={45} color='blue' />
                                </TouchableOpacity>
                            </View>
                            <View style={style.socialDiv}>
                            <TouchableOpacity>
                                <Icon2 name='twitter' size={45} color='skyblue' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={style.createAccount}>
                        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                            <Text style={style.createAccountText}>Create an account</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}


export default LogIn;

const style = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    mainText: {
        color: 'green',
        fontSize: 34,
    },

    mainTextDivv: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35
    },

    mainTextDiv: {
        marginTop: 15,
    },

    inputMain: {
        alignItems: 'center',
        flex: 1,
        width: '100%'



    },

    inputDiv: {
        width: '80%',
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: 'green',
        marginTop: 25,

    },

    input: {
        width: '90%',
        fontSize: 16,
        paddingVertical: 3,
        paddingHorizontal: 10
    },

    btnDivv: {
        width: '80%',
        alignItems: 'center',
        marginTop: 25
    },

    login: {
        backgroundColor: 'green',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
    },

    loginText: {
        color: 'white',
        fontSize: 20
    },

    btnDiv: {
        flex: 1,
        width: '100%',

    },

    forgotDiv: {
        marginTop: 25,
        alignItems: 'center',
    },

    forgotText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'green'
    },

    socialDivv: {
        marginTop: 5
    },

    socialmain: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },

    or:{
        alignItems:'center',
        marginTop:5
    },

    orText:{
        fontSize:25
    },

    socialDiv: {
        marginHorizontal: 8
    },

    createAccount:{
        alignItems:'center',
        marginTop:15
    },

    createAccountText:{
        fontSize:18
    }
})