import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,ScrollView,
  TouchableOpacity, ActivityIndicator, FlatList,Button,Image,Platform} from 'react-native';
import pageStyle from '../components/styleFeed';
export default function Feed({navigation}) {
  
   const [producuts,setProducts]=useState([])
   const [val,setVal]=useState(1);


   useEffect(() => {
     if(val==1)
       loadData();
    
  }, );
  
  const loadData = async () => {
    const response = await fetch('http://retailsapi.us-east-2.elasticbeanstalk.com/api/feedapp/getfeed',
      {
        method: 'GET'
      });

    const data = await response.json();
    setProducts(data.products);
    setVal(0)
  }
        
    return (
    <View style={pageStyle.Container}>
       <View style={pageStyle.feedContainer}>
       <ScrollView vertical>
          {producuts.map((product,key)=>{
            
              if(product.publisher!==undefined){
                
                return(
                  <View style={pageStyle.productContainer} key={product.id}>
                    <View style={pageStyle.img}>
                      <Image source={{uri:product.productImage}}
                        style={{width:"100%", height: "100%",justifyContent:'center'}}>
                        </Image>
                    </View>
                    <View style={pageStyle.detailsContainer}>
                      <View style={pageStyle.publish}><Text style={pageStyle.textStyle}><Text style={{fontSize:20}}>publisher</Text></Text></View>
                      <View style={pageStyle.detailsPublisher}>
                          <View  style={pageStyle.authorTextBlockContainer}><Text style={pageStyle.textStyle}>Name: </Text></View>
                          <View style={pageStyle.authorTextBoxContainer}><Text style={pageStyle.textStyle}>{product.publisher.name}</Text></View>
                      </View>
                      <View style={pageStyle.detailsPublisher}>
                          <View  style={pageStyle.authorTextBlockContainer}><Text style={pageStyle.textStyle}>Id: </Text></View>
                          <View style={pageStyle.authorTextBoxContainer}><Text style={pageStyle.textStyle}>{product.publisher.id}</Text></View>
                      </View>
                      <View style={pageStyle.detailsPublisher}>
                          <View  style={pageStyle.authorTextBlockContainer}><Text style={pageStyle.textStyle}>Email: </Text></View>
                          <View style={pageStyle.authorTextBoxContainer}><Text style={pageStyle.textStyle}>{product.publisher.email}</Text></View>
                      
                      </View>
                      <View style={pageStyle.detailsPublisher}>
                          <View  style={pageStyle.authorTextBlockContainer}><Text style={pageStyle.textStyle}>Phone: </Text></View>
                          <View style={pageStyle.authorTextBoxContainer}><Text style={pageStyle.textStyle}>{product.publisher.mobile}</Text></View>
                      
                      </View>
                    </View>
                    <View style={pageStyle.detailsContainer}>
                      <View style={pageStyle.detailsPublisher}>
                          <View  style={pageStyle.blockPublisher}>
                            <Text style={pageStyle.textStyle}>Product Name:</Text>
                            <Text style={pageStyle.textStyle}>{product.productName}</Text>
                            <Text></Text>
                            <Text style={pageStyle.textStyle}>Product Price:</Text>
                            <Text style={pageStyle.textStyle}>{product.productPrice}</Text>
                            </View>
                      </View>                           
                    </View>
                 </View>
                )
              }  
          })}  
        </ScrollView>
           
       </View>
       <View style={pageStyle.menuView}>
       <TouchableOpacity style={pageStyle.feedBtn} onPress={()=>{navigation.navigate("AddProduct")}}>
              <Text style={pageStyle.btnText}>Add Product</Text></TouchableOpacity>
        </View>
    </View>
    );
}
