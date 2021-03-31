import React from 'react'
import {getColors} from '../../utils/util'
import './Block.scss'

const Block = ({num}) => {
  return (
    <div className={'block'}
         style={{background: getColors(num), color: num === 2 || num === 4 ? "#645B52" : "#F7F4EF",}}>
      {num !== 0 ? num : ""}
    </div>
  );
}
export default Block


