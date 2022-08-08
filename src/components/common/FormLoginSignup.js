import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    width: 303px;
    margin: 0 auto;
    margin-top: 68px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 180px;
        height: 178px;
        margin-bottom: 32px;
    }

    .form{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 25px;

        input::placeholder{
            color: #DBDBDB;
            font-size: 20px;
            line-height: 25px;
        }

        input:focus{
            border: 1px solid #52B6FF;
        }
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 45px;
    padding: 1em;
    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 6px;
`;

export const Button = styled.button`
    width: 100%;
    height: 45px;
    background-color: #52B6FF;
    border: none;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 21px;
    line-break: 26px;
    text-align: center;
`;

export const LinkForm = styled(Link)`
    color: #52B6FF;
    text-align: center;
    font-size: 14px;
    line-height: 17px;
    text-decoration: underline;
`;