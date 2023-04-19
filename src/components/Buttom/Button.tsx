import { ButtonContainer } from './styles';
import { IButton } from './types';

function Button({ id, title, type}: IButton){

    return (
        <ButtonContainer id={id} type={type}>
            {title}
        </ButtonContainer>
    )
}

export default Button