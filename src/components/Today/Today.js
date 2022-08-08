import { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import Navbar from "../Navbar";
import Footer from "../Footer";
import UserContext from "../contexts/UserContext";
import { getHabitsToday, uncheckHabit, checkHabit } from '../../services/trackit';
import TodayHabit from './TodayHabit';
import dayjs from 'dayjs';

import '../style.css';



export default function Today() {

    const [habits, setHabits] = useState([]);

    const [progress, setProgress] = useState(0);

    const { userData } = useContext(UserContext);

    useEffect(() => {
        getHabits();
    }, []);

    function getHabits(){
        getHabitsToday(JSON.parse(localStorage.getItem('token')))
        .then((res) => {
            setHabits(res.data);
            setProgress(countProgress([...res.data]));
        }).catch(
            
        )

    } 

    function selectHabit(id) {
        console.log(id);

        const newHabits = habits.map(item => {
            if (item.id === id) {
                !item.done ? (check(item.id)) : (uncheck(item.id));
                // return {
                //     ...item,
                //     done: !item.done
                // };
            }
            // return {
            //     ...item,
            // };
        });

        // setHabits([...newHabits]);
    }

    function check(id) {
        console.log("chequei")
        checkHabit({ idHabit: id, token: JSON.parse(localStorage.getItem('token')) })
            .then((resp) => {
                getHabits();
            }).catch(
                
            )
    }

    function uncheck(id) {
        console.log("não chequei")
        uncheckHabit({ idHabit: id, token: JSON.parse(localStorage.getItem('token')) })
            .then((resp) => {
                getHabits();
            }).catch(
                
            )
    }

    function countProgress(arr){
        let concludeds = arr.filter(item => {
            if(item.done === true){
                return item.id;
            }
        });
        console.log(concludeds);
        return ((concludeds.length/arr.length)*100).toFixed();
        
    }

    return (
        <>
            <Navbar profileURL={userData.image} />
            <Wrapper>
                <div className='header'>
                    <div className='date'>{dayjs().locale('pt-br').format('dddd')}, {dayjs().locale('pt-br').format('DD/MM')}</div>
                    <div className='status'>
                        {progress > 0
                            ? <p className='checked'>{progress}% dos hábitos concluídos</p>
                            : <p className='unchecked'>Nenhum hábito concluído ainda</p>
                        }
                    </div>
                </div>

                {(habits.length > 0) ? (
                    habits.map(item => (
                        <TodayHabit
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            done={item.done}
                            currentSequence={item.currentSequence}
                            highestSequence={item.highestSequence}
                            selectHabit={selectHabit}
                        />

                    ))
                ) : (
                    console.log("vazio")
                )}
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

        .date{
            font-size: 23px;
            line-height: 29px;
            color: #126BA5;
        }

        .status{
            font-size: 18px;
            line-height: 22px;

            .checked{
                color: #8FC549;
            }

            .unchecked{
                color: #BABABA;
            }
        }

    }
`;