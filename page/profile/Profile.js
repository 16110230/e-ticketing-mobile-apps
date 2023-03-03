import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import AppBar from '../../component/AppBar';
import {getUserById} from '../../service/user.service';

function Profile({navigation}) {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    getUserById().then(res => {
      setProfile(res.userdata);
    });
  });

  return (
    <View>
      <AppBar navigation={navigation} title="Profile" />
      <Card style={styles.card}>
        <Text style={styles.text}>{profile.fullName}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  card: {
    marginTop: 10,
    marginStart: 5,
    height: 200,
    width: '100%',
  },
});

export default Profile;
