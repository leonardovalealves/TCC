import React, { useState, useEffect } from 'react';
import './Carrossel.css';

const imagensPorCategoria = {
  iluminacao: [
    'https://tse1.mm.bing.net/th/id/OIP.Ajwx3N5Nq8FgrlIyGgHYLQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    'https://tse2.mm.bing.net/th/id/OIP.q0EEHRkkS4AGaL8Q7xJVNAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
    'https://ledclass.com.br/wp-content/uploads/2024/05/imagem-1024x484.png'
  ],
  pintura: [
    'https://tse2.mm.bing.net/th/id/OIP.tO4krL_DrE6l_20ujgB4vgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
    'https://tse1.mm.bing.net/th/id/OIP.Zy7Hs5jGnI1zMQXpJnOWwgHaDV?rs=1&pid=ImgDetMain&o=7&rm=3',
    'https://bolar.com.br/imagens/produto/produtos/reforma-pintura-quadra-poliesportiva-9.jpg'
  ],
  alambrado: [
    'https://www.ramosquadras.com.br/images/ALAMBRADO05.jpg',
    'https://www.ramosquadras.com.br/images/ALAMBRADO06.jpg',
    'https://www.ramosquadras.com.br/images/ALAMBRADO07.jpg'
  ],
  equipamentos: [
    'https://www.ramosquadras.com.br/images/EQUIPAMENTO01.jpg',
    'https://www.ramosquadras.com.br/images/EQUIPAMENTO06.jpg',
    'https://www.ramosquadras.com.br/images/EQUIPAMENTO04.jpg'
  ],
  piso: [
    'https://www.ramosquadras.com.br/images/RASPAGEM01.jpg',
    'https://www.ramosquadras.com.br/images/RASPAGEM03.jpg',
    'https://www.ramosquadras.com.br/images/RASPAGEM06.jpg'
  ],
  redes: [
    'https://www.ramosquadras.com.br/images/REDE02.jpg',
    'https://www.ramosquadras.com.br/images/REDE01.jpg',
    'https://tse1.mm.bing.net/th/id/OIP.B7g6t-QZaYaOLj3LLiK4cwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
  ],
  acabamento: [
    'https://www.ramosquadras.com.br/images/ACABAMENTO08.jpg',
    'https://www.ramosquadras.com.br/images/ACABAMENTO06.jpg',
    'https://www.ramosquadras.com.br/images/ACABAMENTO01.jpg'
  ],
  restauração: [
    'https://www.ramosquadras.com.br/images/REFORMA02.jpg',
    'https://www.ramosquadras.com.br/images/REFORMA03.jpg',
    'https://www.ramosquadras.com.br/images/REFORMA1.jpg',
    'https://www.ramosquadras.com.br/images/REFORMA2.jpg'
  ]
};

export default function Carrossel() {
  const [categoria, setCategoria] = useState('iluminacao');
  const [index, setIndex] = useState(0);
  const imagens = imagensPorCategoria[categoria];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 2500);
    return () => clearInterval(intervalo);
  }, [imagens]);

  useEffect(() => {
    setIndex(0);
  }, [categoria]);

  const tituloCategoria = categoria.charAt(0).toUpperCase() + categoria.slice(1);

  return (
    <div className="botoes-container">

      <div className="carrossel">

        <h2 className="titulo-categoria">{tituloCategoria}</h2>

        {imagens.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Imagem ${i + 1}`}
            className={`imagem ${i === index ? 'ativa' : ''}`}
          />
        ))}
      </div>

      <div className="botao2">
        <button onClick={() => setCategoria('iluminacao')}>Iluminação</button>
        <button onClick={() => setCategoria('alambrado')}>Alambrados</button>
        <button onClick={() => setCategoria('equipamentos')}>Equipamentos<br />Esportivos</button>
        <button onClick={() => setCategoria('piso')}>Raspagem<br />de Piso de madeira</button>
        <button onClick={() => setCategoria('redes')}>Redes de<br />Proteção</button>
        <button onClick={() => setCategoria('pintura')}>Pintura</button>
        <button onClick={() => setCategoria('acabamento')}>Acabamento<br />com Concreto</button>
        <button onClick={() => setCategoria('restauração')}>Restauração</button>
      </div>
    </div>
  );
}
