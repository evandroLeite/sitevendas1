import { useNavigate } from 'react-router-dom';

function NovaSenhaPage() {
    const navigate = useNavigate();

    return (
    <div className="nova-senha-container">
        <h1>Nova Senha 🔒</h1>
        <p>Digite sua nova senha aqui (futuramente!)</p>

        <button onClick={() => navigate('/')}>
            Voltar para a página inicial
        </button>
    </div>
    );
}

export default NovaSenhaPage;