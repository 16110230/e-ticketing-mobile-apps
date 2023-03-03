import React, { useEffect } from 'react'
import { BackHandler, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper'

function AppBar({navigation, title}) {
    const backAction = () => {
       navigation.goBack()
       return true
    };

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, []);

  return (
    <Appbar.Header style={styles.mainView}>
      <Appbar.BackAction onPress={backAction} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
    mainView : {
        color : 'pink'
    },
})

export default AppBar