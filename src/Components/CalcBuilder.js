import React, { useState } from 'react'
import Button from '../Elements/Button/Button';

const CalcBuilder = () => {
    const [input1, setInput1] = useState()
    const [input2, setInput2] = useState()
    const [input3, setInput3] = useState()
    const [total, setTotal] = useState(0)

    let newNumber = []

    if(input1 || input2 || input3) newNumber.push(Number(input1), Number(input2), Number(input3))

    const additionHandler = () => {
        const result = newNumber.reduce((total, value) => total + value );
        setTotal(result)
    }

    const subtractionHandler = () => {
        const result = newNumber.reduce((total, value) => total - value );
        setTotal(result)
    }

    const multiplicationHandler = () => {
        const result = newNumber.reduce((total, value) => total * value );
        setTotal(result)
    }

    const divisionHandler = () => {
        const result = newNumber.reduce((total, value) => total / value );
        setTotal(result)
    }

    return (
        <>
            <div className="section-result">
                {total}
            </div>

            <div className="calc-main">
                <div className="input-section">
                    <div className="section-info">
                        <div className="section-info_left">
                            <input type="number" onChange={(e) => setInput1(e.target.value)} />
                        </div>
                        <div className="section-info_right">
                            <input type="checkbox" className="checkbox" />
                        </div>
                    </div>

                    <div className="section-info">
                        <div className="section-info_left">
                            <input type="number" onChange={(e) => setInput2(e.target.value)} />
                        </div>
                        <div className="section-info_right">
                            <input type="checkbox" className="checkbox" />
                        </div>
                    </div>

                    <div className="section-info">
                        <div className="section-info_left">
                            <input type="number" onChange={(e) => setInput3(e.target.value)} />
                        </div>
                        <div className="section-info_right">
                            <input type="checkbox" className="checkbox" />
                        </div>
                    </div>
                </div>

                <div className="button-section">
                    <Button isPrimary onClick={additionHandler}>+</Button>
                    <Button isPrimary onClick={subtractionHandler}>-</Button>
                    <Button isPrimary onClick={multiplicationHandler}>x</Button>
                    <Button isPrimary onClick={divisionHandler}>/</Button>
                </div>
            </div>
        </>
    )
}

export default CalcBuilder
