import React from 'react'

export const Button:React.FC<{text: string,onClick?: () => void}> = ({text, onClick}) => {
    return <div>
        <button onClick={onClick}>
            {text}
        </button>
    </div>
}
