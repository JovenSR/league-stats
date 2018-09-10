import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Stats from './components/Stats';
import itemData from './itemData.js';

const championMessyData = {"data":{"Jax":{"name":"Jax","id":24,"title":"Grandmaster at Arms","key":"Jax"},"Sona":{"name":"Sona","id":37,"title":"Maven of the Strings","key":"Sona"},"Tristana":{"name":"Tristana","id":18,"title":"the Yordle Gunner","key":"Tristana"},"Varus":{"name":"Varus","id":110,"title":"the Arrow of Retribution","key":"Varus"},"Fiora":{"name":"Fiora","id":114,"title":"the Grand Duelist","key":"Fiora"},"Singed":{"name":"Singed","id":27,"title":"the Mad Chemist","key":"Singed"},"TahmKench":{"name":"Tahm Kench","id":223,"title":"the River King","key":"TahmKench"},"Leblanc":{"name":"LeBlanc","id":7,"title":"the Deceiver","key":"Leblanc"},"Thresh":{"name":"Thresh","id":412,"title":"the Chain Warden","key":"Thresh"},"Karma":{"name":"Karma","id":43,"title":"the Enlightened One","key":"Karma"},"Jhin":{"name":"Jhin","id":202,"title":"the Virtuoso","key":"Jhin"},"Rumble":{"name":"Rumble","id":68,"title":"the Mechanized Menace","key":"Rumble"},"Udyr":{"name":"Udyr","id":77,"title":"the Spirit Walker","key":"Udyr"},"LeeSin":{"name":"Lee Sin","id":64,"title":"the Blind Monk","key":"LeeSin"},"Yorick":{"name":"Yorick","id":83,"title":"Shepherd of Souls","key":"Yorick"},"Kassadin":{"name":"Kassadin","id":38,"title":"the Void Walker","key":"Kassadin"},"Sivir":{"name":"Sivir","id":15,"title":"the Battle Mistress","key":"Sivir"},"MissFortune":{"name":"Miss Fortune","id":21,"title":"the Bounty Hunter","key":"MissFortune"},"Draven":{"name":"Draven","id":119,"title":"the Glorious Executioner","key":"Draven"},"Yasuo":{"name":"Yasuo","id":157,"title":"the Unforgiven","key":"Yasuo"},"Kayle":{"name":"Kayle","id":10,"title":"The Judicator","key":"Kayle"},"Shaco":{"name":"Shaco","id":35,"title":"the Demon Jester","key":"Shaco"},"Renekton":{"name":"Renekton","id":58,"title":"the Butcher of the Sands","key":"Renekton"},"Hecarim":{"name":"Hecarim","id":120,"title":"the Shadow of War","key":"Hecarim"},"Fizz":{"name":"Fizz","id":105,"title":"the Tidal Trickster","key":"Fizz"},"KogMaw":{"name":"Kog'Maw","id":96,"title":"the Mouth of the Abyss","key":"KogMaw"},"Maokai":{"name":"Maokai","id":57,"title":"the Twisted Treant","key":"Maokai"},"Lissandra":{"name":"Lissandra","id":127,"title":"the Ice Witch","key":"Lissandra"},"Jinx":{"name":"Jinx","id":222,"title":"the Loose Cannon","key":"Jinx"},"Urgot":{"name":"Urgot","id":6,"title":"the Headsman's Pride","key":"Urgot"},"Fiddlesticks":{"name":"Fiddlesticks","id":9,"title":"the Harbinger of Doom","key":"Fiddlesticks"},"Galio":{"name":"Galio","id":3,"title":"the Sentinel's Sorrow","key":"Galio"},"Pantheon":{"name":"Pantheon","id":80,"title":"the Artisan of War","key":"Pantheon"},"Talon":{"name":"Talon","id":91,"title":"the Blade's Shadow","key":"Talon"},"Gangplank":{"name":"Gangplank","id":41,"title":"the Saltwater Scourge","key":"Gangplank"},"Ezreal":{"name":"Ezreal","id":81,"title":"the Prodigal Explorer","key":"Ezreal"},"Gnar":{"name":"Gnar","id":150,"title":"the Missing Link","key":"Gnar"},"Teemo":{"name":"Teemo","id":17,"title":"the Swift Scout","key":"Teemo"},"Annie":{"name":"Annie","id":1,"title":"the Dark Child","key":"Annie"},"Mordekaiser":{"name":"Mordekaiser","id":82,"title":"the Iron Revenant","key":"Mordekaiser"},"Azir":{"name":"Azir","id":268,"title":"the Emperor of the Sands","key":"Azir"},"Kennen":{"name":"Kennen","id":85,"title":"the Heart of the Tempest","key":"Kennen"},"Riven":{"name":"Riven","id":92,"title":"the Exile","key":"Riven"},"Chogath":{"name":"Cho'Gath","id":31,"title":"the Terror of the Void","key":"Chogath"},"Aatrox":{"name":"Aatrox","id":266,"title":"the Darkin Blade","key":"Aatrox"},"Poppy":{"name":"Poppy","id":78,"title":"Keeper of the Hammer","key":"Poppy"},"Taliyah":{"name":"Taliyah","id":163,"title":"the Stoneweaver","key":"Taliyah"},"Illaoi":{"name":"Illaoi","id":420,"title":"the Kraken Priestess","key":"Illaoi"},"Heimerdinger":{"name":"Heimerdinger","id":74,"title":"the Revered Inventor","key":"Heimerdinger"},"Alistar":{"name":"Alistar","id":12,"title":"the Minotaur","key":"Alistar"},"XinZhao":{"name":"Xin Zhao","id":5,"title":"the Seneschal of Demacia","key":"XinZhao"},"Lucian":{"name":"Lucian","id":236,"title":"the Purifier","key":"Lucian"},"Volibear":{"name":"Volibear","id":106,"title":"the Thunder's Roar","key":"Volibear"},"Sejuani":{"name":"Sejuani","id":113,"title":"the Winter's Wrath","key":"Sejuani"},"Nidalee":{"name":"Nidalee","id":76,"title":"the Bestial Huntress","key":"Nidalee"},"Garen":{"name":"Garen","id":86,"title":"The Might of Demacia","key":"Garen"},"Leona":{"name":"Leona","id":89,"title":"the Radiant Dawn","key":"Leona"},"Zed":{"name":"Zed","id":238,"title":"the Master of Shadows","key":"Zed"},"Blitzcrank":{"name":"Blitzcrank","id":53,"title":"the Great Steam Golem","key":"Blitzcrank"},"Rammus":{"name":"Rammus","id":33,"title":"the Armordillo","key":"Rammus"},"Velkoz":{"name":"Vel'Koz","id":161,"title":"the Eye of the Void","key":"Velkoz"},"Caitlyn":{"name":"Caitlyn","id":51,"title":"the Sheriff of Piltover","key":"Caitlyn"},"Trundle":{"name":"Trundle","id":48,"title":"the Troll King","key":"Trundle"},"Kindred":{"name":"Kindred","id":203,"title":"The Eternal Hunters","key":"Kindred"},"Quinn":{"name":"Quinn","id":133,"title":"Demacia's Wings","key":"Quinn"},"Ekko":{"name":"Ekko","id":245,"title":"the Boy Who Shattered Time","key":"Ekko"},"Nami":{"name":"Nami","id":267,"title":"the Tidecaller","key":"Nami"},"Swain":{"name":"Swain","id":50,"title":"the Master Tactician","key":"Swain"},"Taric":{"name":"Taric","id":44,"title":"the Shield of Valoran","key":"Taric"},"Syndra":{"name":"Syndra","id":134,"title":"the Dark Sovereign","key":"Syndra"},"Skarner":{"name":"Skarner","id":72,"title":"the Crystal Vanguard","key":"Skarner"},"Braum":{"name":"Braum","id":201,"title":"the Heart of the Freljord","key":"Braum"},"Veigar":{"name":"Veigar","id":45,"title":"the Tiny Master of Evil","key":"Veigar"},"Xerath":{"name":"Xerath","id":101,"title":"the Magus Ascendant","key":"Xerath"},"Corki":{"name":"Corki","id":42,"title":"the Daring Bombardier","key":"Corki"},"Nautilus":{"name":"Nautilus","id":111,"title":"the Titan of the Depths","key":"Nautilus"},"Ahri":{"name":"Ahri","id":103,"title":"the Nine-Tailed Fox","key":"Ahri"},"Jayce":{"name":"Jayce","id":126,"title":"the Defender of Tomorrow","key":"Jayce"},"Darius":{"name":"Darius","id":122,"title":"the Hand of Noxus","key":"Darius"},"Tryndamere":{"name":"Tryndamere","id":23,"title":"the Barbarian King","key":"Tryndamere"},"Janna":{"name":"Janna","id":40,"title":"the Storm's Fury","key":"Janna"},"Elise":{"name":"Elise","id":60,"title":"the Spider Queen","key":"Elise"},"Vayne":{"name":"Vayne","id":67,"title":"the Night Hunter","key":"Vayne"},"Brand":{"name":"Brand","id":63,"title":"the Burning Vengeance","key":"Brand"},"Graves":{"name":"Graves","id":104,"title":"the Outlaw","key":"Graves"},"Soraka":{"name":"Soraka","id":16,"title":"the Starchild","key":"Soraka"},"Karthus":{"name":"Karthus","id":30,"title":"the Deathsinger","key":"Karthus"},"Vladimir":{"name":"Vladimir","id":8,"title":"the Crimson Reaper","key":"Vladimir"},"Zilean":{"name":"Zilean","id":26,"title":"the Chronokeeper","key":"Zilean"},"Katarina":{"name":"Katarina","id":55,"title":"the Sinister Blade","key":"Katarina"},"Shyvana":{"name":"Shyvana","id":102,"title":"the Half-Dragon","key":"Shyvana"},"Warwick":{"name":"Warwick","id":19,"title":"the Uncaged Wrath of Zaun","key":"Warwick"},"Ziggs":{"name":"Ziggs","id":115,"title":"the Hexplosives Expert","key":"Ziggs"},"Kled":{"name":"Kled","id":240,"title":"the Cantankerous Cavalier","key":"Kled"},"Khazix":{"name":"Kha'Zix","id":121,"title":"the Voidreaver","key":"Khazix"},"Olaf":{"name":"Olaf","id":2,"title":"the Berserker","key":"Olaf"},"TwistedFate":{"name":"Twisted Fate","id":4,"title":"the Card Master","key":"TwistedFate"},"Nunu":{"name":"Nunu","id":20,"title":"the Yeti Rider","key":"Nunu"},"Rengar":{"name":"Rengar","id":107,"title":"the Pridestalker","key":"Rengar"},"Bard":{"name":"Bard","id":432,"title":"the Wandering Caretaker","key":"Bard"},"Irelia":{"name":"Irelia","id":39,"title":"the Will of the Blades","key":"Irelia"},"Ivern":{"name":"Ivern","id":427,"title":"the Green Father","key":"Ivern"},"MonkeyKing":{"name":"Wukong","id":62,"title":"the Monkey King","key":"MonkeyKing"},"Ashe":{"name":"Ashe","id":22,"title":"the Frost Archer","key":"Ashe"},"Kalista":{"name":"Kalista","id":429,"title":"the Spear of Vengeance","key":"Kalista"},"Akali":{"name":"Akali","id":84,"title":"the Fist of Shadow","key":"Akali"},"Vi":{"name":"Vi","id":254,"title":"the Piltover Enforcer","key":"Vi"},"Amumu":{"name":"Amumu","id":32,"title":"the Sad Mummy","key":"Amumu"},"Lulu":{"name":"Lulu","id":117,"title":"the Fae Sorceress","key":"Lulu"},"Morgana":{"name":"Morgana","id":25,"title":"Fallen Angel","key":"Morgana"},"Nocturne":{"name":"Nocturne","id":56,"title":"the Eternal Nightmare","key":"Nocturne"},"Diana":{"name":"Diana","id":131,"title":"Scorn of the Moon","key":"Diana"},"AurelionSol":{"name":"Aurelion Sol","id":136,"title":"The Star Forger","key":"AurelionSol"},"Zyra":{"name":"Zyra","id":143,"title":"Rise of the Thorns","key":"Zyra"},"Viktor":{"name":"Viktor","id":112,"title":"the Machine Herald","key":"Viktor"},"Cassiopeia":{"name":"Cassiopeia","id":69,"title":"the Serpent's Embrace","key":"Cassiopeia"},"Nasus":{"name":"Nasus","id":75,"title":"the Curator of the Sands","key":"Nasus"},"Twitch":{"name":"Twitch","id":29,"title":"the Plague Rat","key":"Twitch"},"DrMundo":{"name":"Dr. Mundo","id":36,"title":"the Madman of Zaun","key":"DrMundo"},"Orianna":{"name":"Orianna","id":61,"title":"the Lady of Clockwork","key":"Orianna"},"Evelynn":{"name":"Evelynn","id":28,"title":"the Widowmaker","key":"Evelynn"},"RekSai":{"name":"Rek'Sai","id":421,"title":"the Void Burrower","key":"RekSai"},"Lux":{"name":"Lux","id":99,"title":"the Lady of Luminosity","key":"Lux"},"Sion":{"name":"Sion","id":14,"title":"The Undead Juggernaut","key":"Sion"},"Camille":{"name":"Camille","id":164,"title":"the Steel Shadow","key":"Camille"},"MasterYi":{"name":"Master Yi","id":11,"title":"the Wuju Bladesman","key":"MasterYi"},"Ryze":{"name":"Ryze","id":13,"title":"the Rune Mage","key":"Ryze"},"Malphite":{"name":"Malphite","id":54,"title":"Shard of the Monolith","key":"Malphite"},"Anivia":{"name":"Anivia","id":34,"title":"the Cryophoenix","key":"Anivia"},"Shen":{"name":"Shen","id":98,"title":"the Eye of Twilight","key":"Shen"},"JarvanIV":{"name":"Jarvan IV","id":59,"title":"the Exemplar of Demacia","key":"JarvanIV"},"Malzahar":{"name":"Malzahar","id":90,"title":"the Prophet of the Void","key":"Malzahar"},"Zac":{"name":"Zac","id":154,"title":"the Secret Weapon","key":"Zac"},"Gragas":{"name":"Gragas","id":79,"title":"the Rabble Rouser","key":"Gragas"}},"type":"champion","version":"7.5.2"}
const championData = championMessyData.data;

