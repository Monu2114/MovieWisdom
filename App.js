import "./styles.css";
import React, { useState } from "react";
const movieDialogues = [
  "When you got nothing, You got nothing to lose. - Titanic",
  "You'll have bad times, but it'll always wake you up to the good stuff you weren't paying attention to. - Good Will Hunting",
  "Sometimes even the wrong train takes us to the right station. - LunchBox",
  "Babu moshai,zindagi badi honi chahiye lambi nahi - Anand",
  "Kabhi kabhi jeetne ke liye kuch haarna padta hain….aur haar kar jeetne wale ko baazigar kehte hain - Baazigar",
  // Add more dialogues
  "Why do we fall, sir? So that we can learn to pick ourselves up - The Batman begins",
  "It's not about how hard you hit. It's about how hard you can get hit and keep moving forward. - Rocky Balboa, Rocky",
  "You can’t live your life for other people. You’ve got to do what’s right for you, even if it hurts some people you love. - The Notebook",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "In every job that must be done, there is an element of fun. - Mary Poppins",
  "Our lives are defined by opportunities, even the ones we miss. - The Curious Case of Benjamin Button",
  "Sometimes the right path is not the easiest one. - Pocahontas",
  "Your focus determines your reality. - Star Wars: Episode I - The Phantom Menace",
  "Great men are not born great; they grow great. - The Godfather II",
  "Life is not the amount of breaths you take, it’s the moments that take your breath away. - Hitch",
  "To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other, and to feel. That is the purpose of life. - The Secret Life of Walter Mitty",
  "We can complain because rose bushes have thorns, or rejoice because thorns have roses. - Allo, le cosmos...",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - What About Bob?",
  "It's never too late to be what you might have been. - George Eliot",
  "Mogambo khush hua. - Mr. India",
  "Don ko pakadna mushkil hi nahin, namumkin hai. - Don",
  "Aaj ek hasi aur baant lo, aaj ek dua aur maang lo, aaj ek ansoo aur pee lo, aaj ek zindagi aur jee lo, aaj ek sapna aur dekh lo, aaj... kya pata, kal ho na ho! - Kal Ho Naa Ho",
  "Rishte mein toh hum tumhare baap lagte hain, naam hai Shahenshah. - Shahenshah",
  "Ek chutki sindoor ki keemat tum kya jaano Ramesh Babu? - Om Shanti Om",
  "Babuji ne kaha gaon chhod do, sab ne kaha Paro ko chhod do, par ek ne kaha, ki chhod do, toh sab kuch chhod do. - Devdas",
  "Aaj mere paas bangla hai, gaadi hai, bank balance hai, tumhare paas kya hai? - Deewar",
  "Mere Karan Arjun aayenge. - Karan Arjun",
  "Tum ek machhli ke aankh ke samne dangle kyun lekar ja rahe ho? - Andaz Apna Apna",
  "Pushpa, I hate tears. - Amar Prem",
];

export default function App() {
  const [quote, setQuote] = useState("");
  const [movie, setMovie] = useState("");
  const [showQuoteBox, setShowQuoteBox] = useState(false);

  // Function to get a random quote
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * movieDialogues.length);
    const selectedQuote = movieDialogues[randomIndex];
    const [dialogue, movieInfo] = selectedQuote.split(" - ");
    setQuote(dialogue);
    setMovie(movieInfo);
    setShowQuoteBox(true);
  };

  return (
    <>
      <div class="Images">
        <img
          src="https://i.pinimg.com/236x/43/98/b6/4398b655c32785a6a3809581fc3192af.jpg"
          alt="Titanic"
        />
        <img
          src="https://i.pinimg.com/236x/d9/8a/93/d98a933ec2a627c2e2905af5eeefab76.jpg"
          alt="Jab we Met"
        />
        <img
          src="https://i.pinimg.com/564x/bb/77/b5/bb77b5324ae20c352a4ce40f23cd6958.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/236x/04/e6/4f/04e64f9e2cf1863d9ca1b574f600c432.jpg"
          alt="Two"
        />
        <img
          src="https://i.pinimg.com/564x/f1/21/c3/f121c3ec0e04476d73c3c274656d4cf6.jpg"
          alt=""
        />

        <img
          src="https://i.pinimg.com/564x/ff/b2/20/ffb220bb833711218e3d3774e74ce566.jpg"
          alt="Tangled"
        />

        <img src="" alt="" />
        <div class="movie-wisdom-text">
          <h1>Movie Wisdom</h1>
          <button onClick={getRandomQuote}>Get Quote</button>

          {showQuoteBox && (
            <div className="quote-box">
              <p className="quote">"{quote}"</p>
              <p className="movie">-{movie}</p>
            </div>
          )}
        </div>
        <img src="" alt="" />
        <img
          src="https://i.pinimg.com/236x/07/67/c4/0767c49c7db60e33341ea653c436a810.jpg"
          alt=""
        />
      </div>
    </>
  );
}
