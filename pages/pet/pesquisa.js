import Link from 'next/link';
import { useEffect, useState } from 'react';
import api from '../api/api';
import Header from '../componentes/Header';

export default function Pesquisa() {

    const [lista, setLista] = useState([]);

    useEffect(() => {
        api
            .get("/topazio/teste/main/db.json")
            .then((response) => {
                setLista(response.data.pets);
            });

    });


    return (
        <>

            <Header titulo="Pesquisa de Pet" />

            <div className="container">

                <Link href="/pet/cadastro"> Cadastro </Link>

                <br />

                <h1>PET - Pesquisa </h1>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lista.map((pet) =>
                            <tr>
                                <th scope="row">{pet.id}</th>
                                <td> {pet.nome}</td>

                            </tr>
                        )}
                    </tbody>
                </table>

            </div>

        </>

    )
}