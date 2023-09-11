import Modal from 'react-bootstrap/Modal';


const VideoPreviewModal = ({ video, show, setShow })  => {
    const handleClose = () => setShow(false);

    return (
         <>
      <Modal show={show} onHide={handleClose} className="video-modal" size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <video src={video} autoPlay loop muted className='modal-video'/>
        </Modal.Body>
      </Modal>
    </>
    );
};

export default VideoPreviewModal;