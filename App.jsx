import './App.css';
import { Link } from 'react-router-dom';
import Carrossel from './assets/carrossel';

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <header>
        <img
          src="https://media.discordapp.net/attachments/1399878782134780027/1425936790640001128/logo_pronta_top.png?ex=68eab81f&is=68e9669f&hm=21054c3e26cbd8d4eb4606de4c7e976feb3d6c930708e062ae50e093cb3725b4&=&format=webp&quality=lossless&width=548&height=548"
          alt="Logo"
          height="100px"
        />
        <div className="meio">
          <button onClick={() => scrollToSection('servicos')}>Serviços</button>
          <button onClick={() => scrollToSection('beneficios')}>Benefícios</button>
          <button onClick={() => scrollToSection('estrutura')}>Estrutura</button>
          <button onClick={() => scrollToSection('dicas')}>Dicas</button>
        </div>
        <Link to="/ajude"><button>Ajude-nos</button></Link>
      </header>

      <div className="meiozin">
        <div className='outrosEsportes'>
          <div className='tm'>
            <h2>
              Esporte, lazer e
              restauração é a <br />
              nossa sigla e nosso
              dever com você!
            </h2>
          </div>
          <Link to="/outrosEsportes">
            <button>
              Outros esportes <br />
              legais para <br />
              se praticar!
            </button>
          </Link>
        </div>

        <br /><br /><br /> <br /> <br /> <br /> <br /> <br /> <br />
        <div className='bm'>
          <Link to="/Graficos"><button>Gráficos<img src="https://media.discordapp.net/attachments/1399878782134780027/1431598147658055730/Sem_titulo.png?ex=68fdff2c&is=68fcadac&hm=0fe870c880b3147fead19fa9ccf2efe9a6065097f3646936aef22ad6b2e8f994&=&format=webp&quality=lossless" alt="" height={'50px'} /></button></Link>
          <div className='ib'>
            <Link to="/sobre"><button>Quem somos <img src="https://media.discordapp.net/attachments/1399878782134780027/1427070097754685490/Sem_titulo-removebg-preview.png?ex=68ed8618&is=68ec3498&hm=813a8047cf2d4034057d2250021ff72d22fd64fc4fb6bbc05a3bb8b039aaf472&=&format=webp&quality=lossless" alt="" height={'50px'} /></button></Link>
          </div>
        </div>
        <br />
      </div>

      <div className='brasil'>
        <h1>Por um 
          <div className='verde'>Brasil </div>
          mais 
          <div className='amarelo'>saudável </div>
          e 
          <div className='azul'>atlético</div>!
        </h1>
      </div>

      <h1 id="servicos">Nossos Serviços</h1>
      <h2>Clique em um Serviço para saber mais!</h2>
      <div className='servi'>
        <h3><Link to="/iluminacao">Iluminação</Link></h3>
        <h3><Link to="/alambrados">Alambrados</Link></h3>
        <h3><Link to="/equipamentos">Equipamentos esportivos</Link></h3>
        <h3><Link to="/raspagem">Raspagem de piso de madeira</Link></h3>
        <h3><Link to="/redes">Redes de proteção</Link></h3>
        <h3><Link to="/pintura">Pintura</Link></h3>
        <h3><Link to="/concreto">Acabamento com Concreto</Link></h3>
        <h3><Link to="/restauracao">Restauração</Link></h3>
      </div>

      <Carrossel />
      <br />

      <div className='diacho' id="beneficios">
        <h1>Por que praticar exercícios físicos?</h1>
      </div>

      <div className="todo">
        <div className="texto1">
          <h3>Benefícios Físicos</h3>
          <ul>
            <li>
              Fortalece músculos e ossos: exercícios de força e impacto ajudam na <br />
              resistência física e previnem doenças como osteoporose.
            </li>
            <li>
              Melhora o sistema cardiovascular: o coração trabalha de forma mais <br />
              eficiente, reduzindo riscos de doenças cardíacas.
            </li>
            <li>
              Controla o peso corporal: aumenta o gasto calórico e ajuda na queima <br />
              de gordura.
            </li>
            <li>Aumenta a imunidade: o organismo fica mais resistente a doenças.</li>
            <li>
              Melhora a postura e a coordenação motora: fortalece músculos <br />
              estabilizadores e aumenta o equilíbrio.
            </li>
          </ul>
        </div>

        <div className="texto2">
          <h3>Benefícios Mentais e Emocionais</h3>
          <ul>
            <li>
              Reduz o estresse e a ansiedade: durante a prática, o corpo libera <br />
              endorfinas, hormônios que promovem sensação de bem-estar.
            </li>
            <li>
              Melhora o humor: ajuda a combater sintomas de depressão <br />
              e aumenta a autoestima.
            </li>
            <li>
              Aumenta a concentração e a memória: o fluxo de sangue para <br />
              o cérebro melhora, favorecendo o raciocínio e o aprendizado.
            </li>
            <li>
              Promove o sono de qualidade: quem se exercita tende a dormir <br />
              melhor e mais profundamente.
            </li>
          </ul>
        </div>

        <div className="texto3">
          <h3>Benefícios a Longo Prazo</h3>
          <ul>
            <li>
              Previne doenças crônicas: como diabetes tipo 2, hipertensão <br />
              e obesidade.
            </li>
            <li>
              Aumenta a longevidade: pessoas ativas tendem a viver mais <br />
              e com melhor qualidade de vida.
            </li>
            <li>
              Melhora a autonomia na velhice: mantém força e equilíbrio, <br />
              reduzindo o risco de quedas e dependência.
            </li>
          </ul>
        </div>
      </div>
      <br />

      <div className="secao-pisos" id="estrutura">
        <div className="texto-piso">
          <h1>
            COMPOSIÇÃO DOS PISOS <span>QUADRAS</span>
          </h1>
          <p>
            Nossos pisos esportivos são desenvolvidos com camadas estruturais de alta performance,
            combinando bases compactadas, revestimentos acrílicos resistentes e acabamentos personalizados
            para cada tipo de quadra. A superfície é projetada para oferecer o equilíbrio ideal entre
            aderência, conforto e velocidade, garantindo excelente desempenho em diferentes modalidades.
            Como opção, disponibilizamos sistemas de amortecimento flexível, que utilizam borracha e resinas
            especiais para maior absorção de impacto e durabilidade. Também realizamos a instalação completa
            de alambrados, iluminação, equipamentos esportivos, redes de proteção, acabamento com concreto,
            raspagem de piso de madeira, entre outros. Entregando espaços prontos para uso e com padrão
            profissional.
          </p>
        </div>

        <div className="lado-direito">
          <div className="circulo">
            <ol>
              <li>1 - Superfície: pó de pedra compactada</li>
              <li>2 - Camada de brita: base estrutural</li>
              <li>3 - Areia fina: base intermediária</li>
              <li>4 - Areia compactada: garantir estabilidade</li>
              <li>5 - Areia nivelada: garantir uniformidade</li>
              <li>6 - Linhas demarcatórias: tinta de marcação</li>
            </ol>
          </div>
          <img
            src="https://media.discordapp.net/attachments/1399878782134780027/1428004202839408761/download_1.png?ex=68f0ec0c&is=68ef9a8c&hm=1dee19663154c7f0e726cec9e25e967ed9f9693d87137a7ef3f0db4171791ac8&=&format=webp&quality=lossless&width=364&height=547"
            alt=""
          />
        </div>
      </div>

      <h1 id="dicas">Dicas de Manutenção</h1>
      <div className='dicas'>
        <div className='dica1'>
          <h2>MANTENHA A QUADRA <div className='verde'>LIMPA</div></h2>
          <h3>Mantenha a quadra limpa varrendo e lavando <br /> com sabão neutro quando necessário. <br /> Evite produtos fortes, alimentos e bebidas no local. <br /> Peça para usarem tênis limpos <br /> e esvazie as lixeiras com frequência. <br /> Em quadras abertas, retire folhas <br /> e faça limpeza profunda mensalmente.</h3>
        </div>
        <div className='dica2'>
          <h2>USO EM CASO DE PISO<div className='verde'>MOLHADO</div></h2>
          <h3>Evite usar a quadra molhada para prevenir <br /> acidentes e danos à pintura. <br /> Após a chuva, retire a água com rodos <br /> e deixe secar naturalmente, sem <br /> usar produtos químicos ou vassouras duras.</h3>
        </div>
      </div>

      <div className='dicas2'>
        <div className='dica3'>
          <h2>LIMPEZA DO PISO <div className='verde'>REGULARMENTE</div></h2>
          <h3>Varra a quadra para remover sujeira <br /> e lave com água e sabão neutro. <br /> Enxágue e deixe secar antes do uso. <br /> Faça a limpeza de uma a duas vezes <br /> por semana, conforme o uso.</h3>
        </div>
        <div className='dica4'>
          <h2>DICAS <div className='verde'>ÚTEIS</div></h2>
          <h3>Evite arrastar objetos pesados <br /> e consumir alimentos na quadra. <br />Não use o piso molhado e <br /> mantenha o local limpo e organizado. <br />Esses cuidados prolongam <br />a durabilidade da quadra.</h3>
        </div>
      </div>
      <br /><br />

      <div className='visao'>
        <h4>Nós somos uma empresa que visa cuidar
          dos parques e áreas de lazer e esporte...
        </h4>
      </div>
