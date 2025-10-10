import './App.css';
import Carrossel from './assets/carrossel';
function App() {
  return (
    <div>
      <header>
        <img
          src="https://media.discordapp.net/attachments/1399878782134780027/1425936790640001128/logo_pronta_top.png?ex=68e9669f&is=68e8151f&hm=62e1322c8942fd0dc954b7cd3724ddc3f3ad30d259a819ba43dd45ee49b53933&=&format=webp&quality=lossless&width=548&height=548"
          alt="Logo"
          height="100px"
        />
        <div className="meio">
         
            <button>Início</button>

          <button>Gráficos</button>

          <button>Agenda</button>
         
            <button>Quem somos</button>
          
        </div>
        <button>Ajude-nos</button>
      </header>

      <br />

      <div className="meiozin">
        <div className="imagem-container">
          <img
            src="https://media.discordapp.net/attachments/1399878782134780027/1425442759992672377/image_4.png?ex=68e994c5&is=68e84345&hm=8a4a62e732ac36ac62f44f6f03eb2f0466ae3ab1b27a13cbd21b172d0a70d554&=&format=webp&quality=lossless"
            alt=""
            className="imagem"
          />
          <div className="texto-sobre">
            Quer <div className="azul">conhecer</div> outros <br />
            esportes que valem a pena <br />
            ser <div className="azul">praticados?</div>
          </div>
          <div className="botao-sobre">
            <button>
              Outros esportes <br />
              legais para <br />
              se praticar!
            </button>
          </div>
        </div>

        <h2>
          Esporte, lazer e <br />
          restauração é a <br />
          nossa sigla e nosso <br />
          dever com você!
        </h2>
      </div>

      <h2>Por um Brasil mais saudável e atlético!</h2>

      <Carrossel />
       
      <div className="todo">
        <h1>Por que praticar exercícios físicos?</h1>

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

        <img
          src="https://media.discordapp.net/attachments/1399878782134780027/1425843121056645140/tcc_correadoraimg_2.png?ex=68e90f62&is=68e7bde2&hm=0928dfe6848113c91e83a6136d5f3699d97c73eb0de4af5ec22e20236ded2488&=&format=webp&quality=lossless&width=325&height=548"
          alt=""
        />
      </div>
           <br />
           <br />
           <h4>Nossa organização começou com o intuito de instigar os cidadãos à se exercitarem
e praticarem esportes. Parece uma tarefa simples, até vermos o estado que estão as 
quadras e a falta de diversificação de esportes presentes em São Paulo. Veja os dados:</h4>
<div className='graficos1'>
<img src="https://media.discordapp.net/attachments/1399878782134780027/1426010348598595746/image_5.png?ex=68e9ab21&is=68e859a1&hm=a720448d32dee90e4dd01469d1406f0bd0d513894b3d991586e65362cf71e61f&=&format=webp&quality=lossless&width=556&height=444" alt="" />
<img src="https://media.discordapp.net/attachments/1399878782134780027/1426010348892459099/image_6.png?ex=68e9ab21&is=68e859a1&hm=f01f8c2b475790285199c50a6b9a0b27cfb60d0ce466ad4a0faa1025d2d28cbf&=&format=webp&quality=lossless&width=556&height=444" alt="" />
</div>
<br />
<br />
<div className='grafico2'>
<img src="https://media.discordapp.net/attachments/1399878782134780027/1426011694739488859/image_7.png?ex=68e9ac62&is=68e85ae2&hm=7076099aaaa1424aee67ddb71eba3c2e6bdc487b7ab33d8300d5f140b702160d&=&format=webp&quality=lossless&width=814&height=465" alt="" />
</div>
<h4>Acima está uma tabela com estimativas de conservação das instalações esportivas 
públicas em São Paulo, separadas por esporte. Esses dados são baseados 
em relatórios da Prefeitura,  auditorias do TCM-SP (Tribunal de Contas do Município) 
e levantamentos jornalísticos sobre infraestrutura escolar e esportiva. 
</h4>
<br />
<h4>O quê mostra que muitas quadras e áreas de praticar esportes precisam de mais
atenção e melhorias, por isso nós estamos aqui, para conservar e garantir
que a população esteja satisfeita com as condições das suas atividades
de lazer. Abaixo está alguns dados sobre os parques públicos de São Paulo: </h4>

   <div className='grafico2'>
 <img src="https://media.discordapp.net/attachments/1399878782134780027/1426013503545675906/image_8.png?ex=68e9ae11&is=68e85c91&hm=34d987c49c6be6410878006fda7430c988fbb518890b1f2346fa1dc4cec71381&=&format=webp&quality=lossless" alt="" />
   </div>
<h4>Em São Paulo há cerca de 145 parques públicos, 
contando estaduais,e municipais de acordo com o jornal
“Folha de São Paulo” e “SVMA”.</h4>
<h4>Acima mostra dados sobre a conservação de parques
 em São Paulo o quê <br /> mostra que  parques municipais 
urbanos estão carentes de cuidados.</h4>

<div className='visao'>
<h4>Nós somos uma empresa que visa cuidar
dos parques e áreas de lazer e esporte na
cidade de São Paulo, pretendemos crescer 
ainda mais para alcançar o Brasil todo pois
sabemos que há diversos lugares que necessitam
de cuidados. Estamos aqui sempre com respeito,
honestidade, compromisso e diversidade para dar
aos cidadãos um ótimo dia de lazer e felicidade.</h4>
</div>

      <footer>
        <div className="loguinho">
          <img
            src="https://media.discordapp.net/attachments/1399878782134780027/1425936790640001128/logo_pronta_top.png?ex=68e9669f&is=68e8151f&hm=62e1322c8942fd0dc954b7cd3724ddc3f3ad30d259a819ba43dd45ee49b53933&=&format=webp&quality=lossless&width=548&height=548"
            alt=""
            height="100px"
          />
        </div>
        
         <div className='inicio'>
          <h2>Início</h2>
          <a href="App.jsx">Voltar pro topo</a> <br />
          <a href="<Carrossel />">Serviços</a> <br />
          <a href="todo">Benefícios</a>
          <a href="Gráficos"></a>
         </div>

          <div className='Serviços'>
            <h2>Serviços</h2>
             <a href="Iluminacao.jsx">Iluminação</a>
             <a href="Alambrados.jsx">Alambrados</a>
             <a href="Equipamentos.jsx">Equipamentos esporrtivos</a>
             <a href="Raspagem.jsx">Raspagem de piso <br /> de madeira</a>
             <a href="Redes.jsx">Redes de <br />proteção</a>
             <a href="Pintura.jsx">Pintura</a>
             <a href="Concreto.jsx">Acabamento com <br />Concreto</a>
             <a href="Restauracao.jsx">Restauração</a>
             <a href="Ambiente.jsx">Meio ambiente</a>
          </div>
        <div className="contato">
          <h2>Contato</h2>
          <h3>
            Telefone: 11 98765-4321 <br />
            Email: esportelazer@lar.com.br
          </h3>
        </div>

        <div className="novidade">
          <h2>
            Fique por dentro <br />
            das novidades!
          </h2>
          <button>
            <a href="https://www.youtube.com/channel/UCiYhyPGhYNr8JooVQor22wA" target="_blank" rel="noreferrer">
              <img
                src="https://media.discordapp.net/attachments/1399878782134780027/1425904512614404126/youtube-removebg-preview.png?ex=68e9488f&is=68e7f70f&hm=d8bb4a29c5109f7523f947e813dadb262e427363fd4f49e57c637e6b18a9b2b1&=&format=webp&quality=lossless"
                alt="YouTube"
              />
            </a>
          </button>
        </div>

        <div className="colaboradores">
          <h2>Nossos colaboradores:</h2>
          <div className="logos">
            <img
              src="https://media.discordapp.net/attachments/1399878782134780027/1425907624465006673/net_logos_2-removebg-preview_1.png?ex=68e94b75&is=68e7f9f5&hm=abef9c8d75c42f8358fc67f3ceb5cfef848af993b02478f67369c69e354857e2&=&format=webp&quality=lossless"
              alt=""
              height="60px"
            />
            <img
              src="https://media.discordapp.net/attachments/1399878782134780027/1425907809798590495/Sem_titulo-removebg-preview_1_1.png?ex=68e94ba1&is=68e7fa21&hm=6ad12ea2a857813e920786709ad04740970c69801316999ce192940dfd407465&=&format=webp&quality=lossless"
              alt=""
              height="60px"
            />
            <img
              src="https://media.discordapp.net/attachments/1399878782134780027/1425907941512319042/ChatGPT_Image_5_de_out._de_2025__11_28_10-removebg-preview_1.png?ex=68e94bc1&is=68e7fa41&hm=24128743855e6fda115b3eafe5426f5f40a4f1b899c3dcafba50fa575e061084&=&format=webp&quality=lossless"
              alt=""
              height="90px"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;