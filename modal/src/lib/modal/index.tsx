import React, { ReactNode, useEffect, useRef } from 'react';
import './Modal.css';
import { useModal } from './ModalContext';

type Props = {
    id: string;
    isOpen: boolean;
    children?: ReactNode;
    bgColor?: string;
    maxSize?: number;
    onClose: () => void;
};

const Modal = ({ id, isOpen, children, bgColor, maxSize, onClose }: Props) => {
    const modalSheetRef = useRef<HTMLDivElement>(null);
    const modalContentRef = useRef<HTMLDivElement>(null);
    const { bgColor: defaultBgColor, maxSize: defaultMaxSize } = useModal();

    useEffect(() => {
        if (isOpen) {
            if (modalSheetRef.current) {
                modalSheetRef.current.classList.add('show');
                document.body.style.overflowY = 'hidden';
            }
        } else {
            if (modalSheetRef.current) {
                modalSheetRef.current.classList.remove('show');
                document.body.style.overflowY = 'auto';
            }
        }
    }, [isOpen]);

    useEffect(() => {
        if (modalContentRef.current && bgColor) {
            modalContentRef.current.style.backgroundColor = bgColor;
        }
    }, [bgColor]);

    useEffect(() => {
        if (modalSheetRef.current && maxSize) {
            modalSheetRef.current.style.maxWidth = `${maxSize}px`;
        }
    }, [maxSize]);

    return (
        <>
            {isOpen && <div className='modal-overlay' onClick={onClose}></div>}
            <div ref={modalSheetRef} className='modal-sheet' style={{ maxWidth: `${maxSize || defaultMaxSize}px` }}>
                <div
                    ref={modalContentRef}
                    className='modal-content'
                    style={{ backgroundColor: bgColor || defaultBgColor }}
                >
                    <div className='modal-close-btn' onClick={onClose}>
                        &times;
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Modal;
export { ModalProvider, useModal } from './ModalContext';
