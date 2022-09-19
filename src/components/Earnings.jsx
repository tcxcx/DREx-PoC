import React from "react";
import styled from "styled-components";
import { applyCardStyles } from "components/ReusableStyles";
import { Link } from "react-router-dom";


function Earnings() {
  const earningsData = [
    {
      progress: 45,
      amount: 31.25,
    },
    {
      progress: 55,
      amount: 17.31,
    },
    {
      progress: 65,
      amount: 13.15,
    },
    {
      progress: 100,
      amount: 42.42,
    },
  ];
  return (
    <Section>
      <div className="title-container">
        <div className="title">
          <h4>Your Earnings</h4>
          <h1>$7,85</h1>
        </div>
        <Link to="/earn" className="more"> Show More</Link>
      </div>
      <div className="earnings">
        {earningsData.map(({ progress, amount }) => {
          return (
            <div className="earning" key={amount}>
              <div className="data">
                <h5>{progress === 100 ? "FUNDS CLEARED" : "DEPOSITED BY SMEs"}</h5>
                <h5 className="amount">$ {amount}</h5>
              </div>
              <progress
                max={100}
                value={progress}
                className={progress === 100 ? "cleared" : ""}
              />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${applyCardStyles}
  color:white;
  display: flex;
  flex-direction: column;
  .title-container {
    display: flex;
    justify-content: space-between;
    .title {
      h1 {
        font-size: 2rem;
        letter-spacing: 0.2rem;
        color: #00FA9A;
      }
    }
    .more {
      color: var(--primary-color);
    }
  }
  .earnings {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .earning {
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
      .data {
        display: flex;
        justify-content: space-between;
        h5 {
          font-weight: 100;
        }
      }
      progress {
        width: 100%;
        -webkit-appearance: none;
        appearance: none;
        &::-webkit-progress-bar {
          border-radius: 1rem;
          height: 0.15rem;
        }
        &::-webkit-progress-value {
          border-radius: 1rem;
          background-color: aquamarine;
        }
      }
      .cleared {
        &::-webkit-progress-value {
          background-color: var(--primary-color);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    height: 100%;
    .title-container {
      flex-direction: column;
      text-align: center;
    }
    .earnings {
    }
  }
`;

export default Earnings;
