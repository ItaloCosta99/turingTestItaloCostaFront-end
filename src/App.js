import './styles/global.css';
import Container from './components/Container/index.js';
import Wrapper from './components/Wrapper/index.js';
import Button from './components/Button/index.js';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <div>
        <Wrapper>
          <Container>
            <img className="avatar" src="https://avatars.githubusercontent.com/u/65988287?v=4" alt="Avatar"/>
            <p>Olá, eu me chamo Ítalo Costa, sou de Afonso Bezerra/RN e meu objetivo é me tornar um dev Front-end.
              Eu amo futebol, games, filmes, hip-hop e tecnológia. Abaixo tem alguns eventos online que participei.
            </p>
            <ul>
              <li>× Formação:</li>
              <li>- Técnico em Agroecologia;</li>
              <li>- 2º Período de Sistemas de Informação;</li>
              <li>× Experiência:</li>
              <li>- Auxiliar Adminstrativo.</li>
            </ul>
          </Container>
          <Container>
            <p>Me encontre em:</p>
            <Button href="https://github.com/ItaloCosta99">
              <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="GitHub logo"/>
              ItaloCosta99
            </Button>
            <Button href="https://www.instagram.com/italocosta99/">
              <img src="https://www.flaticon.com/svg/vstatic/svg/1384/1384015.svg?token=exp=1619750001~hmac=e4a939acf8a0172fbe4053a94df79bde" alt="Instagram logo"/>
              ItaloCosta99
            </Button>
            <Button href="https://www.linkedin.com/in/ítalo-costa-450a001b9/">
              <img src="https://www.flaticon.com/svg/vstatic/svg/1384/1384014.svg?token=exp=1619750001~hmac=6862ded75bdaedcbd05488705fce27f1" alt="LinkedIn logo"/>
              Ítalo Costa
            </Button>
            <Button href="https://www.facebook.com/profile.php?id=100014282839216">
              <img src="https://www.flaticon.com/svg/vstatic/svg/1384/1384005.svg?token=exp=1619750001~hmac=b9d6e4cb637b52429daf03429ffc9e69" alt="Facebook logo"/>
              Ítalo Costa
            </Button>
          </Container>
        </Wrapper>
        <Card>
          <div className="arrow-down"></div>
          <a href="https://github.com/ItaloCosta99/Aluraflix">Aluraflix</a>
          <img src="data:image/png;base64,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" alt="Imersão React Alura"/>
          <p>Projeto realizado durante imersão em React elaborado pela Alura. Se trata de um clone de Netflix.</p>
        </Card>
        <Card>
          <div className="arrow-down"></div>
          <a href="https://github.com/ItaloCosta99/Ecoleta">Ecoleta</a>
          <img src="https://pbs.twimg.com/profile_images/1291682473592659968/sEorc6oh.jpg" alt="Rocketseat"/>
          <p>Repositório do Projeto Ecoleta da Next Level Week (1 a 7 de Julho de 2020) da Rocketseat.</p>
        </Card>
        <Card>
          <div className="arrow-down"></div>
          <a href="https://github.com/ItaloCosta99/Proffy-2.0">Proffy</a>
          <img src="https://pbs.twimg.com/profile_images/1291682473592659968/sEorc6oh.jpg" alt="Rocketseat"/>
          <p>
            Proffy is a platform to bring together teachers and students.
            <br/> 
            Built during Next Level Week # 2 promoted by @Rocketseat between August 3 and 9, 2020.</p>
        </Card>
        <Card>
          <div className="arrow-down"></div>
          <a href="https://github.com/ItaloCosta99/Corinthians-Quiz">Corinthians-Quiz</a>
          <img src="https://a.espncdn.com/i/teamlogos/soccer/500/874.png" alt="Corinthians Quiz"/>
          <p>
            Um Quiz sobre o time do meu coração o Corinthians, feito com Next.js, Styled Components, React.
            <br/> 
            Realizado durante a 2ª Imersão React promovida pela Alura.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default App;
