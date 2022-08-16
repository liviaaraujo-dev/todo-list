import { AssignmentContainer, ButtonDelete } from "./style";
import { BsFillTrashFill } from 'react-icons/bs';
import { useState } from "react";
import { ModalDelete } from "../ModalDelete";

interface PropsTypes {
    assignment: String | null;
    key: String | null;
    chave: string;
}

export function ItemList(props: PropsTypes){

    const [modal, setModal] = useState(false);


    return(
        <>
            <AssignmentContainer>
                <p>{props.assignment}</p>
                <ButtonDelete onClick={() => setModal(true)}>
                    <BsFillTrashFill/>
                </ButtonDelete>
            </AssignmentContainer>
            

            
            {modal ?
                <ModalDelete modal={modal} setModal={setModal} chave={props.chave}/>
                : null

            }
        </>
    )
    
}
