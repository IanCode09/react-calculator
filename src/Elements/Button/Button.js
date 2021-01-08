import React from 'react'

const Button = ({ className, isPrimary, children, onClick }) => {
    const btnClass = [className]
    if(isPrimary) btnClass.push('btn btn-primary')

    return (
        <button
            className={btnClass.join(" ")}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
