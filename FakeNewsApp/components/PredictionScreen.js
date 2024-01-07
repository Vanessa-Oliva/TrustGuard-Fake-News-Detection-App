import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import axios from 'axios';

const PredictionScreen = ({ navigation }) => {
  const [newsText, setNewsText] = useState('');
  const [lrPrediction, setLrPrediction] = useState('');
  const [dtPrediction, setDtPrediction] = useState('');
  const [Probability, setProbability] = useState('');

  const handlePrediction = () => {
    axios.post('http://192.168.1.7:5000/predict', { news_text: newsText })
      .then(response => {
        setLrPrediction(response.data.LR_Prediction);
        setDtPrediction(response.data.DT_Prediction);
        setProbability(parseFloat(response.data.Probability).toFixed(2));
        navigation.navigate('Results', {
          lrPrediction: response.data.LR_Prediction,
          dtPrediction: response.data.DT_Prediction,
          Probability: parseFloat(response.data.Probability).toFixed(2),
          newsText
        });
      })
      .catch(error => {
        console.error('Error making prediction:', error);
      });
  }

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Prediction')} style={styles.headerText}><Text style={styles.buttonText}>DETECTOR</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.headerText}><Text style={styles.buttonText}>ABOUT US</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chart')} style={styles.headerText}><Text style={styles.buttonText}>CHART</Text></TouchableOpacity>
      </View>
      <View style={styles.logocontainer}>
      <Image
        source={require('C:/Users/LENOVO/Pictures/EmergingTech-master/FakeNewsApp/assets/logo2.png')}
        style={styles.logo}/>
      </View>
        <TextInput
          style={styles.input}
          placeholder="Enter the news text"
          multiline
          value={newsText}
          onChangeText={text => setNewsText(text)}
        />
      <TouchableOpacity style={styles.button} onPress={handlePrediction}>
      <Text style={styles.buttonText}>PREDICT</Text>
    </TouchableOpacity>
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
  },
  input: {
    height: 150, 
    marginLeft: 10,
    marginRight: 10,  
    borderWidth: 1, 
    borderColor: '#9366b4', 
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: 'white', 
    alignItems: 'center',

  },
  logocontainer:{
    alignItems: 'center',
    paddingBottom: 0,
    marginBottom: 0,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain', 
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#4B0082', 
    padding: 15,
    borderRadius: 5,
    margin: 10, 
    alignItems: 'center',  
    justifyContent: 'center', 
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16, 
    fontWeight: 'bold', 
  },
});

export default PredictionScreen;