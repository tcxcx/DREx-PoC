import React from "react";
import styled from "styled-components";
import Sidebar from "components/Sidebar";
import RightSidebar from "components/RightSidebar";
function Pacman() {
  
  return (
    <Section>
      <Sidebar/>
        <iframe class="pacman" title="pacman_play" src="https://funhtml5games.com?embed=pacman" frameborder="0" scrolling="no"></iframe>
      <RightSidebar/>
    </Section>
  );
}

const Section = styled.section`
  height: 750px;
  width: 750px;
  padding-left: 300px;
  padding-top: 150px;

  background-color: rgba(3, 3, 27, 0.7);
  

.pacman {
  height: 750px;
  width: 75000px;
  
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
    width: 100%;
    padding: 1rem;
    .links,
    .help {
      display: none;
    }


`;

export default Pacman;
