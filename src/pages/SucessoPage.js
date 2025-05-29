import { FaFacebook, FaTwitter, FaInstagram, FaSearch, FaUser, FaShoppingCart, FaLock, FaExchangeAlt, FaHeadset, FaTruck, FaWhatsapp } from 'react-icons/fa';
import './SucessoPage.css';
import React, { useState, useEffect } from 'react';
import camisa1 from '../assets/Camisa1.png';
import calca from '../assets/calça.jpg';
import sandalia from '../assets/sandalia.jpeg';
import vestido from '../assets/vestido.jpeg';



function SucessoPage() {
    const images = [camisa1, calca, sandalia, vestido];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 1750);

    return () => clearInterval(interval);
    }, [images.length]);



    return (
        <div className="app-container">
            {/* Barra preta superior */}
            <div className="top-bar">
                <span className="top-left-text">Nao perca as atualizacoes do SITE.</span>
                <div className="top-right-icons">
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                    <FaSearch />
                    <FaUser />
                </div>
            </div>

            {/* Barra principal */}
            <div className="main-bar">
                <div className="main-left">
                    <div className="evandro">Nova</div>
                    <div className="neto">produtos</div>
                </div>
                <div className="main-center">
                    <span className="nav-item">Home</span>
                    <span className="nav-item">Produtos</span>
                    <span className="nav-item">Sobre nós</span>
                    <span className="nav-item">Blog</span>
                    <span className="nav-item">Contato</span>
                </div>
                <div className="main-right">
                    <FaSearch />
                    <FaUser />
                    <FaShoppingCart />
                </div>
            </div>

            {/* Barra grande com texto e imagem */}
            <div className="hero-bar">
                <div className="hero-left">
                    <h1>Novos produtos disponíveis</h1>
                    <p>Venha conhecer os novos produtos que acabaram de chegar com ofertas exclusivas para assinantes do site.</p>
                    <button className="ver-produtos-btn">Ver Produtos</button>
                </div>
                <div className="hero-right">
                    <div className="slideshow">
                        <img src={images[currentIndex]} alt={`Produto ${currentIndex + 1}`} />
                    </div>
                </div>
            </div>

            {/* Barra preta inferior com ícones */}
            <div className="bottom-bar">
                <div className="bottom-item">
                    <FaLock />
                    <span>Pagamento seguro</span>
                </div>
                <div className="bottom-item">
                    <FaExchangeAlt />
                    <span>Troca e devolução simples</span>
                </div>
                <div className="bottom-item">
                    <FaHeadset />
                    <span>Atendimento eficiente</span>
                </div>
                <div className="bottom-item">
                    <FaTruck />
                    <span>Frete grátis</span>
                </div>
                <button className="whatsapp-btn">
                    <FaWhatsapp /> 
                </button>
            </div>
        </div>
    );
}

export default SucessoPage;
