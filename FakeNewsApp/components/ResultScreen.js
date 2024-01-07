import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ResultScreen = ({ route, navigation }) => {
    const { lrPrediction, dtPrediction, newsText, Probability } = route.params;
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Prediction')} style={styles.headerText}><Text style={styles.buttonText}>DETECTOR</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.headerText}><Text style={styles.buttonText}>ABOUT US</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chart')} style={styles.headerText}><Text style={styles.buttonText}>CHART</Text></TouchableOpacity>
        </View>
        <Text style={styles.circleheader}>Real News Percentage </Text>
        <View style={styles.circle}>
          <Text style={styles.percent}>{Probability}%</Text>
        </View>
        <Text style={styles.article}>{newsText}</Text>
        <Text style={styles.LR_predict}>LR PREDICTION: {lrPrediction}</Text>
        <Text style={styles.DT_predict}>DT PREDICTION: {dtPrediction}</Text>
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
    },
    headerText: {
      color: 'white',
      fontWeight: 'bold',
    },
    circleheader: {
      color: '#FFF', 
      fontSize: 18, 
      marginTop: 20,
      paddingHorizontal: 20, 
      textAlign: 'center',
    },
    circle: {
      width: 150, 
      height: 150, 
      borderRadius: 75, 
      borderWidth: 10, 
      borderColor: '#8A2BE2', 
      alignItems: 'center', 
      justifyContent: 'center', 
      marginTop: 30, 
      paddingLeft: 10,
      marginBottom: 10,
      marginLeft: 120,
      backgroundColor: '#dcdcdc',
    },
    percent: {
      color: 'black', 
      fontSize: 35, 
      fontWeight: 'bold',
    },
    article: {
      color: '#FFF', 
      fontSize: 15, 
      marginTop: 20,
      paddingHorizontal: 20, 
      textAlign: 'justify', 
    },
    LR_predict: {
      color: '#8A2BE2', 
      fontSize: 18, 
      fontWeight: '600', 
      marginTop: 20, 
      paddingHorizontal: 20, 
    },
    DT_predict: {
      color: '#8A2BE2', 
      fontSize: 18, 
      fontWeight: '600', 
      marginTop: 10, 
      paddingHorizontal: 20, 
    },
    buttonText: {
      color: '#fff', 
      fontSize: 16, 
      fontWeight: 'bold', 
    },
  });

  export default ResultScreen;

