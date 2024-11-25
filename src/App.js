import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false)

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    if (num === '.') {
      // Adiciona o ponto apenas se currentNumber for '0' ou vazio
      if (currentNumber === '0' || currentNumber === '') {
        setCurrentNumber('.');
      } else if (!currentNumber.includes('.')) {
        setCurrentNumber(prev => `${prev}${num}`);
      }
    } else {
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
    }
  };

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setHistory(prev => [...prev, `${firstNumber} + ${currentNumber} = ${sum}`]);
      setFirstNumber('0');
      setOperation('');
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const difference = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(difference));
      setHistory(prev => [...prev, `${firstNumber} - ${currentNumber} = ${difference}`]);
      setFirstNumber('0');
      setOperation('');
    }
  };

  const handleMultiplyNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const product = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(product));
      setHistory(prev => [...prev, `${firstNumber} * ${currentNumber} = ${product}`]);
      setFirstNumber('0');
      setOperation('');
    }
  };

  const handleDivideNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const divisor = Number(currentNumber);
      if (divisor !== 0) {
        const quotient = Number(firstNumber) / divisor;
        setCurrentNumber(String(quotient));
        setHistory(prev => [...prev, `${firstNumber} / ${currentNumber} = ${quotient}`]);
        setFirstNumber('0');
        setOperation('');
      } else {
        setCurrentNumber('Erro: Divisão por zero');
      }
    }
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        default:
          break;
      }
    }
  };

  const toggleHistory = () =>{
    setShowHistory(!showHistory);
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={handleMultiplyNumbers} />
          <Button label="/" onClick={handleDivideNumbers} />
          <Button label="c" onClick={handleOnClear} />
          <Button label="." onClick={() => handleAddNumber('.')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="Histórico" onClick={toggleHistory} />
        </Row>

        {showHistory && (
          <div style={{marginTop: '20px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '10px'}}>
            <h3>Histórico da Cálculadora</h3>
            <ul>
              {history.map((entry, index) =>(
                <li key={index} style={{listStyle: 'none'}}>{entry}</li>
              ))}
            </ul>
            <Button label='Fechar' onClick={toggleHistory} />
          </div>
        )}
      </Content>
    </Container>
  );
};

export default App;