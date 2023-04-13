
import './App.css';
import Linn from './Linn';

import pilt1 from './pildid/pilt11.jpg'
import pilt2 from './pildid/pilt12.jpg'



function App() {

  const linn1 = {
    nimi: "Pariis",
    kirjeldus: "Pariis (prantsuse keeles Paris) on Prantsusmaa pealinn ja Île-de-France'i piirkonna halduskeskus ning Prantsusmaa ainus vald-departemang.Aastatel 2001–2007 ja 2008–2014 oli linnapea Bertrand Delanoë. Aastatel 2014–2020 ja 2020–2026 on linnapea Anne Hidalgo."
  }

  const linn2 = {
    nimi: "London",
    kirjeldus: "London is the capital and largest city of England and the United Kingdom, with a population of just under 9 million.[1] It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia.[9] The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains its medieval boundaries.[note 1][10] The City of Westminster, to the west of the City of London, has for centuries hosted the national government and parliament. Since the 19th century,[11] the name has also referred to the metropolis around this core, historically split between the counties of Middlesex, Essex, Surrey, Kent, and Hertfordshire,[12] which since 1965 has largely comprised Greater London,[13] which is governed by 33 local authorities and the Greater London Authority.[note 2][14]"
  }


  return (
    <div className="kontainer">
      <Linn linnaNimi={linn1.nimi} kirjeldus={linn1.kirjeldus} pilt={pilt1} />
      <Linn linnaNimi={linn2.nimi} kirjeldus={linn2.kirjeldus} pilt={pilt2} />
    </div>
  );
}

export default App;
