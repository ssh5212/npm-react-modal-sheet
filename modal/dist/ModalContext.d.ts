import React, { ReactNode } from 'react';
interface ModalContextType {
    openModalId: string | null;
    bgColor: string;
    maxSize: number;
    handleShowModal: (id: string) => void;
    handleCloseModal: () => void;
    handleMaxSize: (e: number) => void;
    handleBgColor: (e: string) => void;
}
export declare const ModalProvider: React.FC<{
    children: ReactNode;
}>;
export declare const useModal: () => ModalContextType;
export {};
