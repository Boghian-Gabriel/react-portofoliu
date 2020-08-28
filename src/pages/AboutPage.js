import React from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>Salut!</p>
        <p>Mă numesc Boghian Marius-Gabriel și locuiesc în județul Suceava.</p>
        <p>
          Am absolvit facultatea de Inginire Electrică și Știința
          Calculatoarelor și în prezent sunt masterand la SIC(Știința și Ingeria
          Calculatoarelor), anul II.
        </p>
        <p>
          Doresc să candidez pentru un post de Junior Software Developer. Ca și
          experiență, am lucrat la două companii. La prima companie am dezvoltat
          o aplicație folosind mediul de dezvoltare C# și baze de date SQL, dar
          am avut ocazia de a învăța și câteva noțiuni despre mediul de
          dezvoltare Android Studio. La a doua companie am dezvoltat o aplicație
          mobilă, atât Android cât și iOS, folosind mediul de dezvoltare
          React-Native. Pe lângă această aplicație, am avut ocazia de a învăța
          și HTML, CSS, JS, creând astfel câteva pagini WEB.
        </p>
        <p>Sper ca visul meu de a-mi găsi un job, să devină realitate!</p>
        <p>Mulțumesc!</p>
      </Content>
    </div>
  );
}

export default AboutPage;
