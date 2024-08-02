import { StyleSheet } from "react-native";

export const st=StyleSheet.create({
    container:{
        flex:1,
    },

    viewContainer:{
        flexDirection:'row',
        margin:15,
        justifyContent:'space-between',
    },

    txt:{
        fontSize:20,
        fontWeight:'bold'
    },

    txtCar:{
       alignItems:'center' ,
       justifyContent:'center',
       backgroundColor:'red',
       width:20,
       height:20,
       borderRadius:12,
       position:'absolute',
       zIndex:99,
       bottom:-2,
       left:-4,
    },

    doteTxt:{
        fontSize:12
    }

})