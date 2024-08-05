import React, { ReactNode, useEffect, useRef } from 'react';
import './Modal.css';
import { useModal } from './ModalContext';

type Props = {
    id: string;
    isOpen: boolean;
    children?: ReactNode;
    bgColor?: string;
    maxSize?: number;
};

const Modal = ({ id, isOpen, children, bgColor, maxSize }: Props) => {
    const modalSheetRef = useRef<HTMLDivElement>(null);
    const modalOverlayRef = useRef<HTMLDivElement>(null);
    const modalContentRef = useRef<HTMLDivElement>(null);
    const { bgColor: defaultBgColor, maxSize: defaultMaxSize, handleCloseModal } = useModal();

    useEffect(() => {
        if (isOpen) {
            if (modalSheetRef.current) {
                modalSheetRef.current.classList.add('show');
                document.body.style.overflowY = 'hidden';
            }
            if (modalOverlayRef.current) {
                modalOverlayRef.current.style.display = 'block'; // 오버레이 표시
                setTimeout(() => {
                    if (modalOverlayRef.current) {
                        modalOverlayRef.current.classList.add('show');
                    }
                }, 10); // 약간의 딜레이 후에 show 클래스를 추가하여 transition이 적용되도록 함
            }
        } else {
            if (modalSheetRef.current) {
                modalSheetRef.current.classList.remove('show');
                document.body.style.overflowY = 'auto';
            }
            if (modalOverlayRef.current) {
                modalOverlayRef.current.classList.remove('show');
                setTimeout(() => {
                    if (modalOverlayRef.current) {
                        modalOverlayRef.current.style.display = 'none'; // 애니메이션이 끝난 후 오버레이를 숨김
                    }
                }, 300); // transition 시간과 일치시킴
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
            <div ref={modalOverlayRef} className='modal-overlay' onClick={handleCloseModal}></div>
            <div ref={modalSheetRef} className='modal-sheet' style={{ maxWidth: `${maxSize || defaultMaxSize}px` }}>
                <div
                    ref={modalContentRef}
                    className='modal-content'
                    style={{ backgroundColor: bgColor || defaultBgColor }}
                >
                    <div className='modal-close-btn' onClick={handleCloseModal}>
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
