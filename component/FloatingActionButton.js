import React from 'react'
import { StyleSheet } from 'react-native'
import { FAB } from 'react-native-paper'

function FloatingActionButton({navigation, route}) {

    const goToAdd = () => {
        navigation.navigate(route)
    }

  return (
    <FAB
        icon="plus"
        style={styles.fab}
        onPress={goToAdd}
    />
  )
}

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
      alignSelf: 'flex-end',
    },
  })

export default FloatingActionButton