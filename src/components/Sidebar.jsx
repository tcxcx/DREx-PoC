import React from "react";
import styled from "styled-components";
import logo from '../assets/drexwhite.png';
import { FaSolarPanel } from "react-icons/fa";
import { BiGroup } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiHelpCircle } from "react-icons/fi";
import { ImConnection } from "react-icons/im";
import { ImPacman } from "react-icons/im";

function Sidebar() {
  
  return (
    <Aside id="sidebar">
      <div className="brand">
      <img src={logo} width="100" height="50" alt="logo"/>
      </div>
      <ul className="links">
        <li className="selected">
          
          <Link to="/"><AiFillThunderbolt /></Link>

        </li>
        <li>
          <Link to="/solar"><FaSolarPanel /></Link>

        
        </li>
        <li>
          
          <Link to="/earn"><AiOutlineDollarCircle /></Link>


        </li>
        <li>
          
          <Link to="/rpcapi"> <ImConnection /></Link>


        </li>
        <li>
          
          <Link to="/pacman"> <ImPacman /></Link>



        </li>
      </ul>
      <div className="help">
        <a href="https://linktr.ee/drexnetwork" target="_blank" rel="noreferrer"><FiHelpCircle />
        </a>

      </div>
    </Aside>
  );
}

const Aside = styled.aside`
  background-color: var(--dark-background-color);
  height: 100%;
  width: max-content;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .help {
    svg {
      transition: 0.5s ease-in-out;
      cursor: pointer;
      color: white;
    }
    &:hover {
      svg {
        color: var(--primary-color);
      }
    }
  }
  svg {
    color: var(--primary-color);
    font-size: 1.5rem;
  }
  .brand {
    svg {
      font-size: 2.5rem;
    }
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style-type: none;
    li {
      border-radius: 1rem;
      padding: 0.5rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        color: white;
      }
      &:hover {
        box-shadow: 0 0 60px 8px var(--primary-color);
        svg {
          color: var(--primary-color);
        }
      }
    }
    .selected {
      box-shadow: 0 0 60px 8px var(--primary-color);
      svg {
        color: var(--primary-color);
        background-color: transparent;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    width: 100%;
    padding: 1rem;
    .links,
    .help {
      display: none;
    }
  }
`;

export default Sidebar;
