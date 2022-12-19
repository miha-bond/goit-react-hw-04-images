import ReactModal from 'react-modal';

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: ' center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '5',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '85%',
    maxHeight: '90%',
    padding: '0',
    inset: 'auto',
    backgroundColor: 'transparent',
    border: '2px solid',
    borderRadius: '12px',
    outline: 'none',
    overflow: 'hidden',
  },
};
ReactModal.setAppElement('#root');

export const Modal = ({ selectImage, resetImage }) => {
  return (
    <ReactModal
      isOpen={Boolean(selectImage)}
      onRequestClose={resetImage}
      style={modalStyles}
    >
      <img src={selectImage} alt="Large" />
    </ReactModal>
  );
};
export default Modal;
