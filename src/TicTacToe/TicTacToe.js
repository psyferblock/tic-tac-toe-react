import React,{useState} from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
    const [turn,setTurn]=useState('x');
    const[cells,setCells]=useState[Array(9).fill('')]
    const handleClick=(num)=>{
        let squares=[...cells]
        if (turn=='x'){
            setTurn('o')
        }else{
            setTurn('x')
        }
    }
    const Cell=()=>{
        return <td onClick={()=>handleClick()}>-</td>
    }
  return (
    <div className='container'>
        <table>
            Turn:{turn}
            <body>
                <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                    <Cell num={2}/>

                </tr>
                <tr>
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>

                </tr> 
                <tr>
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>

                </tr>
            </body>
        </table>
    </div>
  )
}

export default TicTacToe