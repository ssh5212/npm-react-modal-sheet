import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
    openModalId: string | null;
    bgColor: string;
    maxSize: number;
    handleShowModal: (id: string) => void;
    handleCloseModal: () => void;
    handleMaxSize: (e: number) => void;
    handleBgColor: (e: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [openModalId, setOpenModalId] = useState<string | null>(null);
    const [bgColor, setBgColor] = useState('#fff'); // 기본 배경색 설정
    const [maxSize, setMaxSize] = useState(768); // 기본 최대 크기 설정

    const handleShowModal = (id: string) => {
        setOpenModalId(id);
    };

    const handleCloseModal = () => {
        setOpenModalId(null);
    };

    const handleMaxSize = (e: number) => {
        setMaxSize(e);
    };

    const handleBgColor = (e: string) => {
        setBgColor(e);
    };

    return (
        <ModalContext.Provider
            value={{
                openModalId,
                bgColor,
                maxSize,
                handleShowModal,
                handleCloseModal,
                handleMaxSize,
                handleBgColor,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
