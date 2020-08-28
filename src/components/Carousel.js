import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Card from "../components/Card";

import bg from "../../src/assets/images/bg.jpg";
import git from "../../src/assets/images/git.png";
import lin from "../../src/assets/images/lin.jpg";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Marius Gabriel",
          subtitle: "The cookbook for developers",
          imageSrc: bg,
          link: "asd",
          selected: false,
        },
        {
          id: 1,
          title: "Marius Gabriel",
          subtitle: "LinkedIn",
          imageSrc: lin,
          link: "https://www.linkedin.com/in/boghiangabriel/",
          selected: false,
        },
        {
          id: 2,
          title: "GitHub",
          subtitle: "A social network for developers",
          imageSrc: git,
          link: "https://github.com/Boghian-Gabriel",
          selected: false,
        },
      ],
    };
  }

  //verific daca un Card a fost selectat sau nu in functie de id-ul setat in constructor
  handleCardClick = (id, card) => {
    console.log(id);
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  //crearea item-urilor dupa id, cate obiecte sunt in items atatea carduri se formeaza
  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          key={item.id}
          item={item}
          onClick={(e) => this.handleCardClick(item.id, e)}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
