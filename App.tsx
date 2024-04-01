import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React ,{useState} from 'react'
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength:Yup.number()
  .min(4,'Should be a minimum of 4 characters')
  .max(16, 'should be max of 16 characters')
  .required('Length is required')
})

const App = () => {
const [password,setPassword] = useState('');
const [ispasswordGenerated,setisPasswordGenerated] = useState(false);
const [lowerCase,setLowerCase]=useState(true)
const [upperCase,setUpperCase]=useState(false)
const [numbers,useNumbers]=useState(false)
const [symbols,useSymbols]=useState(false)
  return (
    <SafeAreaView>
    <View>
      <Text>App</Text>
    </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})