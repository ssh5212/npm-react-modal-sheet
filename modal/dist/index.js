var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import './Modal.css';
import { useModal } from './ModalContext';
var Modal = function (_a) {
    var id = _a.id, isOpen = _a.isOpen, children = _a.children, bgColor = _a.bgColor, maxSize = _a.maxSize, onClose = _a.onClose;
    var modalSheetRef = useRef(null);
    var modalContentRef = useRef(null);
    var _b = useModal(), defaultBgColor = _b.bgColor, defaultMaxSize = _b.maxSize;
    useEffect(function () {
        if (isOpen) {
            if (modalSheetRef.current) {
                modalSheetRef.current.classList.add('show');
                document.body.style.overflowY = 'hidden';
            }
        }
        else {
            if (modalSheetRef.current) {
                modalSheetRef.current.classList.remove('show');
                document.body.style.overflowY = 'auto';
            }
        }
    }, [isOpen]);
    useEffect(function () {
        if (modalContentRef.current && bgColor) {
            modalContentRef.current.style.backgroundColor = bgColor;
        }
    }, [bgColor]);
    useEffect(function () {
        if (modalSheetRef.current && maxSize) {
            modalSheetRef.current.style.maxWidth = "".concat(maxSize, "px");
        }
    }, [maxSize]);
    return (_jsxs(_Fragment, { children: [isOpen && _jsx("div", { className: 'modal-overlay', onClick: onClose }), _jsx("div", __assign({ ref: modalSheetRef, className: 'modal-sheet', style: { maxWidth: "".concat(maxSize || defaultMaxSize, "px") } }, { children: _jsxs("div", __assign({ ref: modalContentRef, className: 'modal-content', style: { backgroundColor: bgColor || defaultBgColor } }, { children: [_jsx("div", __assign({ className: 'modal-close-btn', onClick: onClose }, { children: "\u00D7" })), children] })) }))] }));
};
export default Modal;
export { ModalProvider, useModal } from './ModalContext';
