import { InputContainer, InputText, IconContainer, ErroText } from './styles';
import { IInput } from './types';
// yarn add react-hook-form
import { Controller } from 'react-hook-form'


function Input({ name, control, errorMessage, lefticon,...rest }: IInput){
    return (
        <>
        <InputContainer>
        {lefticon ? (<IconContainer>{lefticon}</IconContainer>): null}
        <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, onBlur, ref } }) => <InputText value={value} onChange={onChange} onBlur={onBlur} ref={ref} {...rest}/>}
        />
        </InputContainer>
        {errorMessage ? <ErroText>{errorMessage}</ErroText> : null}
        </>
    )
}

export default Input