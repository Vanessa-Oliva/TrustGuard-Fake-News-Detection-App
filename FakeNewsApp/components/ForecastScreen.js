import React from 'react';
import { VictoryPie, VictoryLegend } from 'victory-native';
import { ScrollView, View, Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';

const chartData = [
  { x: "Youtube", y: 75.9 },
  { x: "Facebook", y: 13.4 },
  { x: "Tiktok", y: 8.9 },
  { x: "Twitter", y: 1.8 }
];

const colors = ["#9F2B68", "#7F00FF", "#DA70D6", "#800080"];

const screenWidth = Dimensions.get('window').width;

const ForecastScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Prediction')} style={styles.headerText}><Text style={styles.buttonText}>DETECTOR</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.headerText}><Text style={styles.buttonText}>ABOUT US</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chart')} style={styles.headerText}><Text style={styles.buttonText}>Chart</Text></TouchableOpacity>
      </View>
      <Text style={styles.circleheader}>Percentage Distribution of online platforms based on the number of fake news recorded in the TrustGuard's database </Text>
    <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center',backgroundColor: 'black' }}>
      <VictoryPie
        data={chartData}
        colorScale={colors}
        width={screenWidth}
        height={screenWidth}
        labelComponent={<></>} // Use an empty component to hide labels
        innerRadius={30} // Optional inner radius to create a donut chart
      />
      <VictoryLegend
        x={50}
        y={10}
        centerTitle
        orientation="vertical"
        gutter={20}
        style={{ labels: { fontSize: 16, fill: 'white' } }}
        data={chartData.map((item, index) => ({
          name: `${item.x} - ${item.y}%`,
          symbol: { fill: colors[index] },
        }))}
      />
    </ScrollView>
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
      buttonText: {
        color: '#fff', 
        fontSize: 16, 
        fontWeight: 'bold', 
      },
      circleheader: {
        color: '#FFF', 
        fontSize: 15, 
        marginTop: 50,
        paddingHorizontal: 20, 
        textAlign: 'center',
        fontWeight: 'bold'
      },
});
export default ForecastScreen;