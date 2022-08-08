import { useState, useContext } from 'react';
import {login} from '../services/trackit';
import UserContext from './contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import {Wrapper, Input, Button, LinkForm} from './common/FormLoginSignup';
import logo from '../assets/img/logo-trackit.svg';



export default function Login(){
    const [form, setForm ] = useState({});
    const { setUserData } = useContext(UserContext);

    const navigate = useNavigate();

    function handleForm({name, value}) {
        setForm({
            ...form,
            [name]: value,
        });
        console.log(form);
    }

    function sendForm(e){
        e.preventDefault();

        login({email: form.email, password: form.password})
        .then((res) => {
            console.log(res.data);
            localStorage.setItem('token', JSON.stringify(res.data.token));
            setUserData(res.data);
            navigate('/hoje');
        })
        .catch((res) => {
            alert("Revise suas credenciais.");
        })
    }

    return(
        <Wrapper>
            <img src={logo} alt="trackit logo" />
            <form className="form" onSubmit={sendForm}>
                <Input name='email' placeholder='email' type='email' required
                onChange={(e) => handleForm({name: e.target.name, value: e.target.value})}
                />
                <Input name='password' placeholder='senha' type='password'required
                onChange={(e) => handleForm({name: e.target.name, value: e.target.value})}
                />
                <Button>Entrar</Button>
            </form>
            <LinkForm to={'/cadastro'}>Não tem conta? Cadastre-se</LinkForm>
        </Wrapper>
    );
}