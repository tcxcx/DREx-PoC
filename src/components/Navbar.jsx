import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
/* import {web3Accounts, web3Enable} from "@polkadot/extension-dapp"; */
import { useEtherBalance, useEthers } from '@usedapp/core';
import React /* { useEffect, useRef, useState } */ from "react";
/* import autoAnimate from "@formkit/auto-animate";
import { formatEther } from '@ethersproject/units'; */

function Navbar() {
/* Polkadot Js */
/* 
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState(null); */

   /* useEffect(() => {
        extensionSetup()
    }, []); 

    const extensionSetup = async () => {
        const extensions = await useEthers('Wallet-connect-tutorial');
        if (extensions.length === 0) {
            setError('No extension installed!');
            return;
        }
        const accounts = await useEthers();
        setAccounts(accounts);
        console.log(accounts);
    };  */
  /*   const [open, setOpen] = useState(false);
    const parentRef = useRef();
  
    useEffect(() => {
      if (parentRef.current) {
        autoAnimate(parentRef.current);
      }
    }, [parentRef]);
  
    const showMore = () => setOpen(!open); */

    function trimAccount(accountString) {
      return `${accountString.slice(0, 6)}...${accountString.slice(
        accountString.length - 4,
        accountString.length
      )}`;}
    
/*     const etherBalance = useEtherBalance(account);
 */
    const { activateBrowserWallet, account } = useEthers();

/*       const etherBalance = useEtherBalance(account);
 */
  return (
    <Nav>
      <h2>Overview</h2>
      <div className="px-2 cursor-pointer py-1 border-2 border-gray-200 w-[400px] rounded-lg" /* ref={parentRef} */>
        <div>
        <button className='btn' onClick={() => activateBrowserWallet()}>{account ? trimAccount(account) : `Connect Wallet`}</button>         
          <BiChevronDown /* onClick={showMore}  *//>
        </div>
        {/* Polkadot JS  */}
        {/* {open && (
          <p className="p-2 italic">
            {
            error && <div>Error: {error}</div>
          }
          {
            accounts.map(account => <div>{account.address }</div>)
          }
          </p>
        )} */}
       {/*  {open && (
          <p className="p-2 italic">
            {
            error && <div>Error: {error}</div>
          }
          {
          
            accounts.map(account => <div>{account.address }</div>)
          }
          </p>
        )} */}
      </div>
    </Nav>
  );
}

    



const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  margin: 2rem;
  .timeline {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg {
      color: var(--primary-color);
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    margin-bottom: 0;
    .timeline {
      gap: 1rem;
    }
  }
`;

export default Navbar;
