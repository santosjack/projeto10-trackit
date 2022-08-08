import { useState } from "react";
import styled from "styled-components";
import { createHabit } from '../../services/trackit';

export default function FormHabit({setVisible, reload}){


    const weekdays = [
        {
            id: 0,
            value:  'D',
            selected: false,
        },
        {
            id: 1,
            value:  'S',
            selected: false,
        },
        {
            id: 2,
            value:  'T',
            selected: false,
        },
        {
            id: 3,
            value:  'Q',
            selected: false,
        },
        {
            id: 4,
            value:  'Q',
            selected: false,
        },
        {
            id: 5,
            value:  'S',
            selected: false,
        },
        {
            id: 6,
            value:  'S',
            selected: false,
        },
    ];


    const [form, setForm] = useState({});
    const [days, setDays] = useState(weekdays);

    
    function Day({id, value, selected}){
        return(
            <div className={selected ? 'selected' : ''}
                            onClick={() => selectDay(id)}
                            >
                                {value}
                            </div>
        )
    }

    function selectDay(id){

        const newDays = days.map(item => {
            if (item.id === id) {
                return {
                     ...item,
                     selected: !item.selected
                 };
            }
            return {
                 ...item,
             };
        });

        setDays([...newDays]);
    }

    function handleForm({name, value}) {
        setForm({
            ...form,
            [name]: value,
        });
        console.log(form);
    }

    function sendForm(e){
        e.preventDefault();

        const selecteds = days
        .filter((item) => item.selected)
        .map((item) => item.id);

        console.log(selecteds);

        createHabit({data: { name: form.name, days: selecteds}, token: JSON.parse(localStorage.getItem('token'))})
        .then((res) => {
            setVisible(false);
            reload();
        })
        .catch((res) => {
            alert("Erro ao salvar no hábito");
        })
    }


    return(
        <Wrapper>
            <form className="form" onSubmit={sendForm}>
                <input name='name' placeholder='nome do hábito' type='text' required
                onChange={(e) => handleForm({name: e.target.name, value: e.target.value})}
                />
                <div className="weekset">
                    {days.map(item => {
                        return (
                            <Day 
                                key={item.id}
                                id={item.id}
                                value={item.value}
                                selected={item.selected}
                            />
                        )
                    })}
                </div>
                <div className="buttons">
                    <button className="cancel" onClick={() => {setForm({}); setVisible(false)}}>
                        Cancelar
                    </button>
                    <button className="save" type="submit">
                        Salvar
                    </button>
                </div>
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 340px;
    height: 180px;
    margin: 0 auto;
    padding: 15px 17px;
    background-color: #FFFFFF;
    
    .form{
        width: 303px;
        margin: 0 auto;

        >input{
            width: 100%;
            height: 45px;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            padding: 0.5em;
        }

        input::placeholder{
            color: #DBDBDB;
            font-size: 20px;
            line-height: 25px;
        }

        .weekset{
            margin-top: 8px;
            width: 100%;
            display: flex;

            div{
                width: 30px;
                height: 30px;
                border: 1px solid #D5D5D5;
                color: #DBDBDB;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 6px;
            }

            .selected{
                background-color: #CFCFCF;
                border: 1px solid #CFCFCF;
                color: #FFFFFF;
            }
        }

        .buttons{
            margin-top: 20px;
            width: 100%;
            display: flex;
            justify-content: end;

            button{
                margin-left: 5px;
                width: 84px;
                height: 35px;
                border: none;
                border-radius: 5px;
                font-size: 16px;
                line-height: 20px;
                text-align: center;
            }

            .save{
                background-color: #52B6FF;
                color: #FFFFFF;
            }

            .cancel{
                background-color: #FFFFFF;
                color: #52B6FF;
            }

        }
    }
`;