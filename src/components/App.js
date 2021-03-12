import React, { Component } from 'react';
import MyPicture from '../assets/picture_me.JPG';
import Navbar from './Navbar'
import ReactTypingEffect from 'react-typing-effect';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
              <img src={MyPicture} className='my_picture' alt='My Picture' />
              <br />
                <ReactTypingEffect
              text={[
                "🇬🇧 Welcome to my portfolio",
                "🇫🇷 Bienvenue dans mon portfolio",
                "🇪🇸 Benvenuto nel mio portfolio",
                "🇮🇹 Bienvenido a mi cartera",
                "🇩🇪 Willkommen in meinem portfolio",
                "🇷🇺 Добро пожаловать в мое портфолио",
                "🇯🇵 私のポートフォリオへようこそ",
                "🇨🇳 欢迎来到我的投资组合",
                "🇰🇷 내 포트폴리오에 오신 것을 환영합니다",
                "🇦🇪 مرحبا بكم في محفظتي"
              ]}
              speed='40'
              eraseSpeed='10'
              eraseDelay='2000'
              cursorRenderer={cursor => <h1>{cursor}</h1>}
              displayTextRenderer={(text, i) => {
                return (
                  <h1>
                    {text.split('').map((char, i) => {
                      const key = `${i}`;
                      return (
                        <span
                          key={key}
                          style={i%2 === 0 ? {} : {}}
                        >{char}</span>
                      );
                    })}
                  </h1>
                );
              }}
            />
                <p>
                  This website <strike>is running</strike> will be running on IPFS!
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
