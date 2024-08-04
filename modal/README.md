# @angelplayer/react-modal-sheet

![image](https://github.com/user-attachments/assets/9494bfdf-5f98-43f3-bc40-a6c6cddd5473)

This package is a "Super easy Modal Sheet" component made by [AngelPlayer](https://github.com/ssh5212/npm-react-modal-sheet).

It works in React and supports both JavaScript and TypeScript.
<br/><br/><br/>

## 1. Install

```
$ npm i @angelplayer/react-modal-sheet
```

<br/><br/>

## 2. Example Code

### 1) Context API Setting

```tsx
import { ModalProvider } from '@angelplayer/react-modal-sheet';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <ModalProvider>
            <App />
        </ModalProvider>
    </React.StrictMode>
);
```

<br/><br/>

### 2) Import "Modal" Component, and "useModal" Hook

```tsx
// App.tsx
import Modal, { useModal } from '@angelplayer/react-modal-sheet';

function App() {
    const { openModalId, handleShowModal, handleCloseModal, handleBgColor, handleMaxSize } = useModal();

    useEffect(() => {
        // Optional
        handleBgColor('#fff');
        handleMaxSize(1024);
    }, []);

    return (
        <div className='App'>
            <div className='btn-outer'>
                <button onClick={() => handleShowModal('id_greet')} className='show-modal-btn'>
                    Gretting
                </button>
                <button onClick={() => handleShowModal('id_thank')} className='show-modal-btn'>
                    Thanks
                </button>
            </div>

            <Modal id='id_greet' isOpen={openModalId === 'id_greet'} onClose={handleCloseModal}>
                <h1>World Greetings</h1>
                <img src='/greet.jpg' alt='greet' />
                <p>Konichiwa! (English)</p>
                <p>Ahoy! (Japanese)</p>
                <p>Kikiriki! (German)</p>
            </Modal>

            <Modal id='id_thank' isOpen={openModalId === 'id_thank'} onClose={handleCloseModal}>
                <h1>World Thanks</h1>
                <img src='/thank.jpg' alt='greet' />
                <p>Thank you! (English)</p>
                <p>감사합니다! (Korean)</p>
                <p>ありがとうございます! (Japanese)</p>
                <p>Danke! (German)</p>
            </Modal>
        </div>
    );
}

export default App;
```

<br/><br/>

## 3. How to Use

### 1) Context API

```tsx
<ModalProvider>
    <App />
</ModalProvider>
```

All you need to do to prepare for using the functionality is to wrap the App with a ModalProvider.
<br/><br/>

### 2) "Modal" Component

```tsx
<Modal id='YOUR_ID' isOpen={openModalId === 'YOUR_ID'} onClose={handleCloseModal}>
    <h1>Lorem Ipsum</h1>
    <p>Lorem Ipsum</p>
</Modal>
```

Please write the tags you wish to display inside the Modal Component.

The Modal requires a unique identifier "id".

Pass the "id" created as a parameter to "isOpen".
<br/><br/>

### 3) "useModal" Hook

```tsx
const { openModalId, handleShowModal, handleCloseModal, handleBgColor, handleMaxSize } = useModal();
```

You can customize the Modal Sheet by handling actions such as opening, closing, setting background color, and specifying maximum size.
<br/><br/><br/>
<b>Opening the Modal Sheet</b>

```tsx
<button onClick={() => handleShowModal('YOUR_ID')}'>
    Gretting
</button>
```

If you wish the Modal Sheet to open under specific circumstances, use "handleShowModal()".

Pass the "id" specified during the creation of the Modal as a parameter.
<br/><br/><br/>
<b>Setting Background Color</b>

```tsx
handleBgColor('#fff');
```

You can change the background color of the Modal Sheet as desired.

Supports Hex Code and RGB values.
<br/><br/><br/>
<b>Specifying Maximum Size</b>

```tsx
handleMaxSize(NUMBER);
```

The Modal Sheet is implemented responsively by default, with a maximum width of 768px.

If you wish to adjust the maximum width according to the requirements of your service, please use "handleMaxSize()".
