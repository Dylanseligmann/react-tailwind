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

            //Checking if there are no differences with the Database

            if (JSON.stringify(items) !== JSON.stringify(parseItems)) {
                console.log(items,parseItems)
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

