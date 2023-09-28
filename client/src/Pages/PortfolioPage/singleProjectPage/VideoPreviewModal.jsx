import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Spinner } from 'react-bootstrap';


const VideoPreviewModal = ({ video, show, setShow })  => {
  const [projectVideo, setProjectVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    setTimeout(() => {
      setProjectVideo(video)
      setIsLoading(false)
    }, 1000)
  },[video])

  return (
        <>
    <Modal show={show} onHide={handleClose} className="video-modal" size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
          {isLoading ? 
          <div className="text-center">
            <Spinner animation="grow" variant="danger" />
            <p className="loading-text">Loading...</p>
          </div> 
          : <video src={projectVideo} autoPlay loop muted className='modal-video'/>}
      </Modal.Body>
    </Modal>
  </>
  );
};

export default VideoPreviewModal;