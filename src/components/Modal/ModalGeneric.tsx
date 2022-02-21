import { Modal } from "@material-ui/core";
import Button from "../Button";
import Icons from "../Icons";
import "./styles.scss";

export interface IModalGeneric {
  show: boolean;
  handleClose: () => void;
  handleConfirm?: () => void;
  modalMessage?: string;
  modalRef: any;
  texts?: {
    title?: string;
    btnLeft?: string;
    btnRight?: string;
  };
  hideLeftBtn?: boolean;
  hideRightBtn?: boolean;
  leftBtnFun?: () => void;
  size?: "large" | "medium" | "small";
}

const ModalGeneric = ({
  show,
  handleClose,
  modalMessage,
  modalRef,
  handleConfirm,
  texts = {
    title: "Aviso:",
    btnLeft: "CANCELAR",
    btnRight: "CONFIRMAR",
  },
  hideLeftBtn = false,
  hideRightBtn = false,
  leftBtnFun,
  size = "small",
}: IModalGeneric) => {
  return (
    <Modal open={show} onClose={handleClose} onBackdropClick={handleClose}>
      <div className="modal__wrapper" ref={modalRef}>
        <div className={`modal__wrapper__background ${size}`}>
          <div className="modal__wrapper__header">
            <div className="modal__wrapper__header__message">
              <span>{texts.title}</span>

              <Icons name="close" handleClick={handleClose} />
            </div>
            <div className="modal__wrapper__body">
              <p className="modal__wrapper__body__message">{modalMessage}</p>
            </div>

            <div className="modal__wrapper__footer">
              {!hideLeftBtn && (
                <Button
                  btnClasses="_red"
                  btnExtraStyles={{
                    height: 35,
                    width: hideRightBtn ? "98%" : "48%",
                  }}
                  btnFunction={leftBtnFun ?? handleClose}
                >
                  {texts.btnLeft}
                </Button>
              )}

              {!hideRightBtn && (
                <Button
                  btnClasses="_blue"
                  btnExtraStyles={{
                    height: 35,
                    width: hideLeftBtn ? "98%" : "48%",
                  }}
                  btnFunction={handleConfirm}
                >
                  {texts.btnRight}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalGeneric;
