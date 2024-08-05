import React, { useEffect } from 'react';
import Modal from './lib/modal/index';
import { useModal } from './lib/modal/ModalContext';

export default function App() {
    const { openModalId, handleShowModal, handleBgColor, handleMaxSize } = useModal();

    useEffect(() => {
        handleBgColor('#4285f4');
        handleBgColor('#34a853');
        handleBgColor('#FBBC05');
        handleMaxSize(1024);
    }, []);

    return (
        <div className='App'>
            <button onClick={() => handleShowModal('modal1')} className='show-modal'>
                Show Modal 1
            </button>
            <button onClick={() => handleShowModal('modal2')} className='show-second-modal'>
                Show Modal 2
            </button>

            <Modal id='modal1' isOpen={openModalId === 'modal1'}>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <p>안녕하세요</p>
                <img src='/1.png' alt='png' />
            </Modal>
            <Modal id='modal2' isOpen={openModalId === 'modal2'}></Modal>
        </div>
    );
}
