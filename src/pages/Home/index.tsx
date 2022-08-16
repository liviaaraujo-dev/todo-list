import { Assignments, Container, InputAssignment, Title } from "./styles";
import { AiOutlinePlus } from 'react-icons/ai';
import { ItemList } from "../../components/ItemList";
import { useEffect, useState } from "react";
import { onValue, push, ref } from "firebase/database";
import { database } from "../../services/firebase";

type ItemList = {
    chave: string;
    title: string;
}

export function Home(){
    const [list, setList] = useState<ItemList[]>();
    const [assignment, setAssignment] = useState("");

    useEffect(() => {
        onValue(ref(database, 'list/'), (resultado) => {
            const listResult = Object.entries<ItemList>(resultado.val() ?? {}).map(([chave, valor]) => {
                return {
                    chave: chave,
                    title: valor.title,
                };
            });
            setList(listResult);
        });
        
    }, [])

    async function createAssignment(){
        const firebaseAssignment = await push(ref(database, 'list/'), {
            title: assignment,
        });
        setAssignment("");
    }

    function enterPressed(e: { key: string; }){
        if(e.key === "Enter"){
            createAssignment();
        }
    }


    return(
        <>
            <Container>
                    <Title>Lista de Tarefas</Title>
                    <InputAssignment>
                        <input type="text" placeholder="Adicione uma tarefa" onChange={value => setAssignment(value.target.value)} value={assignment}  onKeyDown={enterPressed}/>
                        <button onClick={createAssignment}>
                            <AiOutlinePlus/>
                        </button>
                    </InputAssignment>
            </Container>

            <Assignments>
                {
                    list?.map(assignment => {
                        return <ItemList assignment={assignment.title} key={assignment.chave} chave={assignment.chave}/>
                    })
                }
            </Assignments>
        </>
    )
}
