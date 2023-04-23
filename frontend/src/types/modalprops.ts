export interface ModalProps {
    show: boolean;
     onHide: () => void;
     content: React.ReactNode;
     title: React.ReactNode;
     headerclose: React.ReactNode;
     footerclose: React.ReactNode;
   }