import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CartContext } from "../Contexts/CartContext";
import { deleteDoc, getFirestore,collection,doc } from "firebase/firestore";

export default function CartSlideOver() {


  const cart = useContext(CartContext)

  function removeItem(item, index){

    cart.setItems((prev) => prev.splice(index, 1));

    console.log(index)

    const db = getFirestore()

    const cartItems = collection(db, "Cart");

    const docRef = doc(cartItems,item.docId)

    deleteDoc(docRef)

    


  }


  return (
    <Transition.Root show={cart.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => cart.setOpen(false) }>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => cart.setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-gray-800 py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-white">
                        Your Cart
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6 text-white">
                      {cart.items.map((i,key)=>{

                        return (
                          <div>
                            <hr />
                            <img src={i.thumbnail} className=" m-auto mt-2 rounded" />
                            <div key={key}>
                              {i.title}
                              {i.price}
                            
                              <button
                                className="flex ml-auto text-white bg-[#65a30d] border-0 py-1 px-6 mb-2 focus:outline-none hover:bg-[#4d7c0f] rounded"
                                onClick={() => removeItem(i, key)}
                              >
                                Delete
                              </button>
                              <hr />
                            </div>
                          </div>
                        );

                      })}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
