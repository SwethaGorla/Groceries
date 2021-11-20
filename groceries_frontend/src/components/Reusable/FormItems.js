import React from "react";
import Input from './input'
import Textarea from './textarea'
import Radio from './radio'

export default function FormItems(props){
    let input;
    const {elementType,elementConfig}=props.config;
    const {elementValue}=props;
    switch(elementType){
        case 'input':
                input = <Input config={elementConfig} elementValue={elementValue}/>
                break;
            case 'textarea':
                input = <Textarea config={elementConfig} elementValue={elementValue}/>
                    break;
            case 'radio':
                input = <Radio config={elementConfig} />
                        break;
            default:
                break;
    }
    return(
        <div>{input}</div>
    );
}

