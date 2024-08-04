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
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
var ModalContext = createContext(undefined);
export var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(null), openModalId = _b[0], setOpenModalId = _b[1];
    var _c = useState('#fff'), bgColor = _c[0], setBgColor = _c[1]; // 기본 배경색 설정
    var _d = useState(768), maxSize = _d[0], setMaxSize = _d[1]; // 기본 최대 크기 설정
    var handleShowModal = function (id) {
        setOpenModalId(id);
    };
    var handleCloseModal = function () {
        setOpenModalId(null);
    };
    var handleMaxSize = function (e) {
        setMaxSize(e);
    };
    var handleBgColor = function (e) {
        setBgColor(e);
    };
    return (_jsx(ModalContext.Provider, __assign({ value: {
            openModalId: openModalId,
            bgColor: bgColor,
            maxSize: maxSize,
            handleShowModal: handleShowModal,
            handleCloseModal: handleCloseModal,
            handleMaxSize: handleMaxSize,
            handleBgColor: handleBgColor,
        } }, { children: children })));
};
export var useModal = function () {
    var context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
