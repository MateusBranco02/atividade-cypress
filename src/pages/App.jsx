import { useState } from 'react';
import '../styles/App.css';

export default function App() {
  const [nome, setNome] = useState('');

  return (
    <>
      <input
        id='nome'
        type="text"
        placeholder='Nome'
        value={nome}
        onChange={(nome) => setNome(nome.target.value)}
      />
      {nome
        ? <h2>Olá, {nome}</h2>
        : ''
      }
    </>
  );
}
