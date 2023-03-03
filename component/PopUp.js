import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, List, Modal, Portal } from 'react-native-paper'

function PopUp({visible, onDismiss, title}) {

  return (
    <View>
        <Portal
            style={styles.portal}
        >
            <Modal 
                visible={visible} 
                onDismiss={onDismiss}
                style={styles.containerStyle}    
            >
            <Text style={styles.text}>{title}</Text>
            <List.Item
                style={styles.text}
                title="First Item"
            />
            </Modal>
        </Portal>
    </View> 
  )
}

const styles = StyleSheet.create({
    containerStyle : {
        backgroundColor: 'white', 
        padding: 20,
        top: '30%',
        left: '30%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '60%',
    },
    portal : {
        justifyContent : 'center'
    },
    text : {
        color : 'black'
    },

  })
export default PopUp