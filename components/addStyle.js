import { StyleSheet} from 'react-native';


const addStyle = StyleSheet.create({
    
    pageContainer: {
      width:"100%",
      height:"100%",
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    formContainer: { 
      width: '90%',
      height:"65%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
      borderColor:"red",
      borderWidth:1
    },
    headerContainer: { 
      height: '10%',
      width:'100%',
      alignItems:"flex-start",
      justifyContent: 'center',
      display:"flex",
      flexDirection:"row",
      borderColor:"blue",
    borderWidth:1
  },
    baseText: {
        fontFamily: "Cochin",fontSize:20
      },
    headerText: { 
      fontSize: 35,
      fontWeight: "bold"
    },
    infoAreaContainer:{
      height:'8%',
      display:"flex",
      width:"100%",
      flexDirection:"row",
      borderColor:"yellow",
      borderWidth:1,
      justifyContent:"center",
      alignItems:"center"
    },
    textBlockContainer:{
      width:"50%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    },
    TextInputStyle:{
      width:"50%",
      borderWidth:1,
      textAlign:"center",
      fontSize:20
    },
    mainView: { 
      height: '90%',
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center',
      flex:1
     },
    AddBtn:{
      width: '80%',
      marginTop:60,
      height:80,
      backgroundColor: '#6A02D1',
      alignItems: 'center',
      justifyContent: 'center'
    },
    btnText: { 
      color: '#ffffff',
      fontSize: 20 
    },    
  });
export default addStyle; 
