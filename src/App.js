
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleChangeSignal = () => {
    setCurrentNumber(-Number(currentNumber))
    setFirstNumber('0')
    setOperation('')
  };

  const handlePercent = () => {
    setCurrentNumber(Number(currentNumber)/100)
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const result = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(result))
      handleEquals()
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const result = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(result))
      setOperation('')
    }

  }

  const handleMultNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('X')
    }else {
      const result = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(result))
      setOperation('')
    }

  }

  const handleDivNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const result = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(result))
      setOperation('')
    }

  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case 'X':
            handleMultNumbers();
            break;
          case '/':
            handleDivNumbers();
            break;
          default: 
            break;
        }
    }

  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="C" variant="special" onClick={handleOnClear}/>
          <Button variant="special" label="&plusmn;"onClick={handleChangeSignal}/>
          <Button variant="special" label="%" onClick={handlePercent}/>
          <Button label="&#247;" variant="operation" onClick={handleDivNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="&#215;" variant="operation" onClick={handleMultNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" variant="operation" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" variant="operation" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="0" variant="zero" onClick={() => handleAddNumber('0')}/>
          <Button label="," onClick={() => handleAddNumber('.')}/>
          <Button label="=" variant="operation" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
