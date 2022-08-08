import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


export default function Footer () {
    
    const navigate = useNavigate();

    return(
        <Wrapper>
            <div onClick={() => navigate('/habitos')}>Hábitos</div>
            <div onClick={() => navigate('/hoje')} className='progressbar'>Hoje</div>
            <div onClick={() => navigate('/historico')}>Histórico</div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div{
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
    }

    .progressbar{
        width: 91px;
        height: 91px;
        background-color: #52B6FF;
        color: #FFFFFF;
        position: relative;
        top: -50%;
        left: 50%-(91px/2);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;