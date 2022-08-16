import { ref, remove } from "firebase/database";
import { database } from "../../services/firebase";
import { ButtonCancel, ButtonYes, Modal, ModalOverlay } from "./style";

interface ModalDeleteProps{
    modal: boolean;
    setModal: Function;
    chave: string;
}

export function ModalDelete(props: ModalDeleteProps){

    function deleteAssignment(chave: string){
        const firebaseAssignment = remove(ref(database, `list/${chave}`))
    }

    return(
        <ModalOverlay>
            <Modal>
                <h2>Excluir tarefa?</h2>
                <ButtonCancel onClick={() => props.setModal(false)}>Cancelar</ButtonCancel>
                <ButtonYes onClick={() => deleteAssignment(props.chave)}>Excluir</ButtonYes>
            </Modal>
        </ModalOverlay>
    )
}
