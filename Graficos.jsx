import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Graficos() {
  const quadrasData = [
    { id: 0, value: 800, label: 'Voleibol', color: '#3b82f6' },
    { id: 1, value: 1200, label: 'Basquetebol', color: '#9333ea' },
    { id: 2, value: 900, label: 'Futebol', color: '#22c55e' },
    { id: 3, value: 200, label: 'Futsal', color: '#eab308' },
    { id: 4, value: 300, label: 'Tênis', color: '#ff9100ff' },
    { id: 5, value: 150, label: 'Artes marciais/Capoeira', color: '#ce1a1aff' },
    { id: 6, value: 250, label: 'Skate', color: '#a1a1aa' },
    { id: 7, value: 400, label: 'Natação', color: '#508b87ff' },
    { id: 8, value: 100, label: 'Musculação/Academia', color: '#5cd42dff' },
  ];

  const atividadesData = [
    { id: 0, value: 3.5, label: 'Futebol', color: '#f63b3bff' },
    { id: 1, value: 1.5, label: 'Voleibol', color: '#8cc522ff' },
    { id: 2, value: 2, label: 'Caminhada', color: '#7900ebff' },
    { id: 3, value: 1, label: 'Natação', color: '#e6ea08ff' },
    { id: 4, value: 1, label: 'Musculação', color: '#003692ff' },
    { id: 5, value: 0.7, label: 'Ciclismo', color: '#a1a1aa' },
    { id: 6, value: 0.7, label: 'Corrida', color: '#ffffffff' },
    { id: 7, value: 0.5, label: 'Basquete', color: '#7dd3fc' },
    { id: 8, value: 0.4, label: 'Artes marciais', color: '#ff00ffff' },
  ];

  const pessimo = [15, 15, 15, 15, 10, 10, 25, 20, 0];
  const regular = [30, 25, 35, 40, 20, 25, 35, 30, 0];
  const otimo = [55, 60, 50, 45, 70, 65, 40, 50, 0];
  const esportes = [
    'Futebol',
    'Futsal',
    'Voleibol',
    'Basquete',
    'Tênis',
    'Capoeira/Artes Marciais',
    'Skate',
    'Natação',
    'Musculação/Academia',
  ];

  return (
    <>
      <style>
        {`
          footer, footer h2, footer h3, footer h4, footer h5, footer a {
            color: white;
          }
        `}
      </style>

      <header>
        <img
          src="https://media.discordapp.net/attachments/1399878782134780027/1425936790640001128/logo_pronta_top.png?ex=68eab81f&is=68e9669f&hm=21054c3e26cbd8d4eb4606de4c7e976feb3d6c930708e062ae50e093cb3725b4&=&format=webp&quality=lossless&width=548&height=548"
          alt="Logo"
          height="100px"
        />
        <div className="meio">
          <Link to="/"><button>Início</button></Link>
         <Link to="/sobre"><button>Quem somos</button></Link>
         <Link to="/outrosEsportes">
          <button>Esportes pouco conhecidos</button>
          </Link>
        </div>
        
        <Link to="/ajude"><button>Ajude-nos</button></Link>
      </header>

      <Box
        sx={{
          textAlign: 'center',
          backgroundColor: '#d6f5d6',
          p: 3,
          borderRadius: 3,
          width: '100%',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            maxWidth: '800px',
            margin: '0 auto 40px',
            color: '#333',
            fontSize: '1.1rem',
            lineHeight: 1.6,
            textAlign: 'justify',
          }}
        >
          Nossa organização começou com o intuito de instigar os cidadãos a se
          exercitarem e praticarem esportes. Parece uma tarefa simples, até
          vermos o estado que estão as quadras e a falta de diversificação de
          esportes presentes em São Paulo. <strong>Veja os dados:</strong>
          <br />
          <br />
        </Typography>

        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#3572ef', mb: 0.5 }}>
          Estimativa de quadras em São Paulo
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 3, color: '#555' }}>
          (de acordo com esporte)
        </Typography>

        <PieChart
          series={[{ data: quadrasData, innerRadius: 0, outerRadius: 150, paddingAngle: 3, cornerRadius: 5 }]}
          width={500}
          height={400}
          legend={{ hidden: false }}
        />

        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', color: '#3572ef', mt: 6, mb: 0.5 }}
        >
          Atividades mais feitas em São Paulo
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 3, color: '#555' }}>
          (em milhões)
        </Typography>

        <PieChart
          series={[{ data: atividadesData, innerRadius: 60, outerRadius: 140, paddingAngle: 3, cornerRadius: 5 }]}
          width={500}
          height={400}
          legend={{ hidden: false }}
        />

        <Typography
          variant="h6"
          sx={{
            maxWidth: '800px',
            margin: '0 auto 40px',
            color: '#333',
            fontSize: '1.1rem',
            lineHeight: 1.6,
            textAlign: 'justify',
          }}
        >
          <br />
          Abaixo está uma tabela com estimativas de conservação das instalações esportivas públicas em São Paulo, separadas por esporte.
        </Typography>

        <Box
          sx={{
            backgroundColor: '#dff5d5',
            padding: '40px 0',
            borderRadius: '12px',
          }}
        >
          <Typography variant="h5" align="center" sx={{ color: '#2b6cb0', fontWeight: 'bold', mb: 1 }}>
            Gráfico de conservação de quadras
          </Typography>
          <Typography align="center" sx={{ color: '#6b705c', fontSize: '1rem', mb: 4 }}>
            Por esporte praticado no Brasil
          </Typography>

          <Box sx={{ width: '100%', height: 400 }}>
            <BarChart
              xAxis={[{ data: esportes, scaleType: 'band' }]}
              series={[
                { data: pessimo, label: 'Péssimo estado', color: '#3b82f6', stack: 'estado' },
                { data: regular, label: 'Regular', color: '#22c55e', stack: 'estado' },
                { data: otimo, label: 'Ótimo estado', color: '#a855f7', stack: 'estado' },
              ]}
              height={350}
            />
          </Box>
        </Box>
      </Box>
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
          <Link to="/">Início</Link>
            <Link to="/sobre">Quem somos</Link>
            <Link to="/outrosEsportes">Esportes <br />pouco <br />conhecidos</Link>

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
    </>
  );
}
