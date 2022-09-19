import React from "react";
import styled from "styled-components";
function Pacman() {
  
  return (
    <Section>
      
        <iframe class="pacman" title="pacman_play" src="https://funhtml5games.com?embed=pacman" frameborder="0" scrolling="no"></iframe>
            
    </Section>
  );
}

const Section = styled.section`
  height: 500px;
  width: 500px;
  padding-left: 500px;
  padding-top: 200px;

  background-color: rgba(3, 3, 27, 0.7);
  

.pacman {
  height: 750px;
  width: 500px;
  
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