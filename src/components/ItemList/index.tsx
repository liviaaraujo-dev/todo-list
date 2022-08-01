import { AssignmentContainer, ButtonDelete } from "./style";
import { BsFillTrashFill } from 'react-icons/bs';
import { database } from "../../services/firebase";
import { ref, remove } from "firebase/database";

type PropsTypes = {
    assignment: String | null;
    key: String | null;
    chave: string;
}

export function ItemList(props: PropsTypes){

    function deleteAssignment(chave: string){
        const firebaseAssignment = remove(ref(database, `list/${chave}`))
    }
    

    return(
        <AssignmentContainer>
            <p>{props.assignment}</p>
            <ButtonDelete onClick={() => deleteAssignment(props.chave)}>
                <BsFillTrashFill/>
            </ButtonDelete>
        </AssignmentContainer>
    )
    
}
