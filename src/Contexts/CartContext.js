import { createContext, useEffect, useState } from 'react';
import { collection, doc, getDocs, getFirestore } from "firebase/firestore"


export const CartContext = createContext({})


export const CartProvider = ({ children }) => {

    // Cart State
    const [open, setOpen] = useState(false)
    const [items, setItems] = useState([])


    // Check Cart Items

    useEffect(() => {
        const db = getFirestore();

        const cartItems = collection(db, 'Cart');
        getDocs(cartItems).then((snapshot) => {

            const parseItems = snapshot.docs.map(doc => {
                return { docId: doc.id, ...doc.data() }
            })

            if (items !== parseItems) {
                console.log('Set items!')
                setItems(parseItems)
            }


        })
    }, [items])


    return (

        <CartContext.Provider value={{ open, setOpen, items, setItems }}>

            {children}

        </CartContext.Provider>

    )

}

