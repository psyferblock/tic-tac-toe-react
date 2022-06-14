import React from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
    const Cell=()=>{
        return <td>-</td>
    }
  return (
    <div className='container'>
        <table>
            <body>
                <tr>
                    <Cell/>
                    <Cell/>
                    <Cell/>

                </tr>
                <tr>
                    <Cell/>
                    <Cell/>
                    <Cell/>

                </tr> 
                <tr>
                    <Cell/>
                    <Cell/>
                    <Cell/>

                </tr>
            </body>
        </table>
    </div>
  )
}

export default TicTacToe