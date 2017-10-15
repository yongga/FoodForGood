import React from 'react';
import { StyleSheet, View, Text, Image, } from 'react-native';


export default class ProductDetailsRow extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <Image
              source={this.props.item.imageUrl}
              style={styles.logo} />
            <View style={styles.innerContainer}>
              <Text>{this.props.item.name}</Text>
              <Text>{this.props.item.expiry}</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={{fontSize: 30, marginRight: 30}}>{this.props.item.quantity}</Text> 
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  logo: {
    width: 150,
    height: 75,
    resizeMode: 'contain',
  },
});