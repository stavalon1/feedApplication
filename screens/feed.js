import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,ScrollView,
  TouchableOpacity, ActivityIndicator, FlatList,Button,Image,Platform} from 'react-native';
import pageStyle from '../components/styleFeed';
export default function ProductList({navigation}) {
  
   const [producuts,setProducts]=useState([])
   const [val,setVal]=useState(1);


   useEffect(() => {
     if(val==1)
       loadData();
    
  }, );
  function clean(object) {
    Object
        .entries(object)
        .forEach(([k, v]) => {
            if (v && typeof v === 'object') {
                clean(v);
            }
            if (v && typeof v === 'object' && !Object.keys(v).length || v === null || v === undefined ||v=="") {
                if (Array.isArray(object)) {
                    object.splice(k, 1);
                } else {
                    object[k]="untitled";
                }
            }
        });
    return object;
}

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
    <View style={pageStyle.pageContainer}>
       <View style={pageStyle.ProductListContainer}>
       <ScrollView vertical>
          {producuts.map((product,key)=>{
            
              if(product.publisher!==undefined){
                
                return(
                  <View style={pageStyle.productContainer} key={product.id}>
                    <View style={pageStyle.imageContainer}>
                      <Image source={{uri:product.productImage}}
                        style={{width:"100%", height: "100%",justifyContent:'center'}}></Image>
                    </View>
                    <View style={pageStyle.contentContainer}>
                      <View style={pageStyle.authorRowContainer}><Text style={pageStyle.baseText}><Text style={{fontSize:20}}>publisher</Text></Text></View>
                      <View style={pageStyle.rowContainer}>
                          <View  style={pageStyle.authorTextBlockContainer}><Text style={pageStyle.baseText}>Name: </Text></View>
                          <View style={pageStyle.authorTextBoxContainer}><Text style={pageStyle.baseText}>{product.publisher.name}</Text></View>
                      </View>
                      <View style={pageStyle.rowContainer}>
                          <View  style={pageStyle.authorTextBlockContainer}><Text style={pageStyle.baseText}>Id: </Text></View>
                          <View style={pageStyle.authorTextBoxContainer}><Text style={pageStyle.baseText}>{product.publisher.id}</Text></View>
                      </View>
                      <View style={pageStyle.rowContainer}>
                          <View  style={pageStyle.authorTextBlockContainer}><Text style={pageStyle.baseText}>Email: </Text></View>
                          <View style={pageStyle.authorTextBoxContainer}><Text style={pageStyle.baseText}>{product.publisher.email}</Text></View>
                      
                      </View>
                      <View style={pageStyle.rowContainer}>
                          <View  style={pageStyle.authorTextBlockContainer}><Text style={pageStyle.baseText}>Phone: </Text></View>
                          <View style={pageStyle.authorTextBoxContainer}><Text style={pageStyle.baseText}>{product.publisher.mobile}</Text></View>
                      
                      </View>
                    </View>
                    <View style={pageStyle.contentContainer}>
                      <View style={pageStyle.rowContainer}>
                          <View  style={pageStyle.productTextBlockContainer}>
                            <Text style={pageStyle.baseText}>Product Name:</Text>
                            <Text style={pageStyle.baseText}>{product.productName}</Text>
                            <Text></Text>
                            <Text style={pageStyle.baseText}>Product Price:</Text>
                            <Text style={pageStyle.baseText}>{product.productPrice}</Text>
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
