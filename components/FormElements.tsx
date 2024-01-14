import { TextFieldFormElement } from "./fields/TextFields";

export type ElementsType = 'TextField';

export type FormElement = {
    type: ElementsType;

    construct: (id: string) => FormElementIstance;


    designerBtnElement: {
        icon: React.ElementType;
        label: string;
    }


    designerComponent: React.FC;
    formComponent: React.FC;
    propertiesComponent: React.FC;
};


export type FormElementIstance ={
    id: string;
    type: ElementsType;
    extraAttribute?: Record<string, any>;
}



type FormElementsType = {
    [key in ElementsType] : FormElement;
}


export const FormElement:FormElementsType = {
    TextField: TextFieldFormElement,
};