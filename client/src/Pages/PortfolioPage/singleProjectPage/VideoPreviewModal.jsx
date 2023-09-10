import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const VideoPreviewModal = (props) => {
    return (
        <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
        </Modal.Header>

        <Modal.Body>
          <video src={props.video} autoPlay loop muted/>
        </Modal.Body>

      </Modal.Dialog>
    </div>
    );
};

export default VideoPreviewModal;