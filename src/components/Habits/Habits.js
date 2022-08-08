import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { getHabits } from '../../services/trackit';
import UserContext from "../contexts/UserContext";
import Footer from "../Footer";
import Navbar from "../Navbar";
import FormHabit from "./FormHabit";
import Habit from "./Habit";

export default function Habits() {

    const { userData } = useContext(UserContext);

    const [habits, setHabits] = useState([]);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        getAllHabits();
    }, []);

    function getAllHabits() {
        getHabits(JSON.parse(localStorage.getItem('token')))
            .then((res) => {
                setHabits(res.data);
                console.log(res.data);
            }).catch(

        )
    }

    return (
        <>
            <Navbar profileURL={userData.image} />
            <Wrapper>
                <div className="header">
                    <div className="title">Meus Hábitos</div>
                    <div className="add-btn" onClick={() => setVisible(!visible)}>
                        <ion-icon name="add-outline"></ion-icon>
                    </div>
                </div>
                <div className="content">
                    <div className={visible ? 'visible' : 'hidden'}>
                        <FormHabit setVisible={setVisible} reload={getAllHabits} />
                    </div>
                    {habits.length > 0
                        ? habits.map(item =>
                            <Habit
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                days={item.days}
                                reload={getAllHabits}
                            />
                        ) : (
                            <div className="empty">
                                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                            </div>
                        )}
                </div>
            </Wrapper>
            <Footer />
        </>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 100px;
    margin-bottom: 100px;

    .header{
        width: 340px;
        margin: 0 auto;
        margin-bottom: 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title{
            font-size: 23px;
            line-height: 29px;
            color: #126BA5;
        }

        .add-btn{
            background-color: #52B6FF;
            color: #FFFFFF;
            border-radius: 5px;

            ion-icon{
                width: 40px;
                height: 35px;
            }
        }

    }

    .content{
        width: 100%;
        height: 100%;

        .visible{
            display: block;
        }

        .hidden{
            display: none;
        }

        div{
            margin-bottom: 10px;
        }

        .empty{
            font-size: 18px;
            line-height: 22px;
        }
    }
`;
