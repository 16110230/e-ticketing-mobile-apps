import React, { useState } from 'react'
import { Keyboard, StyleSheet, Text, View } from 'react-native'
import { Button, Modal, Portal, TextInput } from 'react-native-paper'
import AppBar from '../../component/AppBar'
import PopUp from '../../component/PopUp';

function TicketAdd({navigation}) {
    const [text, setText] = useState("");
    const [visible, setVisible] = useState(false);
    const [visibleP, setVisibleP] = useState(false);


    const showModal = () => {
        setVisible(true) 
        Keyboard.dismiss()
    }

    const showModalPrioryty = () => {
        setVisibleP(true) 
        Keyboard.dismiss()
    }

    const onDismiss = () => {
        setVisible(false)
    }

    const onDismissP = () => {
        setVisibleP(false)
    }
    
  return (
    <View>
        <AppBar navigation={navigation} title='Add Ticket' />
        <View style={styles.viewText}>
            <Text style={styles.text}> Add Ticket </Text>
        </View>
        <TextInput
            label="Title"
            style={styles.textInput}
            value={text}
            onChangeText={text => setText(text)}
        />
        <Text style={[styles.text, styles.textInput]} onPress={showModal}> Select Product </Text>
        <Text style={[styles.text, styles.textInput]} onPress={showModalPrioryty}> Select Priority </Text>
        <TextInput
                label="Detail"
                style={styles.textInput}
                value={text}
                onChangeText={text => setText(text)}
            />
        <PopUp visible={visible} onDismiss={onDismiss} title='Select Product'/>
        <PopUp visible={visibleP} onDismiss={onDismissP} title='Select Priority'/>
    </View>
  )
}

const styles = StyleSheet.create({
    viewText : {
        alignItems : 'center',
        marginVertical : 10
    },
    text : {
        color : 'black'
    },
    textInput : {
        marginBottom : 10,
        marginHorizontal : 20
    },
  })


export default TicketAdd