import React from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';


export default class EventRow extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={() => this.props.onPress(this.props.item.id, this.props.item.eventTitle, this.props.item.eventDate, 
        this.props.item.eventVenue, this.props.item.totalCollection, this.props.item.venuePostalCode, this.props.item.organization)} underlayColor='transparent'>
        <View style={styles.container}>
            <Image
              source={this.props.item.imageUrl}
              style={styles.logo} />
            <View style={styles.innerContainer}>
              <Text>{this.props.item.eventTitle}</Text>
              <Text>{this.props.item.eventDate}</Text>
              <Text>{this.props.item.eventVenue}</Text>
              <Text style={{fontSize: 20}}>Donated: {this.props.item.totalCollection}</Text>
            </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  logo: {
    width: 150,
    height: 75,
  },
});