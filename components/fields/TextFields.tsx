'use client';

import { MdTextFields } from 'react-icons/md';
import {
    ElementsType,
    FormElement,
    FormElementInstance,
} from '../FormElements';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

const type: ElementsType = 'TextField';

const extraAttribute = {
    label: 'Text Field',
    helperText: 'Helper text',
    require: false,
    placeHolder: 'Value here...',
};

export const TextFieldFormElement: FormElement = {
    type,

    construct: (id: string) => ({
        id,
        type,
        extraAttribute,
    }),

    designerBtnElement: {
        icon: MdTextFields,
        label: 'Text Field',
    },

    designerComponent: designerComponent,
    formComponent: () => <div>Form component</div>,
    propertiesComponent: () => <div>Properties component</div>,
};

type CustomInstance = FormElementInstance & {
    extraAttribute: typeof extraAttribute;
};

function designerComponent({
    elementInstance,
}: {
    elementInstance: FormElementInstance;
}) {
    const element = elementInstance as CustomInstance;
    const { label, required, placeHolder, helperText } = element.extraAttribute;

    return (
        <div className="flex flex-col gap-2 w-full">
            <Label>
                {label}
                {required && '*'}
            </Label>
            <Input
                readOnly
                disabled
                placeholder={placeHolder}
            />
            {helperText && (
                <p className="text-muted-foreground text-[0.8rem]">
                    {helperText}
                </p>
            )}
        </div>
    );
}
