import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import foto1 from './assets/foto1.webp';
import SucessoPage from './pages/SucessoPage';
import NovaSenhaPage from './pages/NovaSenhaPage';

function LoginPage() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleEntrar = () => {
    if (login === 'Adm' && senha === '123') {
      navigate('/sucesso');
    } else {
      alert('Login ou senha incorreto(s), tente novamente.');
    }
  };

  const handleEsqueciSenha = () => {
    navigate('/nova-senha');
  };

  return (
    <div className="container">
      <div className='inner-container'>
        <div className="left">
          <img src={foto1} alt="Foto exemplo" className="photo" />
          <p className="description">
            Tela de Login e Senha com validações e permissões de acesso.
          </p>
        </div>
        <div className="right">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Usuário"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className="input"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="input"
          />
          <a href="#" className="forgot-password" onClick={handleEsqueciSenha}>
            Esqueci minha senha
          </a>
          <button onClick={handleEntrar} className="button">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sucesso" element={<SucessoPage />} />
        <Route path="/nova-senha" element={<NovaSenhaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
