import { View,Text,FlatList, SafeAreaView, TouchableOpacity } from "react-native"
import { useContext } from "react"
import {AntDesign} from '@expo/vector-icons'
import { st } from "./style"
import { useEffect, useState } from "react"
import { ItemCar } from "../../components/itemcar"
import { useNavigation } from "@react-navigation/native"
import { CardContext } from "../../contexts"

export function Home() {

    const {card,AddItem}=useContext(CardContext)

    const navigation=useNavigation()
    const[produts,setProdults]=useState([
        {
            id:'1',
            name:'Coca cola',
            price:19.9
        },

        {
            id:'2',
            name:'Pão',
            price:2.00
        },

        {
            id:'3',
            name:'Cauça',
            price:80.00
        }
    ]
    )

    function handleAddCard(item) {
       AddItem(item) 
    }


    return(
        <SafeAreaView style={st.container}>
            <View style={st.viewContainer}>

                <Text style={st.txt}>Lista de produltos</Text>
        
                <TouchableOpacity onPress={()=>navigation.navigate('Carrinho')}>

                    {card.length>=1 && (
                     <View style={st.txtCar}>
                        <Text style={st.doteTxt}>{card?.length}</Text>
                    </View>
                    )}
                    
                    <AntDesign name="shoppingcart" size={35} color="black" />
                </TouchableOpacity>
            </View>

            <FlatList
                showsHorizontalScrollIndicator={false}
                data={produts}
                keyExtractor={(item)=>String(item.id)}
                renderItem={({item})=><ItemCar data={item} andToCard={()=>handleAddCard(item)}/>}
            />
        </SafeAreaView>
    )
}