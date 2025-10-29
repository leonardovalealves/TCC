import { Link } from 'react-router-dom';
import "./esportes.css";

function OutrosEsportes() {
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
          <Link to="/sobre">
          <button>Quem somos</button>
          </Link>
          
        </div>
        <button>Ajude-nos</button>
      </header>
      
      <h1>Venha ver esportes pouco conhecidos aqui no Brasil!</h1>

      <h2>Floorball</h2>
      <div className="imagens">
        <img src="https://cdn.dmcl.biz/media/image/194887/o/sweden+floorball.jpg" alt="" height="250px" />
        <img src="https://media.sudouest.fr/3427793/1000x625/so-588b5cf266a4bd47650f5a91-ph0.jpg" alt="" height="250px" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/WFC2018_Czech_Republic_vs_Finland_Adam_Delong_9.jpg" alt="" height="250px" />
      </div>

      <h2>O que é Floorball?</h2>
      <h3>O Floorball é um esporte coletivo, semelhante ao hóquei, mas jogado em ambientes fechados (quadras), com tacos leves de plástico e uma bola também de plástico, com furos. É rápido, dinâmico e com poucas chances de contato físico, o que o torna mais seguro e acessível que outras variantes de hóquei.</h3>
      <h3>Década de 1960/70 – O esporte surgiu na Suécia, sendo inicialmente uma brincadeira em escolas e clubes de jovens. Era jogado com materiais improvisados, como tacos de plástico e bolas leves. Rapidamente se espalhou pelos países nórdicos (Finlândia, Suécia, Noruega) e depois para outros da Europa e do mundo. Em 1986, foi criada a Federação Internacional de Floorball (IFF), que hoje regula o esporte mundialmente. O esporte está crescendo e luta para entrar nos Jogos Olímpicos em breve.</h3>
      <br />

      <div className="cartao">
        <h2>Regras Básicas do Floorball</h2>
        <p>Cada equipe tem 5 jogadores de linha e 1 goleiro em quadra.</p>
        <p>Podem ser feitas substituições livres durante o jogo.</p>
        <p>Partidas oficiais têm 3 tempos de 20 minutos cada, com intervalos de 10 minutos.</p>
        <p>Pode haver prorrogação e disputa de pênaltis em caso de empate (dependendo da competição).</p>
        <p>Marcar gols usando o taco para bater a bola dentro do gol adversário.</p>
        <p>Não é permitido usar o taco acima da cintura, nem levantar a bola propositalmente.</p>
        <p>Usar o taco de forma perigosa (por exemplo, levantar acima da cintura).</p>
        <p>Empurrar adversários, bloquear com o corpo ou segurar jogadores.</p>
        <p>Pisar na bola ou jogá-la com as mãos.</p>
        <p>Jogadores recebem penalidades temporárias de 2, 5 ou 10 minutos, dependendo da gravidade.</p>
        <p>Goleiro não usa taco.</p>
        <p>Goleiro pode defender com qualquer parte do corpo, mas dentro da sua área.</p>
      </div>

      <br />
      <hr />
      <br />

      <h2>Sepaktakraw</h2>
      <div className="imagens">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa6PbcMYrfLBwhdKA6mob26fsNs9V8pBjf00l4syZTF7VUSVN8NzR_aYu2c_oi38ZzksQ&usqp=CAU" alt="" height="250px" />
        <img src="https://www.geocities.ws/emacarneiro/sepaktakraw.jpg" alt="" height="250px" />
        <img src="https://s2-oglobo.glbimg.com/B5O_0QJbW2fL8Qb5Fj44-KjLNmA=/0x0:4890x3260/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/6/C/CvruX9SKiafNw60eCAhw/104473449-thailands-pichet-pansan-l-kicks-the-ball-as-malaysias-muhammad-noraizat-mohd-nordin-r-de.jpg" alt="" height="250px" />
      </div>

      <h2>O que é Sepaktakraw?</h2>
      <h3>O Sepaktakraw surgiu no Sudeste Asiático, por volta do século XV, em países como Malásia, Tailândia, Indonésia e Filipinas. No início, era jogado em círculo, com o objetivo de manter a bola no ar usando apenas os pés, a cabeça e o corpo — nunca as mãos. Com o tempo, o esporte evoluiu para uma forma competitiva com rede e regras padronizadas, especialmente a partir da década de 1960, quando Tailândia e Malásia organizaram o jogo moderno. O nome vem da junção das palavras "sepak" (chutar, em malaio) e "takraw" (bola, em tailandês).</h3>
      <br />

      <div className="cartao">
        <h2>Regras Básicas do Sepaktakraw</h2>
        <p>Cada equipe (chamada de regu) é composta por 3 jogadores:</p>
        <p>Tekong: responsável pelo saque.</p>
        <p>Feeder: levanta a bola para o atacante.</p>
        <p>Striker: realiza os ataques (spikes).</p>
        <p>A bola deve ser lançada por um jogador e chutada por outro (o tekong) para iniciar o ponto.</p>
        <p>Não é permitido usar as mãos ou os braços — só os pés, cabeça, ombros, peito e joelhos.</p>
        <p>Cada equipe pode dar até 3 toques na bola antes de devolvê-la ao lado adversário.</p>
        <p>A bola deve passar sobre a rede, e não pode tocar no chão da própria quadra.</p>
        <p>O jogo é disputado em melhor de 3 sets. Cada set vai até 21 pontos, com vantagem mínima de 2 pontos.</p>
        <p>Uma equipe marca ponto se a bola cair no lado adversário ou o adversário cometer uma falta.</p>
        <p>Faltas comuns: tocar a bola com a mão, ultrapassar a rede com o corpo, invadir o lado adversário da quadra, mais de três toques na bola pela mesma equipe.</p>
      </div>

      <br />
      <hr />
      <br />

      <h2>Corfebol</h2>
      <div className="imagens">
        <img src="https://i.ytimg.com/vi/zloWyEgBnU4/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AHUBoAC4AOKAgwIABABGEEgUChlMA8=&rs=AOn4CLBQwlBO3mGMmWcfMMH91Ml12dJ3_g" alt="" height="250px" />
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8sixHTtJKUG66JOiVZn6xCU8PFQymJPnUDz_LiYQm_R2nLr4A3TageaxGvtmYtlqG37vnhXM_Z0hWZ-aDWG8eBQeCNE7tnJpJoxdlOMMKp4AMqGNd_4USVENLQ3taKc5iuUfG3DkMemw/s1600/05dKorfball3.jpg" alt="" height="250px" />
        <img src="https://macae.rj.gov.br/midia/noticias/40448/1523585263.jpg" alt="" height="250px" />
      </div>

      <h2>O que é Corfebol?</h2>
      <h3>O corfebol foi criado em 1902, na Holanda, pelo professor Nico Broekhuysen. Inspirado em um jogo sueco chamado ringboll, ele desenvolveu o esporte com o objetivo de permitir a participação igual de homens e mulheres. O nome vem da palavra holandesa "korf", que significa "cesto". Desde o início, o corfebol foi pensado como um esporte cooperativo, misto e sem contato físico agressivo. Com o tempo, espalhou-se por vários países e é atualmente regulado pela Federação Internacional de Corfebol (IKF).</h3>
      <br />

      <div className="cartao">
        <h2>Regras Básicas do Corfebol</h2>
        <p>8 jogadores por time: 4 homens e 4 mulheres.</p>
        <p>O campo é dividido em duas zonas (ataque e defesa).</p>
        <p>Em cada zona: 2 homens e 2 mulheres por equipe.</p>
        <p>Os jogadores trocam de zona (função) a cada 2 pontos marcados.</p>
        <p>Não é permitido driblar ou correr com a bola.</p>
        <p>O jogador deve passar a bola ou arremessar sem se deslocar.</p>
        <p>O jogo enfatiza passe, posicionamento e trabalho em equipe.</p>
        <p>Só é permitido marcar um jogador do mesmo gênero.</p>
        <p>O contato físico é limitado – empurrões ou bloqueios são falta.</p>
        <p>Não é permitido arremessar se estiver "defendido" (ou seja, com um marcador entre o jogador e o cesto em posição correta).</p>
        <p>Cada bola no cesto vale 1 ponto.</p>
        <p>O time com mais pontos no final do tempo vence.</p>
        <p>Normalmente: 2 tempos de 25 minutos (variável conforme a liga ou idade dos participantes).</p>
      </div>

      <br />
      <hr />
      <br />

      <h2>Touchkball</h2>
      <div className="imagens">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Tchoukball_Geneva_Indoors_2022_-_Nations_Cup_-_Final_Men_-_Olivier_Renaud_%2852578673092%29.jpg/330px-Tchoukball_Geneva_Indoors_2022_-_Nations_Cup_-_Final_Men_-_Olivier_Renaud_%2852578673092%29.jpg" alt="" height="250px" />
        <img src="https://gamesandfun.pt/upload/noticias/1658909666-tchoukball.jpg" alt="" height="250px" />
        <img src="https://assets01.sdd1.ch/assets/lbwp-cdn/mobilesport/files/2016/10/titelseite.jpg" alt="" height="250px" />
      </div>

      <h2>O que é Touchkball?</h2>
      <h3>O tchoukball é um esporte coletivo criado na Suíça, na década de 1960, pelo médico Dr. Hermann Brandt. Ele desenvolveu o esporte com o objetivo de promover uma prática esportiva sem violência, contato físico ou agressividade, valorizando o respeito e a cooperação entre os jogadores. O tchoukball foi criado por Hermann Brandt, que acreditava que muitos esportes causavam lesões e incentivavam o confronto físico. Ele propôs uma alternativa baseada na não-violência, onde o foco seria o trabalho em equipe, a habilidade e o respeito ao adversário. O esporte é praticado em mais de 50 países e tem regras próprias, que priorizam o jogo limpo.</h3>

      <br />
      <div className="cartao">
        <h2>Regras Básicas do Touchkball</h2>
        <p>Número de jogadores: 7 por time (podem ser times mistos, com homens e mulheres).</p>
        <p>Objetivo: Arremessar a bola contra um quadro de rebote (trampolim) e fazer com que ela quique no chão fora da área de defesa, sem que a equipe adversária consiga pegá-la.</p>
        <p>Dois quadros de rebote: Um em cada lado da quadra, e os dois times podem atacar qualquer um deles.</p>
        <p>Proibido o contato físico: Não se pode bloquear, empurrar ou tirar a bola do adversário.</p>
        <p>Rotação e movimentação: O jogador pode dar no máximo 3 passos com a bola e fazer no máximo 3 passes por ataque.</p>
        <p>Zona proibida: Uma área semicircular de 3 metros ao redor do quadro onde os jogadores não podem pisar ao arremessar.</p>
        <p>Duração: Dois tempos de 15 minutos (variável em categorias diferentes).</p>
        <p>A equipe marca 1 ponto quando a bola, após tocar o quadro, quica no chão sem ser interceptada pelo adversário.</p>
        <p>Se a bola bater no quadro e o adversário pegar antes de tocar o chão, não há ponto.</p>
        <p>Se a bola errar o quadro ou cair na zona proibida, ponto para o adversário.</p>
      </div>

      <br />
      <hr />
      <br />

      <h2>Bossaball</h2>
      <div className="imagens">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/3c/71/caption.jpg?w=1200&h=-1&s=1" alt="" height="250px" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9-Rgd-qZ58NvhJ3yWxUKSWPOeqYqCiqD3qg&s" alt="" height="250px" />
        <img src="https://static.wixstatic.com/media/796a80_9d4bab8d600b4032b4e3fadadb12d919~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_85/796a80_9d4bab8d600b4032b4e3fadadb12d919~mv2.jpg" alt="" height="250px" />
      </div>

      <h2>O que é Bossaball?</h2>
      <h3>O Bossaball é um esporte inovador que mistura vôlei, futebol, ginástica e capoeira, jogado sobre uma quadra inflável com uma cama elástica no centro de cada lado. É um jogo cheio de energia, música e acrobacias. O Bossaball foi criado por volta de 2005, na Espanha, pelo belga Filip Eyckmans. Ele teve a ideia de combinar esporte com música e movimento, inspirando-se em ritmos latinos, especialmente a bossa nova (daí o nome “Bossaball”). O objetivo era criar uma atividade esportiva que fosse divertida, dinâmica e acessível, promovendo o bem-estar e o espírito coletivo.</h3>

      <div className="cartao">
        <h2>Regras Básicas do Bossaball</h2>
        <p>Times: 3 a 5 jogadores por equipe.</p>
        <p>Quadra: Inflável, com cama elástica no meio de cada lado.</p>
        <p>Objetivo: Fazer a bola tocar o chão no campo adversário.</p>
        <p>Toques: Cada time pode dar até 5 toques antes de devolver a bola.</p>
        <p>Tipos de toque: mãos e braços (como no vôlei), pés, cabeça ou qualquer parte do corpo (como no futebol).</p>
        <p>Pontuação: 1 ponto se a bola cai no campo inflável do adversário; 3 pontos se a bola cai na cama elástica adversária.</p>
      </div>

      <br />
      <hr />
      <br />

      <h2>Netball</h2>
      <div className="imagens">
        <img src="https://www.catapult.com/wp-content/uploads/2023/02/Blog-Netball-image-scaled.jpg" alt="" height="250px" />
        <img src="https://content.api.news/v3/images/bin/a74dfb544d3aa0d02aa385fa422edc8a" alt="" height="250px" />
        <img src="https://th.bing.com/th/id/R.856fcfbc5b87b46179178d02e7f3dd6f?rik=5%2bsoOedfyAVGGQ&pid=ImgRaw&r=0" alt="" height="250px" />
      </div>

      <h2>O que é Netball?</h2>
      <h3>O netball surgiu no final do século XIX, como uma adaptação do basquete para mulheres. O esporte nasceu na Inglaterra, por volta de 1895, quando a professora Martina Bergman-Österberg modificou as regras do basquete criado por James Naismith para torná-lo menos físico e mais apropriado para as mulheres da época. Com o tempo, o netball se espalhou pelos países do Império Britânico, tornando-se muito popular em lugares como Austrália, Nova Zelândia, Jamaica e Inglaterra. Mas não quer dizer que homens não possam jogar!</h3>

      <div className="cartao">
        <h2>Regras Básicas do Netball</h2>
        <p>Cada time tem 7 jogadores em quadra, com posições e funções bem definidas.</p>
        <p>São 4 períodos de 15 minutos (total de 60 minutos). Há intervalos curtos entre os períodos.</p>
        <p>Marcar mais gols que o adversário, lançando a bola através do aro (sem tabela) posicionado a 3,05 metros de altura.</p>
        <p>A jogadora não pode correr nem driblar com a bola.</p>
        <p>Deve passar a bola em até 3 segundos.</p>
        <p>Não é permitido contato físico — empurrar, bloquear ou interceptar com o corpo é falta.</p>
        <p>Os jogadores só podem se mover dentro de áreas específicas da quadra, de acordo com sua posição.</p>
      </div>

      <br />
      <hr />
      <br />

      <h2>Pickleball</h2>
      <div className="imagens">
        <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1212,c_limit/9461fb4b-340d-4589-ab66-a8bdec26e990/what-is-pickleball-and-how-do-you-play-it.jpg" alt="" height="250px" />
        <img src="https://tse2.mm.bing.net/th/id/OIP.7ChDBmXzTN-Bg4pYmyN7JwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" height="250px" />
        <img src="https://tse2.mm.bing.net/th/id/OIP.3bhYprRcidwzjEgWmAK4tQHaEM?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" height="250px" />
      </div>

      <h2>O que é Pickleball?</h2>
      <h3>O Pickleball foi criado em 1965, nos Estados Unidos, pelos amigos Joel Pritchard, Bill Bell e Barney McCallum. A história conta que, durante um verão, eles queriam brincar, mas não tinham todos os equipamentos para jogar badminton. Então improvisaram uma rede mais baixa, usaram uma bola de plástico furada e raquetes de madeira. O jogo fez tanto sucesso que virou um novo esporte! O nome "Pickleball" veio do cachorro da família Pritchard, chamado Pickles, que sempre corria atrás da bola durante as partidas.</h3>

      <div className="cartao">
        <h2>Regras Básicas do Pickleball</h2>
        <p>A quadra é semelhante à de badminton, com 13,4 m de comprimento e 6,1 m de largura.</p>
        <p>A rede tem 86 cm de altura nas extremidades e 91 cm no centro.</p>
        <p>O jogo pode ser simples (1x1) ou duplas (2x2).</p>
        <p>Apenas o time que está sacando pode marcar pontos.</p>
        <p>Os saques são feitos por baixo, cruzando a quadra para o adversário diagonal.</p>
        <p>A bola deve quicar uma vez de cada lado antes de ser rebatida no ar (regra do “double bounce”).</p>
        <p>Depois disso, os jogadores podem bater de voleio (sem quicar) ou após o quique.</p>
        <p>Existe uma zona de 2,13 m perto da rede chamada “zona de não-vôlei” (kitchen), onde não se pode rebater de voleio.</p>
        <p>Os sets geralmente vão até 11 pontos, com diferença mínima de 2 pontos para vencer.</p>
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
              <Link to="/sobre">
          Quem somos
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
export default OutrosEsportes;