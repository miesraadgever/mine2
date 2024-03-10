"use client"

import React from "react";
import Image from "next/image";
import {CldImage} from "next-cloudinary";

const Page = () => {
  return (
      <>
        <CldImage alt={"image"} src={"1"}  width={400} height={500}/>
        <div className="flex flex-row gap-10 col-12 m-10">
          <div className="flex col-4 ">
            Begonnen in 2020 als modemerk, genaamd mi_ne (fonetisch: /’mini’/),
            onderzochten mies raadgever en neeltje de jong meer dan alleen
            kleding. Vanuit hier ontstond mi_ne movement; een interdisciplinair collectief.<br /><br />

            Binnen mi_ne movement onderzoeken mies en neeltje oa. thema’s als dualiteit,
            femine rage en lichamelijke expressie. Deze thema’s worden zowel
            mysthiek als confronterend tot vorm gebracht in projecten variërend
            van audiovisueel werk tot schilderijen, tot teksten en terug naar
            kleding. <br /> <br />

            Tegelijkertijd werken mies en neeltje ook aan individuele projecten.
            Op de persoonlijke pagina’s vind je meer informatie over hun eigen
            praktijk en kwaliteiten.
          </div>
          <div className="flex col-4">
            <Image
                width={500}
                height={350}
                src="/mine2/public/mi_nedefinitie.jpg"
                alt="mi_nedefinitie"
            ></Image>
          </div>
        </div>
        <div className="flex flex-row gap-10 col-12 m-10">
          <div>
            <p className="flex-row col-12 font-medium text-4xl mb-3 mt-10 pl-5">  /MI / - Mies Raadgever </p>
            <p className="flex-row col-12 pl-5 ">
              Mies werkt als beeldend kunstenaar en ontwerper. <br /><br />

              ’Opgeleid als grafisch ontwerper begon ik met het abstract verbeelden van concepten.
              Langzamerhand is mijn praktijk meer ge-shift naar werk wat de
              scheidingslijn en grenzen tussen digitaal en analoog werk ontdekt. <br /><br />

              Door analoog werk te vermengen met de mogelijkheden van digitale
              media, vertel ik mijn verhaal in een eigen handschrift. <br /><br />

              Mijn werk is figuratief maar de boodschap kan abstract zijn. Hierdoor laat ik veel
              ruimte over voor eigen interpretatie. De toeschouwer kan ieder een
              andere en persoonlijke boodschap uit het werk halen. <br /><br />

              Ik werk graag samen of in opdracht van anderen. Samen creëren is voor mij
              belangrijk. Door meerdere disciplines en visies samen te brengen komt
              er een werk uit wat op meerdere facetten interessant kan zijn.’
              <br /> <br />
              <i>@miesraadgever</i> <br />
              <i>mjraadgever@gmail.com</i>
              <br /> <br />
              Nomination Kazerne Design Award, Eindhoven 2020 <br />
              Blauwdruk, Amersfoort 2020 <br />
              Culturele Zaterdag, Utrecht 2020 <br />
              A0 Expo, Utrecht 2020 <br />
              Graduation Show Design Academy Eindhoven, 2019 <br />
              Amersfoortste Prachtnacht, 2018
              <br /> </p>
          </div>
          <div>
            <p className="flex-row col-10 font-medium text-4xl mb-3 mt-10 pl-7"> / NE/ -Neeltje de Jong </p>
            <div>
              <p className="flex-row col-8 pl-7">
                Neeltje werkt als autonoom beeldend kunstenaar met een achtergrond
                in dans, textiel en modeontwerp. Haar melancholisch-poëtische
                handschrift is te herkennen in haar verschillende uitingsvormen.{" "}
                <br />
                <br />
                ‘Mijn werk gaat veel over beweging. Beweging van lichamen,
                beweging in ritueel, beweging door verhaal. Ik leer diep door
                lichaam in plaats van geest. Keer op keer bewegen, totdat het diep
                in mijn wezen geworteld raakt; een belichaamde praktijk.’ <br />
                <br />
                De verhalen die hier uit ontstaan vertaal ik naar kunst rondom het
                lichaam. Daar waar het begon. De esthetiek en tactiliteit van mijn
                werk is belangrijk voor mij omdat het het gevoel vertaalt van het
                verhaal dat ik wil vertellen. Video is een medium waar ik graag
                alle aspecten in samenbreng, hierin voel ik dat ik het beste mijn
                gedachtestroom kan vangen en overbrengen. <br />
                <br />
                Ik geniet ervan om verhalen te vertellen. Om uitdrukking te geven
                aan het mythische, het ongedefinieerde, het vage, het
                onsamenhangende, het amorfe, het rauwe, het trieste en het
                kleine.’ <br />
                <br />
                <i>nelaneeltje.blogspot.com</i> <br />
                <i>@nelaneeltje</i> <br />
                <i>nelaneeltje@gmail.com</i>
                <br /> <br />
                Publicatie en vertoning korte film SHE ‘OTW te Historische kelders
                Arnhem, 2022 <br />
                Workshop ‘waterbraidings’ te Historische kelders Arnhem, 2022{" "}
                <br />
                Videoperformance ‘Kroning van een weesmeisje’ geschreven door
                collectief Painted Series te Amsterdam, 2022
                <br />
                Performance ‘ChildhoodStories’ geschreven door Maria Vogt te Café
                Bosh Arnhem, 2021 <br />
                Expositie ‘blaadjesromance’ en ‘droom archief’ te Nijverheid
                Utrecht, 2018 <br />
                Mode collectie ‘shanti’ te Wilminktheater Enschede, 2016
              </p>
            </div>
          </div>
        </div>
      </>
  );
};

export default Page;
