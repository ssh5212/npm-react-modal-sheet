import { ReactNode } from 'react';
import './Modal.css';
type Props = {
    id: string;
    isOpen: boolean;
    children?: ReactNode;
    bgColor?: string;
    maxSize?: number;
    onClose: () => void;
};
declare const Modal: ({ id, isOpen, children, bgColor, maxSize, onClose }: Props) => import("react/jsx-runtime").JSX.Element;
export default Modal;
export { ModalProvider, useModal } from './ModalContext';
