import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import Content from "../components/Content";
import bg from "../assets/images/bg.jpg";
import nl2br from "react-newline-to-break";
class ContactPage2 extends Component {
  render() {
    const message =
      " Salut! \nNumele meu este Boghian Marius-Gabriel. Mi-ar face mare plăcere să-mi găsesc un job în domeniu. Sunt o persoana foarte motivată și dispusă pentru noi provocări. Aș dori să necunoaștem. \nMulțumesc!";

    return (
      <Content>
        <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h2>Boghian</h2>
              <img
                src={bg}
                alt="avatar"
                style={{ height: "350px", paddingTop: "1em" }}
              />
              <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
                {nl2br(message)}
              </p>
            </Cell>
            <Cell col={6}>
              <h2>Informații de contact</h2>
              <hr />

              <div className="contact-list">
                <List>
                  <ListItem className="list-item">
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    <h3>0747973542</h3>
                  </ListItem>

                  <ListItem className="list-item" style={{}}>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <h3>boghiangabriel96@yahoo.com</h3>
                  </ListItem>

                  <ListItem className="list-item">
                    <i className="fa fa-skype" aria-hidden="true" />
                    <h3>Marius-Gabriel</h3>
                  </ListItem>
                </List>
              </div>
            </Cell>
          </Grid>
        </div>
      </Content>
    );
  }
}

export default ContactPage2;
