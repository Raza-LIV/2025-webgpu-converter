import React from 'react'

export const Input:React.FC<{inputRef: React.MutableRefObject<HTMLInputElement>}> = ({inputRef}) => {
  return <div>
    <input type="file" ref={inputRef}/>
  </div>
}
