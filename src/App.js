import { LogoLinkedin, LogoGithub, LogoTwitter, LogoDiscord, LogoChrome, Star, StarHalf } from "react-ionicons";

function App() {
  return (
    <>
      <div className="header">
        <div className="tabs">
          <a href="#">Skills</a>
          <a href="#">Freelancing</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="intro">
        <div className="container">
          <div className="right">
            <div className="image"></div>
          </div>
          <div className="left">
            <h1>
              Hey there, I'm <br /> Harsh Agarwal
            </h1>
            <p>
              I build innovative products on the web keeping design in mind. I am a freelancer and a full stack web
              developer.
            </p>
            <button>Say Hi</button>
          </div>
        </div>
      </div>

      <div className="section dark about">
        <div className="container">
          <h2>About me</h2>
          <p>
            Hi, I am Harsh Agarwal. I am a 3rd Year student at the IITBHU.
            <br />
            <br />
            I am a freelancer. I started it in my first year of college. I have worked on 20+ professional projects with
            a 100% job success rate for various clients. My projects include browser automation, web scrapping, API
            Development, trading bots, etc. I also work on basic server management, including setting up the automated
            job in the server. Freelancing taught me how to present my idea to the client, negotiate, never
            underestimate myself, and prioritize tasks always to meet deadlines.
            <br />
            <br />
            I'm interested in web development as well. I am a full stack developer and have worked on various projects,
            including Trello clone, Todoist clone, Wordle, etc. Additionally, I have experimented with flutter, a
            cross-platform app development library. I am also efficient in Data Structure and algorithms. I like
            problem-solving.
            <br />
            <br />I also like to learn about financial markets and trade stocks.
          </p>
          <button>View Resume</button>
        </div>
      </div>

      <div className="repeater"></div>

      <div className="section dark skills">
        <div className="container">
          <h2>My Skills</h2>
          <p>
            I constantly learn new and exciting concepts in computer science and web development. I try applying these
            concepts to solve real-world problems. Few technologies I enjoy working with:
            <ul>
              <li>Python</li>
              <li>Javascript</li>
              <li>C++</li>
              <li>HTML/CSS</li>
              <li>ReactJs</li>
              <li>NodeJS</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="repeater"></div>

      <div className="section dark freelancing">
        <div className="container">
          <h2>Freelancing</h2>
          <p>
            I am a Python Freelancer. I have worked on 20+ professional projects with a 100% job success rate for
            various clients. My projects include browser automation, web scrapping, API Development, trading bots, etc.
          </p>
          <button>Check out my profile</button>
          {/* <div className="testimonials">
            <h4>Reviews</h4>
            <div className="testimonial">
              <div className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>

              <p>
                "It was great to work with Harsh, he is so talented, hard working and get things done beyond the scope.
                I highly recommend him. He went well beyond the task and deliver more than the scope.."
              </p>
            </div>
            <div className="testimonial">
              <div className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p>
                "It was a pleasure working with Harsh. He was very communicative, fast & built exactly what I needed.
                Definitely going to hire him for similar tasks in the near future."
              </p>
            </div>
            <div className="testimonial">
              <div className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <StarHalf />
              </div>
              <p>
                "Really great, delivered well before the time agreed. Included a couple of bonus feature I hadn't asked
                for that was great."
              </p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="repeater"></div>

      <div className="section dark projects">
        <div className="container">
          <h2>My Projects</h2>
          <div className="project">
            <div className="poster"></div>
            <div className="info">
              <h2>Crypto Bot</h2>
              <p>
                I built a Python bot that takes real-time signal from TradingView Platform and trade coins accordingly
                on multiple exchanges like CoinBase, FTX, Gemini. I also developed a discord bot which helps to manage
                different trading coin settings. I have worked on 10+ different trading bots freelancing projects.
              </p>
              <div className="buttons">
                <button href="#">
                  <LogoGithub color="white" />
                  Github
                </button>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="poster"></div>
            <div className="info">
              <h2>NFT Sniper</h2>
              <p>
                I built a application which can automate the bidding process on OpenSea using their SDK and browser
                automation. Additionally, I built a discord bot which can retrieve different information and act as a
                interface to configure the application.
              </p>
              <div className="buttons">
                <button to="www.nftbots.live">
                  <LogoChrome color="white" />
                  Live
                </button>
                {/* <button href="#">
                  <LogoGithub color="white" />
                  Github
                </button> */}
              </div>
            </div>
          </div>
          <div className="project">
            <div className="poster"></div>
            <div className="info">
              <h2>RealTime Colloboration</h2>
              <p>
                I built a full stack trello clone including real time data sharing between members on same board. It
                includes features like authentication, real-time updates, ability to share boards, reordering cards etc.
              </p>
              <div className="buttons">
                <button href="#">
                  <LogoGithub color="white" />
                  Github
                </button>
              </div>
            </div>
          </div>
          {/* <div className="view_all_buttons">
            <button className="view_all">View all my projects</button>
          </div> */}
        </div>
      </div>

      <div className="repeater"></div>

      <div className="section dark contact">
        <div className="container">
          <h2>Get in touch with me</h2>
          <div className="socials">
            <LogoDiscord height="40px" width="40px" className="social" title="harshagw#5934" />
            <LogoGithub height="40px" width="40px" className="social" title="harshagw" />
            <LogoLinkedin height="40px" width="40px" className="social" title="harshagw" />
            <LogoTwitter height="40px" width="40px" className="social" title="harsh_agw" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
