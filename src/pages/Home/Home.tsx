import { useForm } from 'react-hook-form';
import Button from '../../components/Buttom/Button';
import Input from '../../components/Input/Input';
import { Container, Wrapper, TitleHome } from './styles';
import { AiTwotoneMail, AiFillLock } from "react-icons/ai";
// yarn add react-hook-form
import { yupResolver } from '@hookform/resolvers/yup';
// yarn add yup
import * as yup from "yup";

import { IFormHome, defaultValues } from './types';

const schema = yup.object({
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

function Home(){

    const { control, formState: { errors, isValid} } = useForm<IFormHome>({
        resolver: yupResolver(schema),
        mode: 'onBlur',
        defaultValues,
        reValidateMode: 'onChange',
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(isValid === true){
            console.log('clicou');
        } else {
            console.log('invalido');
        } 
    }

    return (
        <Container>
            <Wrapper>
                <TitleHome>Faça seu login</TitleHome>
                <form onSubmit={handleSubmit}>
                    <Input name='email' placeholder='email' control={control} errorMessage={errors?.email?.message} lefticon={<AiTwotoneMail />} />
                    <Input name='password' placeholder='password' control={control} errorMessage={errors?.password?.message} lefticon={<AiFillLock />} />
                    <Button id='button' title='Entrar' type='submit' />
                </form>
            </Wrapper>
        </Container>
    )
}

export default Home