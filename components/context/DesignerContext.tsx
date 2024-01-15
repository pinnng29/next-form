'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { FormElementInstance } from "../FormElements";

type DesignerContextType = {
    elements: FormElementInstance[];
    setElements : Dispatch<SetStateAction<FormElementInstance[]>>;
    addElement: (index: number, element: FormElementInstance) => void;
    removeElement: (id: string) => void;

    selectedElement: FormElementInstance | null;
    setSelectedElement: Dispatch<SetStateAction<FormElementInstance | null>>;

    updateElement: (id: string, element: FormElementInstance) => void;
}

export const DesignerContext = createContext<DesignerContextType | null>(null);


export default function DesignerContextProvider({
    children,
} : {
    children: ReactNode;
}) {

    const [element, setElements] = useState <FormElementInstance[]>([]);
    const [selectedElement, setSelectedElement] = useState<FormElementInstance | null>(null);

    const addElement = (index:number, element: FormElementInstance) => {
        setElements ((prev) => {
            const newElement = [...prev];
            newElement.splice(index, 0, element);
            return newElement;
        })
    }


    const removeElement = (id: string) => {
        setElements((prev) => prev.filter((element) => element.id !== id))
    }

    const updateElement = (id: string, element: FormElementInstance) => {
        setElements((prev) => {
            const newElement = [...prev];
            const index = newElement.findIndex((element) => element.id === id);
            newElement[index] = element;
            return newElement
        })
    }

    return (
        <DesignerContext.Provider value={{
            elements: element,
            addElement,
            setElements,
            removeElement,

            selectedElement,
            setSelectedElement,

            updateElement,
        }}
        >   
            {children}
        
        </DesignerContext.Provider>
    )
}