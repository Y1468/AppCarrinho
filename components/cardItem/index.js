import { View,Text, TouchableOpacity } from "react-native";
import { st } from "./style";
import { useState } from "react";


export function CardItem({data,addNovoItem,removeAmount}) {

    const [amount,setAmount]=useState(data?.amount)

    function addItemCard() {
        //Aumentando quantidade de items
        addNovoItem()
        setAmount(item=>item+1)
    }

    function handleDecreate(params) {
        removeAmount()

        if (amount===0) {
            setAmount(0)
            return
        }

        setAmount(item=>item-1)
    }

    return(
        <View style={st.container}>
            <Text style={st.title}>R$ {data.name}</Text>
            <Text style={st.price}>R$ {data.price}</Text>

            <View style={st.viewBtn}>
                <TouchableOpacity style={st.btn} onPress={()=>handleDecreate()}>
                    <Text style={st.txtBtn1}>-</Text>
                </TouchableOpacity>

                <Text style={st.amout}>{amount}</Text>

                <TouchableOpacity style={st.btn} onPress={()=>addItemCard()}>
                    <Text style={st.txtBtn2}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}