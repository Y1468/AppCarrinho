import { createContext, useState } from "react";

export const CardContext=createContext({})

export function CardProvider({children}) {

    const [card,setCard]=useState([])
    const [total,setTotal]=useState(0)

    function AddItem(newItem) {
        //Adcionando item ao carrinho
        const indexItem=card.findIndex(item=>item.id===newItem.id)

        if (indexItem !== -1) {

            let cartList=card
            cartList[indexItem].amount=cartList[indexItem].amount+1
            cartList[indexItem].total=cartList[indexItem].amount*cartList[indexItem].price

            setCard(cartList)
            totalResultCard(cartList)
            console.log(cartList)
            return
        }

        let data={
            ...newItem,
            amount:1,
            total:newItem.price
        }

        setCard(products=>[...products,data])
        totalResultCard([...card,data])
    }

    function removeItems(products) {
        //Deletando items do carrinho
        const indexItem=card.findIndex(item=>item.id===products.id)

        if (card[indexItem]?.amount>1) {
            let cardList=card

            cardList[indexItem].amount=cardList[indexItem].amount-1

            cardList[indexItem].total=cardList[indexItem].total-cardList[indexItem].price

            setCard(cardList)
            totalResultCard(cardList)
            return
        }

        const remove=card.filter(item=>item.id!==products.id)
        setCard(remove)
        totalResultCard(remove)
    }

    function totalResultCard(items) {
        //Total de items
        let mycart=items
        let result=mycart.reduce((acc,obj)=>{return acc + obj.total},0)
        setTotal(result.toFixed(2))
    }

    return(
        <CardContext.Provider value={{card,AddItem,removeItems,total}}>
            {children}
        </CardContext.Provider>
    )
}