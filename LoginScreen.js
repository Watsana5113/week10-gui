import React, { Component} from "react";
import { StyleSheet, Text, View ,TextInput, TouchableOpacity} from "react-native";

export default class LoginScreen extends Component{
    render(){
        return(
            <View style={{ stylescontainer}}>
                {/* Welcome Back */}
                <Text style={{
                     fontSize:25,
                      marginTop: 20
                      }}>Welcome Back</Text>
                <Text style={{
                     fontSize: 16,
                      color: 'gray',
                       marginTop:20
                       }}>Sign in to continue</Text>
                
                {/* Form Login */}
                <TextInput
                 style={{
                      marginTop: 40,
                       backgroundColor:'#add',
                       borderBottomWidth: 1,
                       paddingBottom:20,
                       }}
                           placeholder= 'Password'
                    >
                       </TextInput>

                       {/* Login Now */} 
                       <View style={{ alignItems: 'center',justifyContent: 'center',marginTop:40}}>
                           <TouchableOpacity style={{
                               width: 200,backgroundColor: '#0d47a1',
                               padding: 10, alignItems: 'center',
                               justifyContent: 'center',borderRadius: 40,
                               marginTop: 30,
                           }}>
                               <Text style={{
                                    textAlign: 'center',color: '#ffffff',
                                    fontSize: 16
                                    }}>Login Now</Text>
                           </TouchableOpacity>
                            <Text style={{marginTop:20}}>Forgot Password</Text>

                            {/* Social Media */}
                            <View style={{ flexDirection: 'row', marginTop: 40}}>
                            <View style={{
                 height: 50,
                  width:50,
                   borderRadius:50/2,
                    backgroundColor: '#4dd2ff',
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}>
                <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff',marginBottom:5}}>f</Text>
              </View>

              <View style={{
                 height: 50,
                  width:50,
                   borderRadius:50/2,
                    backgroundColor: '#ff3333',
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}>
                <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff',marginBottom:5}}>G</Text>
              </View>

              <View style={{
                 height: 50,
                  width:50,
                   borderRadius:50/2,
                    backgroundColor: '#b84dff',
                    justifyContent: 'center',
                    }}>
                <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff',marginBottom:5}}>In</Text>
              </View>
                            </View>
                            {/* Forgot Sign UP */}
                            <View style={{ flexDirection: 'row', marginTop: 20}}>
                                <Text style={{color: 'gray'}}>Don't have an account</Text>
                                <Text style={{fontWeight: 'bold'}}>Sign UP</Text>
                            </View>
                       </View>

                      
            </View>
        )
    }
}
const styles= StyleSheet.create({
    cotainer:{
        flex:1,
        backgroundColor : '#ffffff',
        padding: 20,

    }
})