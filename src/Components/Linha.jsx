import React from 'react'
import './Linhas.css'
import Button from 'react-bootstrap/Button'
const Linha = () => {
    return (
        <div className='linha'>
            <span>Brendon</span>
            <span>
            <Button variant="success"><i className="fas fa-check-circle"></i></Button>{' '}
            <Button variant="danger"><i className="fas fa-trash-alt"></i></Button>{' '}
            </span>
               
        </div>
    )
}

export default Linha