const API_KEY = "RGAPI-d716eb25-a4cd-4869-b17e-b0470b039c3e";

class App extends Component {

  state = {
    summonerName: undefined,
    gameDuration: undefined,
    outcome: undefined,
    championImage: undefined,
    championName: undefined,
    kda: undefined,
    champLevel: undefined,
    runes: undefined,
    items: undefined,
    spell1: undefined,
    spell2: undefined,
    spell1img: undefined,
    spell2img: undefined,
    runes: undefined,
    cs: undefined,
    csPerMin: undefined
  }

  getStats = async (e) => {
    e.preventDefault();
    const summoner = e.target.elements.summoner.value;

    if (summoner) {
      const findName = await fetch(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${summoner}?api_key=${API_KEY}`);
      const data = await findName.json();
      const accountId = data.accountId;
      // console.log(accountId);

      const findMatches = await fetch(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${accountId}?api_key=${API_KEY}`);
      const data2 = await findMatches.json();

      const gameId1 = data2.matches[0]['gameId'];
      const gameId2 = data2.matches[1]['gameId'];

      const matchInfo1 = await fetch(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v3/matches/${gameId1}?forAccountId=${accountId}&api_key=${API_KEY}`);
      const matchInfo2 = await fetch(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v3/matches/${gameId2}?api_key=${API_KEY}`);

      const matchData1 = await matchInfo1.json();
      const matchData2 = await matchInfo2.json();

      console.log(matchData1);

      const PIdentities = matchData1.participantIdentities;
      const Pstats = matchData1.participants;

      for(let i = 0; i < PIdentities.length; i++) {
        if(PIdentities[i].player.summonerName === summoner) {
          const participantId = PIdentities[i].participantId
          console.log(participantId)
          for(let j = 0; j < Pstats.length; j++) {
            if(Pstats[j].participantId === participantId) {

              this.setState({
                cs: Pstats[j].stats.totalMinionsKilled
              })

              let finalOutcome = Pstats[j].stats.win
              if(finalOutcome === true) {
                finalOutcome = "Victory"
              } else {
                finalOutcome = "Defeat"
              }
              this.setState({
                outcome: finalOutcome
              })

              let championImageId = Pstats[j].championId
              this.setState({
                championImage: `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${championImageId}.png`
              })

              let kda = `${Pstats[j].stats.kills}/${Pstats[j].stats.deaths}/${Pstats[j].stats.assists}`
              this.setState({
                kda: kda
              })


              for(let key in championData) {
                let dataKey = championData[key]
                let championName;
                if(dataKey.id === championImageId) {
                  championName = dataKey.name;
                  this.setState({
                    championName: championName
                  })
                }
              }

              this.setState({
                champLevel: Pstats[j].stats.champLevel
              })


              const items = [Pstats[j].stats.item0, Pstats[j].stats.item1, Pstats[j].stats.item2,Pstats[j].stats.item3, Pstats[j].stats.item4, Pstats[j].stats.item5, Pstats[j].stats.item6]

              let itemString = '';

              for(let n = 0; n < items.length; n++) {
                const itemId = items[n]
                if(itemId > 0) {
                  itemString += itemData.data[itemId].name + ", ";
                }

              }

              this.setState({
                  items: itemString.substring(0, itemString.length - 2)
              })

              let url = 'http://ddragon.leagueoflegends.com/cdn/8.14.1/data/en_US/summoner.json';

              fetch(url)
              .then(res => res.json())
              .then((out) => {
                for(let keys in out.data) {
                  let obj = out.data[keys];
                  if(obj.key === Pstats[j].spell1Id.toString()) {
                    this.setState({
                      spell1: obj.name,
                      spell1img: `http://ddragon.leagueoflegends.com/cdn/8.17.1/img/spell/${obj.image.full}`
                    })
                  }
                  if(obj.key === Pstats[j].spell2Id.toString()) {
                    this.setState({
                      spell2: obj.name,
                      spell2img: `http://ddragon.leagueoflegends.com/cdn/8.17.1/img/spell/${obj.image.full}`
                    })
                  }

                }
              })
              .catch(err => { throw err });

              let url1 = 'https://ddragon.leagueoflegends.com/cdn/8.17.1/data/en_US/runesReforged.json';
              let runeString = '';

              fetch(url1)
              .then(res => res.json())
              .then((out) => {
                console.log(out);
                const rune1 = Pstats[j].stats.perk0;
                const rune2 = Pstats[j].stats.perk1;
                const rune3 = Pstats[j].stats.perk2;
                const rune4 = Pstats[j].stats.perk3;
                const rune5 = Pstats[j].stats.perk4;
                const rune6 = Pstats[j].stats.perk5;
                for(let i = 0; i < out.length; i++) {
                  let outIndex = out[i]
                  for(let j = 0; j < outIndex.slots.length; j++) {
                    let slotIndex = outIndex.slots[j]
                    for(let m = 0; m < slotIndex.runes.length; m++) {
                      let slotRunes = slotIndex.runes[m];
                      if(slotRunes.id === rune1 || slotRunes.id === rune2 || slotRunes.id === rune3 || slotRunes.id === rune4 || slotRunes.id === rune5 || slotRunes.id === rune6 ) {
                        runeString += slotRunes.name + ", ";
                        this.setState({
                          runes: runeString.substring(0, runeString.length - 2)
                        })
                        console.log(slotRunes.name);
                      }
                    }
                  }
                }
              })
              .catch(err => { throw err });
            }

          }


        }

      }

      this.setState({
       summonerName: summoner,
       gameDuration: (matchData1.gameDuration / 60).toFixed(2),
       error: ""
    });

    } else {
     this.setState({
      summonerName: undefined,
      gameDuration: undefined,
      error: "Please enter in a name."
    });

    }

  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getStats={this.getStats}/>
                  <Stats
                    gameDuration={this.state.gameDuration}
                    summonerName={this.state.summonerName}
                    error={this.state.error}
                    outcome={this.state.outcome}
                    championImage={this.state.championImage}
                    championName={this.state.championName}
                    kda={this.state.kda}
                    champLevel={this.state.champLevel}
                    items={this.state.items}
                    spell1={this.state.spell1}
                    spell2={this.state.spell2}
                    spell1img={this.state.spell1img}
                    spell2img={this.state.spell2img}
                    runes={this.state.runes}
                    cs={this.state.cs}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}




export default App;
