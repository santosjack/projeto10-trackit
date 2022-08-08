import styled from "styled-components"
import { deleteHabit, getHabits } from "../../services/trackit";

export default function Habit ({id, name, days, reload}) {
    function mountWeek (days){
        const weekdays = [
            {
                id: 0,
                value:  'D'
            },
            {
                id: 1,
                value:  'S'
            },
            {
                id: 2,
                value:  'T'
            },
            {
                id: 3,
                value:  'Q'
            },
            {
                id: 4,
                value:  'Q'
            },
            {
                id: 5,
                value:  'S'
            },
            {
                id: 6,
                value:  'S'
            },
        ];

     

        return(
            weekdays.map( item => {
                    return (
                        <div className={days.includes(item.id) ? 'selected' : ''}>
                            {item.value}
                        </div>
                    )
            })
          
        )   
    }

    function confirmDelete(id){
        const result = window.confirm("Desejarealmente excluir o hábito?");
        if(result){
            deleteHabit({ idHabit: id, token: JSON.parse(localStorage.getItem('token')) })
            .then((resp) => {
                reload();
            }).catch(
                console.log("Não foi possível excluir")
            )
        }
    }

    return(
        <Wrapper>
            <div className="main">
                <h3>{name}</h3>
                <div>
                    {mountWeek(days)}
                </div>
            </div>
            <div className="bt-delete">
                <ion-icon onClick={() => confirmDelete(id)} name="trash-outline"></ion-icon>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 340px;
    height: 91px;
    margin: 0 auto;
    background-color: #FFFFFF;
    padding: 13px 15px;
    display: flex;
    justify-content: space-between;

    .main{
        width: 75%;

        h3{
            font-size: 20px;
            line-height: 25px;
            margin-bottom: 5px;
        }

        div{
            width: 230px;
            height: 30px;
            display: flex;
            justify-content: space-between;

            div{
                width: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 5px;
                background-color: #FFFFFF;
                color: #D5D5D5;
                border: 1px solid #D5D5D5;
            }

            .selected{
                background-color: #CFCFCF;
                color: #FFFFFF;
            }
        }
    }

    .bt-delete{

        ion-icon{
            font-size: 18px;
        }
    }

`;