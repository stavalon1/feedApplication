import { StyleSheet} from 'react-native';


const styleFeed = StyleSheet.create({


    Container: {
      width:"100%",
      height:"100%",
      display:'flex',
      justifyContent:"space-evenly",
      alignItems: 'center'
      },
    feedContainer: {
       width: '95%',
       height:"75%",
       display:"flex",
       flexDirection:"column",
      },
    productContainer: {
      height:200,
      width:'100%',
      justifyContent: 'space-around',
      display:"flex",
      flexDirection:"row",
    },
    detailsContainer:{
      backgroundColor:'#022F40',
      height:"100%",
      width:"35%",
      flexDirection:"column",
      alignItems:'center',
      justifyContent:"space-around",
    //  borderColor:"grey",
      borderWidth:0.3
    },
    img:{
      height:"100%",
      width:"35%",
      flexDirection:"column",
      alignItems:'center',
      justifyContent:"space-around",
      borderWidth:0.3,
    },
    detailsPublisher:{
      width:"90%",
      height:"10%",
      alignItems:"center",
      flexDirection:"row",
      marginLeft:10,
    },
    publish:{
      width:"100%",
      height:"20%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
    },
    textStyle: {
        fontFamily: "Cochin",
        fontSize:12,
        color:'#ffffff',
      },
      textBlockContainer:{
        width:'38%',fontSize:10,
        height:"100%",display:"flex",
        justifyContent:"center",
        borderColor:"grey",
        borderWidth:1
      },
      blockPublisher:{
        width:'68%',
        fontSize:10,
        display:"flex",
        justifyContent:"center",
        marginLeft:-8
      },
      textBoxContainer:{
        fontSize:10,
        height:"100%",
        width:"62%",
        alignItems:"flex-start",
        justifyContent:"center",
        borderColor:"grey",
        borderWidth:1
      },
      producTextBoxContainer:{
        fontSize:10,
        height:"100%",
        width:"62%",
        alignItems:"center",
        justifyContent:"center",
      },
     btnContainer:{
       width:"90%",
       height:"10%",
       display:"flex",
       justifyContent:"center",
       alignItems:"center",
       borderColor:"grey",
       borderWidth:1,
       borderRadius:3
      },
     addButton: { 
       width: '50%',
       backgroundColor: '#38AECC',
       alignItems: 'center',
       justifyContent: 'center'
       },
     feedBtn: { 
       width: '80%',
       backgroundColor: '#022F40',
       alignItems: 'center',
       justifyContent: 'center'
       },
     menuView: { 
       height: '10%',
       width:'100%',
       flexDirection: 'row',
       justifyContent: 'center'
       },
     btnText: { 
       color: '#ffffff',
       fontSize: 20,
       },
    
  });
export default styleFeed; 
