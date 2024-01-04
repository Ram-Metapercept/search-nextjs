import React, { useState } from 'react';
import data from '../../data.json'
import './modal.module.css';
import Search from './Search';
const Modal = ({ isOpen, onClose }) => {
    return (
        isOpen && (
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <span className="close" onClick={onClose}>&times;</span>
       <Search data={data} />
                </div>
            </div>
        )
    );
};

export default Modal;
