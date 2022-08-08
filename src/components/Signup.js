import { Wrapper, Input, Button, LinkForm } from './common/FormLoginSignup';
import logo from '../assets/img/logo-trackit.svg';
import { useState } from 'react';
import { signup } from '../services/trackit';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    const [form, setForm ] = useState({});

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

        signup({...form})
        .then((res) => {
            console.log(res.data);
            navigate('/');
        })
        .catch((res) => {
            alert("Algum erro no cadastro.");
        })
    }

    return (
        <Wrapper>
            <img src={logo} alt="trackit logo" />
            <form className="form" onSubmit={sendForm}>
                <Input name='email' placeholder='email' type='email' required
                onChange={(e) => handleForm({name: e.target.name, value: e.target.value})}/>
                <Input name='password' placeholder='senha' type='password' required
                onChange={(e) => handleForm({name: e.target.name, value: e.target.value})}/>
                <Input name='name' placeholder='nome' type='text' required
                onChange={(e) => handleForm({name: e.target.name, value: e.target.value})}/>
                <Input name='image' placeholder='foto' type='url' required
                onChange={(e) => handleForm({name: e.target.name, value: e.target.value})}/>
                <Button>Cadastrar</Button>
            </form>
            <LinkForm to={'/'}>Já tem uma conta? Faça login!</LinkForm>
        </Wrapper>
    )
}