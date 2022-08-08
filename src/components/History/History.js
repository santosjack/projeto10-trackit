import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function History() {

    const { userData } = useContext(UserContext);

    return (
        <>
            <Navbar profileURL={userData.image} />
            <Wrapper>
                <div className="header">
                    Histórico
                </div>
                <div className="main">
                    <div className="message">
                        Em breve você poderá ver o Histórico dos seus hábitos aqui!
                    </div>
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
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }

    .main{
        width: 340px;
        margin: 0 auto;

        .message{
            width: 100%;
            font-size: 18px;
            line-height: 22px;
        }
    }
`;