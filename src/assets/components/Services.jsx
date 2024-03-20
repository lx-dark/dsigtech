import "./../../assets/css/Services.css";
import React from 'react';
import { useState } from 'react';

function Services () {

    const [cIndex, setCIndex] = useState (0);
    const nextCard = () => {
        setCIndex ((prevIndex) => (prevIndex + 1) % 4);
    };

    const prevCard = () => {
        setCIndex ((prevIndex) => (prevIndex - 1 + 4) % 4);
    };

    return (

        <div className = "services-cards">

            <div className = "intro">
                <h3>Nossos Serviços</h3>
                <p>Aqui estão os principais serviços que nossa empresa disponibiliza para você</p>
            </div>

            <div className = "card" style = {{ display: cIndex === 0 ? 'block' : 'none' }}>
                <h3>Formatação e sistemas</h3>
                <img src = "/img/format-img.webp" alt = "format"/>
                <p>Precisa instalar ou configurar programas como por exemplo: nfe, java, e-mail outlook, pacote adobe, anti-vírus, office, corel draw, entre outros ? Precisa formatar o computador ou recuperar dados? Nossa equipe pode te ajudar!</p>
            </div>

            <div className = "card" style = {{ display: cIndex === 1 ? 'block' : 'none' }}>
                <h3>Configuração de redes e servidores</h3>
                <img src = "/img/server-img.jpg" alt = "servers"/>
                <p>Precisa fazer a instalação de modens, roteadores, implantar e gerenciar servidores, configurar redes wireless entre outros? Deixe que nossa equipe te ajude nesse processo!</p>
            </div>

            <div className = "card" style = {{ display: cIndex === 2 ? 'block' : 'none' }}>
                <h3>Manutenção de computadores e notebooks</h3>
                <img src = "/img/maintenance-img.jpg" alt = "maintenance"/>
                <p>Montagem e upgrade de computadores, manutenção corretiva e preventiva no computador. Computador não liga, está travando ou lento ? A gente cuida disso pra você!</p>
            </div>

            <div className = "card" style = {{ display: cIndex === 3 ? 'block' : 'none' }}>
                <h3>Backup</h3>
                <img src = "/img/backup-img.jpg" alt = "backup"/>
                <p>Precisa realizar ou configurar o backup dos dados na nuvem ou compartilhar arquivos e dispositivos na nuvem? Deixe isso com a gente! </p>
            </div>

            <div className = "arrow-btn right">
                <button onClick = {nextCard}>{">"}</button>
            </div>
            
            <div className = "arrow-btn left">
                <button onClick = {prevCard}>{"<"}</button>
            </div>
    </div>
    );
};
export default Services;