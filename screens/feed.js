import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput,
  TouchableOpacity, ActivityIndicator, FlatList,Button,Image,Platform} from 'react-native';
import styles from '../components/styleFeed';
import {Input} from 'react-native-elements';
export default function AddProduct({navigation}) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const addNewProduct = () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Accept", "application/json");
      
      var raw = JSON.stringify({
        "publisher": {
          "name": "stav",
          "id": 315923847,
          "email": "stavalon31@gmail.com",
          "mobile": "0535284289"
        },
        "productName": name,
        "productPrice": price,
        "productImage": imageUrl,
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("http://retailsapi.us-east-2.elasticbeanstalk.com/api/feedapp/addfeed", requestOptions)
        .then(response => response.text())
        .then(result =>{navigation.goBack()})
        .catch(error => console.log('error', error));
    };
    return (
      <View style={styles.mainView}>
      <Input
    placeholder="Enter product name"
    label="Name"
    leftIcon={{type: 'material', name:'badge'}}
    value={name}
    onChangeText={text => setName(text)}
    />
    <Input
    placeholder="Enter your price"
    label="Price"
    leftIcon={{type: 'material', name:'payment'}}
    value={price}
    onChangeText={text => setPrice(text)}
    />
     <Input
    placeholder="Enter your image URL"
    label="Product Picture"
    leftIcon={{type: 'material', name:'face'}}
    value={imageUrl}
    onChangeText={text => setImageUrl(text)}
    />
  
    <TouchableOpacity onPress={addNewProduct} style={styles.AddBtn}><Text style={styles.btnText}>Add new product</Text></TouchableOpacity>
    
    </View>
    );
}