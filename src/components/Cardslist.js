const Cardslist = ({cards,SelectedCard}) => {
    return (  
        <div className="cards-list">
            {cards.map(card=>(
            <div className={`card ${card.matched ? 'matched':''} ${card.show ? 'show':''}`} key={card.id}>
                <img src={card.src} className='front' alt="front image" />
                <img src="img/cover.png" className='cover' onClick={()=>SelectedCard(card)} alt="Back image" />
            </div>
        ))}
        </div>
    );
}

export default Cardslist;