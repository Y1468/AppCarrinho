import { StyleSheet } from "react-native";

export const st=StyleSheet.create({
    items:{
        flexDirection:'row',
        borderColor:'#121212',
        borderWidth:1,
        justifyContent:'space-between',
        margin:10,
        padding:15
    },

    btn:{
        backgroundColor:'#0000CD',
        width:40,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        marginTop:8

    },

    txtBtn:{
        fontSize:20,
        color:'#FFF'
    },

    txt:{
        fontSize:17
    }
})