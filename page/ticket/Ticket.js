import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { Card } from 'react-native-paper';
import AppBar from '../../component/AppBar';
import FloatingActionButton from '../../component/FloatingActionButton';
import { getTicketByUserId } from '../../service/ticket.service';

function Ticket({navigation}) {
  const [ticket, setTicket] = useState([]);
 
    useEffect(() => {
        getTicketByUserId().then(res => {
          setTicket(res.data)
      })
    }, []);

    

    const renderItem = ({item}) => {
        return (
          <Pressable onPress={() => navigation.navigate('TicketDetail', { id: item.id })}>
            <View style={[styles.container_item, styles.item]}>
                <View style={styles.container_desc}>  
                  <View style={[styles.viewTicket]}>
                    <Text style={styles.text}>Ticket Code : {item.codeTicket}</Text>
                    <Text style={styles.text}> | {item.statusName}</Text>
                  </View>
                  <Text style={styles.text}>From : {item.customerName}</Text>
                  <Text style={styles.text}>{item.title}</Text>
                </View>
            </View>
          </Pressable>
        )
      }

    const DeviderComponent = () => {
      return <View style={styles.devider}/>
    }

  return (
   
    <View style={styles.container}>
        <View style={styles}>
            <AppBar navigation={navigation} title='Ticket'/>
            <FlatList 
                data={ticket}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={DeviderComponent}
            />
        </View>
        <Card>

        </Card>
        <FloatingActionButton navigation={navigation} route='TicketAdd'/>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white', 
        flex : 1,
    },
    containerItem : {
      padding : 3
    },
    item : {
        marginVertical : 10
    },
    text : {
      color : 'black',
    },
    viewTicket : {
      flexDirection : 'row',
    },
    status : {
      alignSelf : 'flex-end'
    },
    container_item : {
        flexDirection : 'row',
        marginBottom : 10,
    },
    container_desc : {
        justifyContent : 'center',
        marginStart : 5,
    },
    devider : {
        height : 1,
        color : 'black',
        backgroundColor : 'black',
        margin : 10
    },
})

export default Ticket