import React from 'react'
import Block from '../block/Block';
import Header from '../header/Header';
import './Board.scss'


const Board = ({ data, score, best, onClickNewGame }) =>{

  return (
    <div className='board'>
      <Header score={score} best={best} onClickNewGame={onClickNewGame} />
      <div className='board__body'>
        {data.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className='board__row'>
              {row.map((num, index) => (
                <Block num={num} key={index} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );

}

export default Board