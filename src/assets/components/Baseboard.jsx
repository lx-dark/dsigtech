import "./../../assets/css/Baseboard.css";
import React from 'react';

function Baseboard () {

    return (
        
        <footer>

            <div className = 'information'>

                <img src = '/img/igtech-logo-trans.png' alt = "baselogoigtech" className = 'baselogoigtech'/>

                <div className = "contact-info">
                    <h2>Contato</h2>
                    <p>E-mail: contato@igtech.com.br</p>
                    <p>Telefone: (75) 9 9881-6777</p>
                </div>

                <div className = "adress-info">
                    <h2>Endereço</h2>
                    <p>Rua Tal, 104, Centro, Alagoinhas-Ba</p>
                </div>
                
                <div className = "social-info">
                    <h2>Siga nos</h2>
                    <a 
                        href = "https://pt-br.facebook.com/" target = "_blank" rel = "noopener noreferrer">
                            <img src = "/img/facebook-icon.png" alt = "facebook"/>
                    </a>
                    <a
                        href = "https://www.instagram.com/" target = "_blank" rel = "noopener noreferrer">
                            <img src = "/img/instagram-icon.png" alt = "instagram"/>
                    </a>
                    <a
                        href = "https://www.linkedin.com/login/pt" target = "_blank" rel = "noopener noreferrer">
                            <img src = "/img/linkedin-icon.jpeg" alt = "linkedin"/>
                    </a>
                    <a
                        href = "https://wa.me/5575998816777" target = "_blank" rel = "noopener noreferrer">
                            <img src = "/img/whatsapp-icon.png" alt = "whatsapp"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};
export default Baseboard;