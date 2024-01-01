import Navbar from "./Navbar";
import IMAGES from "../images/Images";
import { useState, useEffect } from "react";

import "./styles/home.css";
const Home = () => {
  const [compchoice, setCompchoice] = useState(0);
  const [guess, setGuess] = useState(0);
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const [cont, setCont] = useState(false);
  const [win, setWin] = useState(false);
  const [lcondition, setLConditions] = useState(false);
  const [rcondition, setRConditions] = useState(false);
  // computer message display
  useEffect(() => {
    setCont(true);
    setTimeout(() => {
      setCont(false);
    }, 2300);
  }, []);
  // starting game function
  const startgame = () => {
    setStart(true);
    setCompchoice(Math.floor(Math.random() * 100 + 1));
  };
  //checking the coditioins for the game
  const checkguess = () => {
    setCount(count + 1);
    // console.log(count)
    if (compchoice == guess) {
      setWin(true);
      setLConditions(false);
      setRConditions(false);
    } else if (compchoice > guess) {
      setLConditions(true);
      setRConditions(false);
    } else if (compchoice < guess) {
      setRConditions(true);
      setLConditions(false);
    } else {
      alert("Enter the valid numbers");
    }
  };
  //restarting the game
  const Restartgame = () => {
    setStart(false);
    setCount(0);
    setWin(false);
    setLConditions(false);
    setRConditions(false);
  };
  return (
    <>
      <Navbar score={count} />
      {start ? (
        <div className="flex flex-col">
          {cont ? (
            <>
              <div className=" flex flex-row justify-center items-center my-5">
                <img src={IMAGES.loading} alt="gif" className="w-12 h-12" />
                <span className="text-[1.4rem] font-serif">
                  WAIT COMPUTER IS CHOOSING A NUMBER
                </span>
                <img src={IMAGES.gif1} alt="thinking" className="w-24 h-24" />
              </div>
            </>
          ) : (
            <div>
              {win ? (
                <>
                  <div className="flex flex-row justify-center items-center">
                    <div className="text-[1.5rem] font-serif">
                      You guessed it right
                    </div>
                    <div className="flex items-center justify-center">
                      <img
                        src={IMAGES.gif4}
                        alt="gotidea"
                        className="w-32 h-36"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-row justify-center items-center">
                    <div className="text-[1.5rem] font-serif">
                      Computer choosed the number
                    </div>
                    <div className="flex items-center justify-center">
                      <img
                        src={IMAGES.gif2}
                        alt="gotidea"
                        className="w-32 h-36"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src={IMAGES.gif3}
                      alt="seeing image"
                      className="w-24 h-24"
                    />
                    <h2 className="text-[2rem] text-center">
                      Enter your guess ?
                    </h2>
                  </div>
                </>
              )}
            </div>
          )}
          <main className="main">
            <div>
              {lcondition ? (
                <div className="bg-blue-500 font-serif text-[2rem] rounded-lg">
                  The value you guessed is less than the computer choice
                </div>
              ) : (
                ""
              )}
            </div>
            {win ? (
              ""
            ) : (
              <div className="flex justify-center items-center">
                <input
                  type="number"
                  className=" outline-none px-3 py-3 bg-blue-900 text-white w-[8vw] h-[10vh] border border-black mx-6 font-mono text-3xl rounded-md"
                  onChange={(e) => setGuess(e.target.value)}
                />
                <button
                  onClick={checkguess}
                  className="bg-blue-400 px-5 py-3 rounded-md hover:bg-blue-700 hover:text-white"
                >
                  Check
                </button>
              </div>
            )}

            <div>
              {rcondition ? (
                <div className="bg-red-600 font-serif text-[2rem] text-black rounded-lg">
                  The value you guessed is greater than the computer choice
                </div>
              ) : (
                ""
              )}
            </div>
          </main>
          {/* restarting the game */}
          {win ? (
            <div className="flex items-center justify-center my-4 flex-col">
              <h3 className="my-3 bg-red-800 font-mono rounded-md text-white text-[3rem]">
                HURRAY YOU GUESSSED THE NUMBER ... IN {count} ATTEMPTS
              </h3>
              <button
                onClick={Restartgame}
                className="bg-blue-800 text-white hover:bg-green-500 hover:text-black px-4 py-2 text-[1rem] rounded-xl"
              >
                Restart Game
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center my-6">
          <button
            onClick={startgame}
            className=" px-4 py-2 rounded-md text-white bg-blue-900 hover:bg-black"
          >
            Start Game
          </button>
        </div>
      )}

      <div className="flex items-start flex-col mx-10 my-10">
        <h3 className="font-serif text-[2rem] text-blue-600 hover:underline">
          RULES OF CONDUCTION
        </h3>
        <ol className="list-decimal">
          <li>
            Start the game by clicking above{" "}
            <span className="underline text-red-500 font-bold">START</span>{" "}
            button
          </li>
          <li>Enter the guessing number inside the blue box and checkguess</li>
          <li>
            Check weather the entered number is smaller or greater than the
            guessing number
          </li>
          <li>Change the number in check the guess</li>
          <li>
            The more you guess in the miinimum time ,the greater is your score{" "}
          </li>
        </ol>
      </div>
    </>
  );
};

export default Home;