<h2>Nossos patrocinadores:</h2>
      <div className='patro'>
<img src="https://vectorseek.com/wp-content/uploads/2023/08/Sesc-Logo-Vector.svg-.png" alt="" height={'50px'} />
<img src="https://media.discordapp.net/attachments/1399878782134780027/1425907624465006673/net_logos_2-removebg-preview_1.png?ex=69005db5&is=68ff0c35&hm=01cd2302e5482ff400a6c0796ec41ab16369006bae69709c0cfad7e0c2393a2b&=&format=webp&quality=lossless" alt="" height={'50px'}/>
<img src="https://media.discordapp.net/attachments/1399878782134780027/1425907941512319042/ChatGPT_Image_5_de_out._de_2025__11_28_10-removebg-preview_1.png?ex=69005e01&is=68ff0c81&hm=a8927b481b8b2d68bf1b0cc247577c5f4e1efb07ab72b09eb048434c4ca9e38b&=&format=webp&quality=lossless" alt="" height={'50px'}/>
<img src="https://media.discordapp.net/attachments/1399878782134780027/1425907809798590495/Sem_titulo-removebg-preview_1_1.png?ex=69005de1&is=68ff0c61&hm=6f7f78037ec7e20f30f0a5a22e88f00897a65afdfdae6aa64188a4fd2e35ed5e&=&format=webp&quality=lossless" alt="" height={'50px'} />
<img src="https://logospng.org/download/itau/logo-itau-4096.png" alt="" height={'50px'}/>
      </div>
      <br />

      <footer>
  <div className="loguinho">
    <img
      src="https://media.discordapp.net/attachments/1399878782134780027/1425936790640001128/logo_pronta_top.png?ex=68e9669f&is=68e8151f&hm=62e1322c8942fd0dc954b7cd3724ddc3f3ad30d259a819ba43dd45ee49b53933&=&format=webp&quality=lossless&width=548&height=548"
      alt=""
      height="100px"
    />
  </div>

  <div className="inicio">
    <h2>Início</h2>
    <a onClick={() => scrollToSection('topo')}>Voltar pro topo</a>
    <a onClick={() => scrollToSection('servicos')}>Serviços</a>
    <a onClick={() => scrollToSection('beneficios')}>Benefícios</a>
    <a onClick={() => scrollToSection('estrutura')}>Estrutura</a>
    <a onClick={() => scrollToSection('dicas')}>Dicas</a>
  </div>

  <div className='Serviços'>
    <h2>Serviços</h2>
    <Link to="/iluminacao">Iluminação</Link>
    <Link to="/alambrados">Alambrados</Link>
    <Link to="/equipamentos">Equipamentos esportivos</Link>
    <Link to="/raspagem">Raspagem de piso de madeira</Link>
    <Link to="/redes">Redes de proteção</Link>
    <Link to="/pintura">Pintura</Link>
    <Link to="/concreto">Acabamento com Concreto</Link>
    <Link to="/restauracao">Restauração</Link>
    <h5>Saiba também sobre nossos serviços no meio ambiente!</h5>
    <Link to="/ambiente">Parques</Link>
  </div>

  <div className="contato">
    <h2>Contato</h2>
    <h3>(11) 98765-4321</h3>
    <h3>esportelazer@gmail.com.br</h3>
    <h3>Rua Alice Levy, São Paulo - SP, 04858-400</h3>
  </div>

  <div className="novidade">
    <h2>Redes sociais</h2>
    <a href="https://www.youtube.com/@l.a.rlazer-atlestismo-restaura">Youtube</a>
    <a href="https://www.instagram.com/l.a_r_oficial">Instagram</a>
    <a href="https://www.facebook.com/share/179jbns5jq/">Facebook</a>
    <h3>Fique por dentro das novidades!</h3>
  </div>

  <div className='direitos'>
    <h4>2025 Todos os direitos reservados para L.A.R</h4>
  </div>
</footer>

    </div>
  );
}

export default App;
