'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";
import { FormElementInstance } from "../FormElements";

type DesignerContextType = {
    elements: FormElementInstance[];
    addElement: (index: number, element: FormElementInstance) => void;
    removeElement: (id: string) => void;

    selectedElement: FormElementInstance | null;
    setSelectedElement: Dispatch<SetStateAction<FormElementInstance | null>>;
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

    return (
        <DesignerContext.Provider value={{
            elements: element,
            addElement,
            removeElement,

            selectedElement,
            setSelectedElement,
        }}
        >   
            {children}
        
        </DesignerContext.Provider>
    )
}