import { useEffect, useState } from 'react';
import './App.css';
import Cardslist from './components/Cardslist';
import './components/Cardslist.css';

const Cardimages=[
            {src:"img/helmet-1.png",matched:false,show:false},
            {src:"img/potion-1.png",matched:false,show:false},
            {src:"img/ring-1.png",matched:false,show:false},
            {src:"img/scroll-1.png",matched:false,show:false},
            {src:"img/shield-1.png",matched:false,show:false},
            {src:"img/sword-1.png",matched:false,show:false},
              ]
function App() {


  const [cards,setCards]=useState([]);
  const [turn,setTurn]=useState(0);
  const [cardOne,setCardOne]=useState(null);
  const [cardTwo,setCardTwo]=useState(null);
  const [desabled,setDesabled]=useState(false);


  const ShuffleCards=()=>
  {
            const shuflledcards=[...Cardimages,...Cardimages]
            .sort(()=> Math.random() - 0.5)
            .map((card)=>({...card,id:Math.random()}));
            setCards(shuflledcards);
            setTurn(0);
  }

  const SelectedCard=(card)=>{
      if(desabled==false)
      {
        cardOne?setCardTwo(card):setCardOne(card);
        const newCards=cards.map(c=>(
          c.id===card.id?{...c,show:true}:c
        ));
        setCards(newCards);
      }
  }

  useEffect(()=>{
    
    if(cardOne && cardTwo)
    {
      setDesabled(true);
      if(cardOne.src==cardTwo.src)
      {
        const newCards=cards.map(card=>(
          card.src===cardOne.src?{...card,matched:true}:card
        ));
        setCards(newCards);
        setDesabled(false);
        ResetCards();
      }
      else
      {
          setTimeout(()=>{
            const newCards=cards.map(c=>(
              c.id===cardOne.id || c.id===cardTwo.id?{...c,show:false}:c
            ));
            setCards(newCards);
            setDesabled(false);
          },1000)
          ResetCards();
      }
    }
  },[cardOne,cardTwo])


  const ResetCards=()=>{
    setCardOne(null);
    setCardTwo(null);
    setTurn(turn+1);
  }

  return (
    <div className="App">
      <button onClick={ShuffleCards}>Start Game</button>
      <Cardslist cards={cards} SelectedCard={SelectedCard}/>
      <h2>{turn}</h2>
    </div>
  );
}

export default App;
