import React, { useCallback, useContext, useEffect, useState } from 'react'
import { FlatList, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Card, Snackbar, TextInput} from 'react-native-paper';
import AppBar from '../../component/AppBar'
import { getData } from '../../service/login.service';
import { getTicketById, getTicketThreadById, postTicketThread } from '../../service/ticket.service';
import DocumentPicker from "react-native-document-picker";
import RNFS from 'react-native-fs';
import { useDispatch, useSelector } from 'react-redux';
import { send_reply } from '../redux/action';

function TicketDetail({route, navigation}) {

  const id  = route.params.id
  const dispatch = useDispatch()
  const replyData = useSelector(state => state.reply)

  const [ticket, setTicket] = useState([]);
  const [thread, setThread] = useState([]);
  const [userId, setUserId] = useState();
  const [reply, setReply] = useState({
    ticId : id,
	  commentText : '',
	  fileName : '',
	  fileText  : ''
  });
  const [file, setFile] = useState();
  const [visible, setVisible] = useState(false);
  const state = {
    keyboardOffset: 0,
  };

  useEffect(() => {
      getTicketById(id).then(res => {
        setTicket(res.data)
    })
    getTicketThreadById(id).then(data => {
      setThread(data.data)
    })
    getData().then(data => {
      setUserId(data.id)
    })
  }, []);  

  const renderItem = ({item}) => {
    const createdAt = new Date(item.createdAt);
    const createdDate = createdAt.toLocaleDateString('en-US');
    const createdTime = createdAt.toLocaleTimeString('en-US');
    if(userId == item.createdBy){
      return(
        <View style={styles.baloon}>
          <Text style={{ fontSize: 16, color: "#fff", }}>{item.detail}</Text>
          <Text style={{ fontSize : 10 }}>{createdDate} at {createdTime}</Text>        
        </View> 
      )
    }else{
      return(
        <View style={styles.baloonStart}>
          <Text style={{ fontSize: 16, color: "#fff", }}>{item.detail}</Text>
          <Text style={{ fontSize : 10 }}>{createdDate} at {createdTime}</Text>     
        </View> 
      )
    }
  }

  const changeReply = (e) => {
    setReply({...reply, commentText : e.nativeEvent.text})
  }

  const sendReply = () => {
    dispatch(send_reply(reply))
    postTicketThread(replyData.payload).then(data => {  })
  }

  const onDismissSnackBar = () => setVisible(false)

  const selectFile = useCallback(async () => {
    try {
            const result = await DocumentPicker.pickSingle({
              type: [DocumentPicker.types.allFiles],
            });
            setFile(result)
            const fileName = (result.name)
            const ext = fileName.substring(fileName.lastIndexOf('.') + 1)
            const data = RNFS.readFile(result.uri, 'base64').then(res => { return res });
            data.then(res => {
              setReply({...reply,
                    fileName : res,
                    fileText  : ext
                })
            })
    }catch(err){
      if (DocumentPicker.isCancel(err)) {
        setVisible(!visible)
        console.log("User cancelled the picker, exit any dialogs or menus and move on");
      } else {
        throw err;
      }
    }
  })

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{flex:1}}
    >
        <AppBar navigation={navigation} title='Ticket Detail' />
        <View style={styles.containerItem}>
          <Text style={styles.text}>Ticket Code : {ticket.codeTicket}</Text>
          <Text style={styles.text}>Ticket Title : {ticket.title}</Text>
          <Text style={styles.text}>Ticket Detail : {ticket.detail}</Text>
        </View>
        <View style={styles.containerItem}>
            <View style={{
              width : '100%',
              height : 619
            }}>
              <FlatList 
                data={thread}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{
                  margin : 5
                }}
              />
            </View>
          <View style={{
            //  position: 'absolute',
             margin: 0,
             right: 0,
             bottom: 0,
             alignSelf: 'flex-end',
             flexDirection : 'row' 
          }}>
              <TextInput style={styles.textInput} onChange={changeReply}/>
              <Button icon="file" mode="contained" onPress={selectFile} />
              <Button icon="send" mode="contained" onPress={() => sendReply()} />
            </View>
        </View>
        <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            duration={2000}
            style={styles.snackbar}>
            <Text style={{ fontFamily: 'Poppins-Medium', color: '#ECEDEF' }}>Cancelled</Text>
        </Snackbar>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white', 
        flex : 1
    },
    containerItem : {
      padding : 5
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
    baloon : {
      backgroundColor: "grey",
        padding:10,
        marginLeft: '45%',
        borderRadius: 5,
        marginTop: 5,
        maxWidth: '50%',
        alignSelf: 'flex-end',
        borderRadius: 20,
    },
    baloonStart : {
      backgroundColor: "skyblue",
        padding:10,
        marginRight: '45%',
        borderRadius: 5,
        marginTop: 5,
        maxWidth: '50%',
        alignSelf: 'flex-start',
        borderRadius: 20,
    },
    textInput : {
      marginTop : 0,
      width : 250,
      // bottom:   this.state.keyboardOffset,
    },
    snackbar: {
      backgroundColor: '#ED6363'
    }
})

export default TicketDetail