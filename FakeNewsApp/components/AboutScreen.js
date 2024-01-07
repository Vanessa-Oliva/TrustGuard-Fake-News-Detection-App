import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const AboutScreen = ({navigation}) => {
  return (
    <View View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Prediction')} ><Text style={styles.buttonText}>DETECTOR</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('About')} ><Text style={styles.buttonText}>ABOUT US</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chart')}><Text style={styles.buttonText}>CHART</Text></TouchableOpacity>
      </View>
      <View style={styles.logocontainer}>
      <Image
        source={require('C:/Users/LENOVO/Pictures/EmergingTech-master/FakeNewsApp/assets/logo2.png')}
        style={styles.logo}/>
      </View>
      <Text style={styles.headerText}>TrustGuard is an advanced fake news detection system designed to safeguard you from misinformation and manipulation. Using AI algorithms, it scans news articles and content to determine their accuracy and credibility. With real-time analysis and user-friendly alerts, TruthGuard empowers you to make informed decisions and protect your information ecosystem from the proliferation of fake news. Stay vigilant, stay informed, and trust TruthGuard to separate fact from fiction in today's complex information landscape.</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      height: '100%',
      width: '100%',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-around', 
      backgroundColor: 'black',
      padding: 50,
      paddingBottom: 0, 
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
        padding: 20,
        textAlign: 'justify',
        fontSize: 15,
    },
    logocontainer:{
    padding: 0,
    },
    logo: {
        width: 300,
        height: 200,
        resizeMode: 'contain', 
        marginLeft: 30,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff', 
        fontSize: 16, 
        fontWeight: 'bold', 
    },
});

export default AboutScreen; 