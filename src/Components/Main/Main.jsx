import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';
import ReactMarkdown from 'react-markdown';
import Markdown from 'react-markdown';
import Sidebar from '../Sidebar/Sidebar';
const Main = () => {

    const {input, setInput, onSent, loading, showResult, recentPrompt,resultData} = useContext(Context)
  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="user-pfp" />
        </div>
        <div className="main-container">
          {showResult ? (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading ?
                <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                </div> 
                :
                <Markdown>{resultData}</Markdown>   
            }
              </div>
            </div>
          ) : (
            <>
              <div className="greet">
                <p>
                  <span>Hello, Dev</span>
                </p>
                <p>How can I help you today</p>
              </div>
              <div className="cards">
                <div className="card">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, nisi?
                  </p>
                  <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, nisi?
                  </p>
                  <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, nisi?
                  </p>
                  <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui, nisi?
                  </p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </>
          )}
          <div className="main-bottom">
            <div className="search-box">
              <input
                type="text"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                placeholder="Enter promt here..."
                name=""
                id=""
              />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
              </div>
            </div>
            <div className="bottom-info">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
                rem error! Sunt sapiente quia aliquam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main