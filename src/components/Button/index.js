import { ButtonContainer } from './styles';

const Button = ({label, variant = "number", onClick}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick} type="button">
     {label}
    </ButtonContainer>
  );
}
  
  export default Button;