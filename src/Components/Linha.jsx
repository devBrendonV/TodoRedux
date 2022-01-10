import React from 'react'
import './Linhas.css'
import Button from 'react-bootstrap/Button'
const Linha = () => {
    return (
        <div className='linha'>
            <span>Linha</span>
            <span>
            <Button variant="success">Primary</Button>{' '}
            <Button variant="danger"><i className="fas fa-trash-alt"></i></Button>{' '}
            </span>
               
        </div>
    )
}

export default Linha
