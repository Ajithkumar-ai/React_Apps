import { useRef, useState } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import Card from './Components/Card/Card';
import Input from './Components/Input/Input';

function App() {
  const [value,setValue] = useState(0);
  const first= useRef(null);
  const second = useRef(null);
  const operator = useRef(null);
  const operators = ['+',"-","*","/"];
  const performCalculation = (first,second,operator)=>{
    if(first.current && second.current && operator.current) {
      let res=0;
      if(operator.current==='+'){res =first.current+second.current}
      if(operator.current==='-'){res =first.current-second.current}
      if(operator.current==='*'){res =first.current*second.current}
      if(operator.current==='/'){res =first.current/second.current}
      first.current=res;
      second.current=null;
      operator.current=null;
      setValue(first.current);
    }
  };
  const onClickHandler=(number)=>{
    if(number==='AC') {
      first.current=null;
      second.current=null;
      operator.current=null;
      setValue(0);
    }
    else if((operators.includes(number)) && first.current) {
      performCalculation(first,second,operator);
      let displayValue = '';
      if(first.current && second.current){displayValue=(first.current + number+ second.current).toString();}
      else if(first.current && !second.current){displayValue=(first.current + number).toString();}
      setValue(displayValue);
      operator.current=number;
    }
    else if(number === '=') {
      performCalculation(first,second,operator);
    }
    else if(!operators.includes(number)){
        if(!first.current) {
          first.current=parseInt(number.toString());
          setValue(first.current);
        }
        else if(first.current && !operator.current)
        {
          let num = first.current.toString() + number.toString();
          first.current =  parseInt(num);
          setValue(first.current);
        }
        else if(!second.current && operator.current) {
          second.current=parseInt(number.toString());
          let displayValue = (first.current+operator.current+second.current).toString();
          setValue(displayValue);
        }
        else if(second.current && operator.current)
        {
          let num = second.current.toString() + number.toString();
          second.current =  parseInt(num);
          let displayValue = (first.current+operator.current+second.current).toString();
          setValue(displayValue);
        }
    }
  };
  return (
    <div className='displayflex'>
      <Card>
        <Input inputValue={value}></Input>
        <div className='buttongroup'>
          <div className='buttonflex'>
            <Button onClick={onClickHandler} number={7}></Button>
            <Button onClick={onClickHandler} number={8}></Button>
            <Button onClick={onClickHandler} number={9}></Button>
            <Button onClick={onClickHandler} number={'AC'}></Button>
          </div>
          <div className='buttonflex'>
            <Button onClick={onClickHandler} number={6}></Button>
            <Button onClick={onClickHandler} number={5}></Button>
            <Button onClick={onClickHandler} number={4}></Button>
            <Button onClick={onClickHandler} number={'+'}></Button>
          </div>
          <div className='buttonflex'>
            <Button onClick={onClickHandler} number={3}></Button>
            <Button onClick={onClickHandler} number={2}></Button>
            <Button onClick={onClickHandler} number={1}></Button>
            <Button onClick={onClickHandler} number={'-'}></Button>
          </div>
          <div className='buttonflex'>
            <Button onClick={onClickHandler} number={0}></Button>
            <Button onClick={onClickHandler} number={'*'}></Button>
            <Button onClick={onClickHandler} number={'/'}></Button>
            <Button onClick={onClickHandler} number={'='}></Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
