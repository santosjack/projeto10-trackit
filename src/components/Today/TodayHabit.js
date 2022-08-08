import { useState } from "react";
import styled from "styled-components";

export default function TodayHabit({ id, name, done, currentSequence, highestSequence, selectHabit }) {


    return (
        <Habit>
            <div className={`text ${done ? 'checked' : ''}`}>
                <h3>{name}</h3>
                <div>
                    <p>Sequência atual: 
                        <span className="current">
                            {currentSequence} dias
                        </span>
                    </p>
                    <p>Seu recorde: 
                        <span className={currentSequence === highestSequence ? 'record' : ''}>
                            {highestSequence} dias
                        </span>
                    </p>
                </div>
            </div>
            <div className={`checkbox ${done ? 'checked' : 'unchecked'}`} onClick={() => selectHabit(id)}>
                <ion-icon name="checkbox"></ion-icon>
            </div>
        </Habit>
    );
}

const Habit = styled.div`
    width: 340px;
    height: 94px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 13px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: 0 auto 6px auto;

    .text{
        width: 215px;
    }

    h3{
        font-size: 20px;
        line-height: 25px;
    }

    p{
        font-size: 13px;
        line-height: 16px;
    }

    ion-icon{
        width: 69px;
        height: 69px;
        visibility: visible;
    }

    .checkbox.unchecked > ion-icon{
        color: #EBEBEB;
    }

    .checked .current,
    .checked .record,
    .checkbox.checked > ion-icon{
        color: #8FC549;
    }
`;