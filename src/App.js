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
  const performCalculation = (first,second,operator)=>{
    if(first.current && second.current && operator.current) {
      let res=0;
      if(operator.current==='+'){res =first.current+second.current}
      if(operator.current==='-'){res =first.current-second.current}
      first.current=res;
      second.current=null;
      operator.current=null;
      setValue(first.current);
    }
  };
  const onClickHandler=(number)=>{
    if((number==='+'||number==='-') && first.current) {
      performCalculation(first,second,operator);
      operator.current=number;
    }
    else if(number === '=') {
      performCalculation(first,second,operator);
    }
    else if(number!=='+'&& number!=='-'){
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
        }
        else if(second.current && operator.current)
        {
          let num = second.current.toString() + number.toString();
          second.current =  parseInt(num);
          setValue(second.current);
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
            <Button onClick={onClickHandler} number={'+'}></Button>
          </div>
          <div className='buttonflex'>
            <Button onClick={onClickHandler} number={6}></Button>
            <Button onClick={onClickHandler} number={5}></Button>
            <Button onClick={onClickHandler} number={4}></Button>
            <Button onClick={onClickHandler} number={'-'}></Button>
          </div>
          <div className='buttonflex'>
            <Button onClick={onClickHandler} number={3}></Button>
            <Button onClick={onClickHandler} number={2}></Button>
            <Button onClick={onClickHandler} number={1}></Button>
            <Button onClick={onClickHandler} number={'='}></Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
