const React = require('react');
const ReactDOM = require('react-dom');
const {useState, useRef} = React;
const GuGuDan = () => {
  const [first, setFirst] = useState(Math.floor(Math.random()*9+1));
  const [second, setSecond] = useState(Math.floor(Math.random()*9+1));
  const [value, setValue] = useState('');
  const [result, setResult] = useState(''); 
  const inputElement = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    if(parseInt(value) === first * second) {
       setResult('정답');
       setFirst(Math.floor(Math.random()*9+1));
       setSecond(Math.floor(Math.random()*9+1));
       setValue(first*second);
       inputElement.current.focus();
    }else{
      setResult('틀렸습니다.'); 
      inputElement.current.focus();
    }
  }
  const onChange = (e) =>{
    setValue(e.target.value);
  }
  return (
    <>
      <div>{first} * {second} 는 </div>
      <form onSubmit={onSubmit}>
         <input ref={inputElement} value={value} onChange={onChange}></input>
         <button>제출</button>
      </form>
      <div>{result}</div>
    </>
  )
}

module.exports = GuGuDan;