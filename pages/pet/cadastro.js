
import Link from 'next/link';
import { useState } from 'react';

import Header from '../componentes/Header';


export default function Cadastro() {

    const [props, setProps] = useState({});

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setProps(values => ({ ...values, [name]: value }))
    }


    function salvar(e) {
        e.preventDefault();

        console.log(props);
    }

    return (
        <>

            <Header titulo="Cadastro de Pet" />

            <div className="container">

                <Link href="/pet/pesquisa"> Pesquisa </Link>

                <br />

                <h1>PET - Cadastro </h1>
                <form>
                    <div className="mb-3 row">

                        <div className="col-auto">
                            <label htmlFor="nome" className="col-form-label">Nome: </label>
                            <input id='nome' name='nome' value={props.nome || ''} onChange={handleChange} className="form-control" type="text" placeholder="Nome" />
                        </div>


                    </div>

                    <div className="mb-3 row">

                        <div className="col-auto">
                            <label htmlFor="telefone" className="col-form-label">Telefone: </label>
                            <input id='telefone' name='telefone' value={props.telefone || ''} onChange={handleChange} className="form-control" type="text" placeholder="Telefone" />
                        </div>
                    </div>

                    <div className="col-auto">
                        <button type="submit" onClick={salvar} className="btn btn-primary mb-3">Salvar</button>
                    </div>

                </form>
            </div>



        </>

    )
}