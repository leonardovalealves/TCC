import "./sobre.css";
import { Link } from 'react-router-dom';
function Sobre() {
  return (
    <div>
      <header>
        <img
          src="https://media.discordapp.net/attachments/1399878782134780027/1425936790640001128/logo_pronta_top.png?ex=68eab81f&is=68e9669f&hm=21054c3e26cbd8d4eb4606de4c7e976feb3d6c930708e062ae50e093cb3725b4&=&format=webp&quality=lossless&width=548&height=548"
          alt="Logo"
          height="100px"
        />
        <div className="meio">
            <Link to="/">
          <button>Início</button>
           </Link>
          <Link to="/Graficos">
          <button>Graficos</button>
          </Link>
          <Link to="/outrosEsportes">
          <button>Esportes pouco conhecidos</button>
          </Link>
          
        </div>
        <button>Ajude-nos</button>
      </header>

      <h1>Sobre nós</h1>

      <h2>O PROBLEMA</h2>

      <div className="cartao1">
        <h3>
          Nossa fundação teve inicio em 27/01/2009 quando um grupo de amigos <br />
          queriam jogar basquete mas todas as quadras de sua região estavam <br />
          quase inutilizáveis e os parques não estavam perto ou também não <br />
          estavam bem estruturados. Foi quando eles começaram a perguntar para <br />
          pessoas da sua escola e pessoas do bairro do quê eles achavam sobre as <br />
          condições que os parques e quadras públicas se encontravam no estado <br />
          de São Paulo.
        </h3>
        <img src="https://media.discordapp.net/attachments/1399878782134780027/1426714204139946085/quadrasuja_1.png?ex=68ec3aa5&is=68eae925&hm=b45955f813084ad6a3756abda13af5d0df84b66adb3d535ef15ce39419bd88ce&=&format=webp&quality=lossless" alt="" height={'180px'}/>
      </div>

      <h2>O INÍCIO</h2>

      <div className="cartao2">
        <img src="https://media.discordapp.net/attachments/1399878782134780027/1426714679824089170/iiouoio_2.png?ex=68ec3b16&is=68eae996&hm=7e787d59069ef40c8c098d09273a041673b48a8fc2f5ea97022e3247fafa8f29&=&format=webp&quality=lossless" alt="" height={'170px'}/>
        <h3>
          Tentamos contatar a prefeitura, sempre demorava muito e nunca <br />
          começava o projeto, então, começamos a fazer bicos e trabalhar para <br />
          juntar dinheiro. Com o tempo nós conseguimos dinheiro para nós mesmos <br />
          trocarmos os aros e colocarmos redes. Por um acaso alguns meninos <br />
          viram o quê nós fizemos e perguntaram se nós não podíamos arrumar o <br />
          gol da quadra se eles dessem o dinheiro, não vimos problema e assim o <br />
          fizemos.
        </h3>
      </div>

      <h2>A IDEIA</h2>

      <div className="cartao3">
        <h3>
          Os boatos se espalharam e uma pessoa que mora no Grajaú contatou-nos <br />
          no Instagram de Enzo (um dos fundadores) e relatou que a quadra onde <br />
          morava estava em situação precária e pediu nossa ajuda, dissemos que <br />
          sim e rapidamente ele e mais uns amigos transfiriram o dinheiro, <br />
          conseguimos fazer a reforma e um pouco de dinheiro sobrou, eles <br />
          disseram que podíamos ficar por conta do trabalho feito. Foi aí que <br />
          tivemos a ideia de ganhar dinheiro reformando quadras.
        </h3>
        <img src="https://media.discordapp.net/attachments/1399878782134780027/1426714680189128854/projetando-quadras-urbanas-para-criancas_10_2.png?ex=68ec3b16&is=68eae996&hm=003dd8cda328c1ddfc5e97ee0c9556199ed85ee4fa52267624efad21449c6376&=&format=webp&quality=lossless" alt="" height={'160px'}/>
      </div>

      <h2>A EXPANSÃO</h2>

      <div className="cartao4">
        <img src="https://media.discordapp.net/attachments/1399878782134780027/1426725790669865010/quadra_1.png?ex=68ec456f&is=68eaf3ef&hm=d2dacd56c6efd7e9a470c0d8ac3460847d0d67196dee3673e648b26442f58994&=&format=webp&quality=lossless" alt="" height={'160px'}/>
        <h3>
          Graças ao curso de informática de Frei, criamos esse site, fomos <br />
          crescendo e nossos patrocínios aumentaram. Expandimos nossos olhos <br />
          para parques e áreas verdes carentes de cuidado até chegarmos aqui <br />
          hoje.
        </h3>
      </div>

      <br />

      <h2>MISSÃO</h2>

      <div className="cartao5">
        <h3>
          Pretendemos crescer muito mais e atender todo o Brasil e até o mundo <br />
          inteiro! Pois acreditamos que todos devem ter seus momentos de lazer e <br />
          se divertir sem se preocupar se vai ter um gol, uma rede ou até mesmo <br />
          ferramentas decentes para desfrutar um momento feliz. Além da <br />
          diversidade de quadras que já implementamos muito, pois num país <br />
          dominado pelo Futebol, pessoas que gostam de praticar um esporte mais <br />
          diferentes se sentem deslocadas ou somente não conseguem pela falta de <br />
          diversidade de quadras. E estamos aqui para ajudar a todos, <br />
          responsavelmente e carinhosamente.
        </h3>
        <img src="https://media.discordapp.net/attachments/1399878782134780027/1426714680684183764/quadrakfjfd_1.png?ex=68ec3b16&is=68eae996&hm=be97ace318c3eec96e8478a8778cf32addfd31da6d8d06a207e3a8015c078e64&=&format=webp&quality=lossless" alt="" height={'210px'} />
      </div>

      <h2>Valores</h2>
      <div className="cartao6">
        <img src="https://oregional.net/wp-content/uploads/2023/12/pista-skate-03.jpg" alt="" height={'150px'}/>
      <h3>Nossos valores são: Pensadores e cuidadores do meio ambiente, somos verdadeiros, <br />
          compromissados, pontuais, respeitosos, honestos, responsáveis, etc. </h3>
      </div>

      <h2>VISÃO</h2>
<div className="cartao7">
<h3>Ser referência no desenvolvimento na restruturação de quadras poliesportivas, no avanço do <br />
esporte, no lazer e na cultura. <br />
 L.A.R. - Lazer, Atletismo e Restauração. <br /> <br />
          Sempre com você e por você!
</h3>
<img src="https://quadrasimperial.com.br/wp-content/uploads/2024/02/Quadras-de-Areia-1-2.jpg" alt="" height={'200px'}/>
</div>
<h2>Nossos patrocinadores</h2>
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
        
         <div className='inicio'>
          <h2>Áreas</h2>
        <Link to="/">
          Início
           </Link>
          <Link to="/Graficos">
          Graficos
          </Link>
              <Link to="/outrosEsportes">
          Esportes <br /> pouco <br /> conhecidos
          </Link>
          
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
         <h3><img src="https://media.discordapp.net/attachments/1399878782134780027/1426156251687161927/telefone-removebg-preview_1_1.png?ex=68ea3303&is=68e8e183&hm=18d477fa3ced2bf6c41ab3b1355ab6d904a72b1b9d01421b62723d251f5cac90&=&format=webp&quality=lossless" alt="" />(11) 98765-4321</h3>
         <h3><img src="https://media.discordapp.net/attachments/1399878782134780027/1426156250982387713/email22-removebg-preview_1.png?ex=68ea3302&is=68e8e182&hm=6f7c718961e9061080f73203f98587e9029b30e0a16a92b4b9d42f4dc1dc9eb0&=&format=webp&quality=lossless" alt="" />esportelazer@gmail.com.br</h3>
         <h3><img src="https://media.discordapp.net/attachments/1399878782134780027/1426156251393425469/mapa1-removebg-preview_1.png?ex=68ea3303&is=68e8e183&hm=a9b18a90e637322d07850cbe438253c06a8277a6dd6d6a2f0e9ba0027501a547&=&format=webp&quality=lossless" alt="" />Rua Alice Levy,   São Paulo - SP, 04858-400</h3>
        </div>

        <div className="novidade">
          <h2>Redes sociais</h2>
          <a href="https://www.youtube.com/@l.a.rlazer-atlestismo-restaura"><img src="https://media.discordapp.net/attachments/1399878782134780027/1426161492327399445/youtube1-removebg-preview_1.png?ex=68ea37e4&is=68e8e664&hm=3daf88838681397ee48cfeb1d83038c224b3a7384eed8b58773760e3516d3553&=&format=webp&quality=lossless" alt="" />Youtube</a>
          <a href="https://www.instagram.com/l.a_r_oficial"><img src="https://media.discordapp.net/attachments/1399878782134780027/1426161491991859372/instagram1-removebg-preview_1.png?ex=68ea37e4&is=68e8e664&hm=f70f39528d7775fc754bd15eed04a7136dda52da69f2981cce2e0cefdcf2aafc&=&format=webp&quality=lossless" alt="" />Instagram</a>
          <a href="https://www.facebook.com/share/179jbns5jq/"><img src="https://media.discordapp.net/attachments/1399878782134780027/1426161491567968276/facebook1-removebg-preview_1.png?ex=68ea37e4&is=68e8e664&hm=3b2790d2c06acb503331fa4dc18d26c40bfeb870e89be9b896ddfab9d23681a6&=&format=webp&quality=lossless" alt=""/>Facebook</a>
          <h3>Fique por dentro das novidades!</h3>
        </div>
        <div className='direitos'>
       <h4><img src="https://media.discordapp.net/attachments/1399878782134780027/1426167903736303687/selo99_1.png?ex=68ea3ddd&is=68e8ec5d&hm=3c8d4ad8d56783d45d559ee3ac31d3e1779bc5dbc7f98b7fb8b893be1d48bca4&=&format=webp&quality=lossless" alt="" />2025 Todos os direitos reservados para L.A.R</h4>
       </div>
      </footer>
    </div>
  );
}

export default Sobre;
