// App.js
import { StatusBar } from 'expo-status-bar'
import { View, SafeAreaView } from 'react-native'
// import { products } from './utils/products'

export default function App() {
  return (
    <View className='flex-[1] bg-white pt-8'>
      <StatusBar style="auto" />
      <SafeAreaView />
    </View>
  )
}