import { Modal } from "react-bootstrap";
import { ModalProps } from "@/types/modalprops";

const  CustomModal: React.FC<ModalProps> = ({
  show,
  onHide,
  content,
  title,
  headerclose,
  footerclose,
}) => {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header className="style-modal">
          <div className="container_titulo">{title}</div>
          {headerclose}
        </Modal.Header>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer className="style-modal">{footerclose}</Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;