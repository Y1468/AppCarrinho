import { useContext } from "react"
import { CardContext } from "../../contexts"
import { View,Text,FlatList} from "react-native"
import { st } from "./style"
import { CardItem } from "../../components/cardItem"

export function Carrinho() {

        const {card,AddItem,removeItems,total}=useContext(CardContext)

    return(
        <View style={st.container}>
            <FlatList
                data={card}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item)=>String(item.id)}
                ListEmptyComponent={()=><Text style={{textAlign:'center',fontSize:17}}>Nenhun item no carrinho</Text>}
                renderItem={({item})=>(
                    <CardItem 
                        data={item} 
                        addNovoItem={()=>AddItem(item)}
                        removeAmount={()=>removeItems(item)}
                        />
                )}

                ListFooterComponent={()=><Text style={st.txtTotal}>Total: R${total}</Text>}
            />
        </View>
    )
}