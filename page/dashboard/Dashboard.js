import React from 'react'
import { Keyboard, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function Dashboard({navigation}) {

  const goToTicket = () => {
    navigation.navigate('Ticket')
  }

  const goToProfile = () => {
    navigation.navigate('Profile')
  }
  
  return (
      <View
        style={styles.viewMain}>
        <View style={styles.view}>
          <View style={styles.viewIcons}>
            <Icon name="ticket" size={100} color="pink" onPress={goToTicket} />
            <Text style={styles.Text}> Ticket </Text>
          </View>
          <View style={styles.viewIcons}>
            <Icon name="user" size={100} color="pink" onPress={goToProfile} />
            <Text style={styles.Text}> Profile </Text>
          </View>
          <View style={styles.viewIcons}>
            <Icon name="power-off" size={100} color="pink" />
            <Text style={styles.Text}> Log Out </Text>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  Text: {
    color : 'black'
  },
  viewMain: {
    paddingTop: 50,
    paddingHorizontal : 5,
  },
  view: {
    flexDirection : 'row'
  },
  viewIcons: {
    flexDirection : 'column',
    paddingHorizontal : 20,
    alignItems : 'center'
  },
})

export default Dashboard