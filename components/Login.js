import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, StatusBar,
  TextInput, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Font } from 'expo'

export default class Login extends Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-light': require('../assets/fonts/OpenSans-Light.ttf'),
      'open-sans-semi-bold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
      'open-sans-regular': require('../assets/fonts/OpenSans-Regular.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                {
                  this.state.fontLoaded ? (
                    <View style={styles.titleContainer}>
                      <Text style={{ fontFamily: 'open-sans-semi-bold', fontSize: 24, color: '#989898' }}>
                        Welcome to Piccup!
                      </Text>
                    </View>
                  ) : null
                }
              <View style={styles.logoContainer}>
                {
                  this.state.fontLoaded ? (
                    <View style={styles.subTitleContainer}>
                      <Text style={{ fontFamily: 'open-sans-regular', fontSize: 14, color: '#989898' }}>
                        the home of
                      </Text>
                    </View>
                  ) : null
                }
                <Image 
                  style={styles.logo}
                  source={require('../images/efc.png')}
                  resizeMode='contain'
                >
                </Image>
              </View>
              <View style={styles.loginContainer}>
                <View style={styles.inputWrapper}>
                  <TextInput style={styles.input}
                    multiline = {true}
                    numberOfLines = {1}
                    placeholder='Email'
                    placeholderTextColor='#989898'
                    keyboardType='email-address'
                    returnKeyType='next'
                    autoCorrect={false}
                    onSubmitEditing={()=> this.refs.txtPassword.focus()}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <TextInput style={styles.input} 
                    multiline = {true}
                    numberOfLines = {1}
                    placeholder='Password'
                    placeholderTextColor='#989898'
                    returnKeyType='go'
                    secureTextEntry={true}
                    ref={"txtPassword"}
                  />
                </View>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity style={styles.buttonContainerWhite}>
                    {
                      this.state.fontLoaded ? (
                        <Text style={styles.buttonTextGreen}>Join</Text>
                      ) : null
                    }
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonContainerGreen}>
                    {
                      this.state.fontLoaded ? (
                        <Text style={styles.buttonTextWhite}>Login</Text>
                      ) : null
                    }
                  </TouchableOpacity>
                </View>
              </View>
                {
                  this.state.fontLoaded ? (
                    <View style={styles.textContainer}>
                      <Text style={{ fontFamily: 'open-sans-light', fontSize: 12, textAlign: 'center', color: '#989898' }}>
                        By using Piccup you agree to our Terms of Service and Privacy Policy.
                      </Text>
                    </View>
                  ) : null
                }
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 40,
    marginTop: 30,
    marginBottom: 45,
    paddingHorizontal: 30
  },
  subTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 25,
    // marginTop: 30,
    marginBottom: 15,
    paddingHorizontal: 30    
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 40,
    marginTop: 30,
    marginBottom: 35,
    paddingHorizontal: 50
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 80,
    marginBottom: 70
  },
  logo: {
    width: '84%',
    height: 60
  },
  loginContainer: {
    paddingHorizontal: 40,
    maxHeight: 200
  },
  inputWrapper: {
    borderBottomColor: '#989898',
    borderBottomWidth: 0.5,
    paddingHorizontal: 5,
    height: 50
  },
  input: {
    height: 40,
    marginTop: 20,
    color: '#989898'
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 70,
    paddingHorizontal: 10
  },
  buttonContainerWhite: {
    backgroundColor: 'white',
    paddingVertical: 10,
    width: '47%',
    height: 40,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#1DE52A',
    shadowColor: 'darkgray',
    shadowOpacity: 5.0,
    elevation: 10,
    shadowRadius: 1,
    shadowOffset : { width: 2, height: 2}
  },
  buttonContainerGreen: {
    backgroundColor: '#1DE52A',
    paddingVertical: 10,
    width: '47%',
    height: 40,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#1DE52A',
    shadowColor: 'darkgray',
    shadowOpacity: 5.0,
    elevation: 10,
    shadowRadius: 1,
    shadowOffset : { width: 2, height: 2}
  },
  buttonTextGreen: {
    textAlign: 'center',
    fontSize: 14,
    color: '#1DE52A',
    fontFamily: 'open-sans-regular'
  },
  buttonTextWhite: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
    fontFamily: 'open-sans-regular'
  }
})