import { View,Text, TouchableOpacity} from "react-native";
import { st } from "./style";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export function ItemCar({data,andToCard}) {

    return(
        <View style={st.items}>
            <View>
                 <Text style={st.txt}>{data.name}</Text>
                 <Text>{data.price}</Text>
            </View>
        
            <TouchableOpacity style={st.btn} onPress={()=>andToCard()}>
                <Text style={st.txtBtn}>+</Text>
            </TouchableOpacity>
        </View>
    )
}