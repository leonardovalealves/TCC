import { Link } from "react-router-dom";
import "./restauracao.css";

export default function Restauração() {
  return (
    <div>
<header>
           <img
          src="https://media.discordapp.net/attachments/1399878782134780027/1425936790640001128/logo_pronta_top.png?ex=68eab81f&is=68e9669f&hm=21054c3e26cbd8d4eb4606de4c7e976feb3d6c930708e062ae50e093cb3725b4&=&format=webp&quality=lossless&width=548&height=548"
          alt="Logo"
          height="100px"
        />
        <div className="meio">
      <Link to="/"><button>Início</button></Link>
      <Link to="/sobre"><button>Quem somos</button></Link>
      <Link to="/Graficos">
          <button>Graficos</button>
          </Link>
      <Link to="/outrosEsportes"><button>Esportes pouco conhecidos</button></Link>
        </div>
        <Link to="/ajude"><button>Ajude-nos</button></Link>
        </header>
      <h1>Antes / Depois</h1>
      <br />
      <div className="ilum">
        <h3>
          Veja nossos alguns de nossos trabalhos e o antes e depois nas quadras e parques que
          passamos:
        </h3>

        <div className="tudo">
          <div className="imagens1">
            <div className="imagem1">
              <img
                src="https://media.discordapp.net/attachments/700395698591629405/1432828591988539422/image_13.png?ex=6902791c&is=6901279c&hm=d03fd7e8f1454e0587d766bd7456fad51474df6999aeb6fc572ea2bfe7345e81&=&format=webp&quality=lossless"
                alt=""
                height="300px"
                width="450px"
              />
            </div>
            <div className="imagem2">
              <img
                src="https://media.discordapp.net/attachments/700395698591629405/1432828700293857351/image_12.png?ex=69027936&is=690127b6&hm=74212ad3b981da01c6c8bab9e33ea45b30fdddd8fb1b29f385373f2b49e87f5d&=&format=webp&quality=lossless"
                alt=""
                height="300px"
                width="450px"
              />
            </div>
          </div>

          <div className="imagens2">
            <div className="imagem3">
              <img
                src="https://media.discordapp.net/attachments/700395698591629405/1432828809932963993/image_15.png?ex=69027950&is=690127d0&hm=7fa713bbc502799a63ead80863742b306e1c3e015bc389afe04ef1f0eb546ef8&=&format=webp&quality=lossless"
                alt=""
                height="300px"
                width="450px"
              />
            </div>
            <div className="imagem4">
              <img
                src="https://media.discordapp.net/attachments/700395698591629405/1432828940036214985/image_16.png?ex=6902796f&is=690127ef&hm=6b68c2acbc018538852b0e66f2b638f84014c437776e65d1d6eaedded4534241&=&format=webp&quality=lossless"
                alt=""
                height="300px"
                width="450px"
              />
            </div>
          </div>

          <div className="imagens3">
            <div className="imagem5">
              <img
                src="https://media.discordapp.net/attachments/700395698591629405/1432829066834219118/image_17.png?ex=6902798e&is=6901280e&hm=87ca99d09689568888a2d2353a4258abb0f9169b9a5209f62227b65a8420ddee&=&format=webp&quality=lossless"
                alt=""
                height="300px"
                width="450px"
              />
            </div>
            <div className="imagem6">
              <img
                src="https://media.discordapp.net/attachments/700395698591629405/1432829274255261706/image_18.png?ex=690279bf&is=6901283f&hm=d2307a3aee4bc30bba219ca0c05630fbf7023cca98cc4506feb5f18609d44476&=&format=webp&quality=lossless"
                alt=""
                height="300px"
                width="450px"
              />
            </div>
          </div>
        </div>
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
          Gráficos
          </Link>
              <Link to="/outrosEsportes">
          Esportes <br /> pouco <br /> conhecidos
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
