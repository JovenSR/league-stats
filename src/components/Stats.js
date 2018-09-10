import React from 'react';


const Stats = props => (
  <div className="weather__info">

    {
        props.summonerName && <p className="weather__key">Summoner:
         <span className="weather__value">{ props.summonerName }</span>
         </p>
    }
    {
        props.championImage && <p className="weather__key"><span><img src={ props.championImage }/></span></p>
    }
    {
        props.championName && <p className="weather__key">Champion Name:
        <span className="weather__value">{ props.championName }</span>
        </p>
    }
    {
        props.outcome && <p className="weather__key">Game Outcome:
        <span className="weather__value">{ props.outcome }</span>
        </p>
    }
    {
        props.gameDuration &&  <p className="weather__key">Game Duration:
         <span className="weather__value">{ props.gameDuration }</span>
         </p>
    }
    {
        props.kda && <p className="weather__key">KDA:
        <span className="weather__value">{ props.kda }</span>
        </p>
    }
    {
        props.champLevel && <p className="weather__key">Champion Level:
        <span className="weather__value">{ props.champLevel }</span>
        </p>
    }
    {
        props.items && <p className="weather__key">Items:
        <span className="weather__value">{ props.items }</span>
        </p>
    }
    {
        props.cs && <p className="weather__key">Total Minions Killed:
         <span className="weather__value">{ props.cs } &nbsp;&nbsp;&nbsp; <p className="weather__key">Creep Score Per Minute: <span className="weather__value">{ Math.round(props.cs / props.gameDuration) }</span></p></span>
         </p>
    }
    {
        props.runes && <p className="weather__key">Runes:
         <span className="weather__value">{ props.runes }</span>
         </p>
    }
    {
        props.spell1 && props.spell2 && <p className="weather__key">Spells:
        <span className="weather__value">{ props.spell1 }, { props.spell2 } &nbsp;&nbsp;&nbsp; <img src={ props.spell1img }/> <img src={ props.spell2img }/></span>
        </p>
    }
    {
        props.error && <p>{ props.error }</p>
    }

  </div>
);



export default Stats;