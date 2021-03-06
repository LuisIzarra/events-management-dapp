import "./App.css";
import { useState } from "react";
import { ethers } from "ethers";
import Events from "./artifacts/contracts/Events.sol/Events.json";
// import Token from "./artifacts/contracts/Token.sol/Token.json";

const eventAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
// const tokenAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

function App() {
  const [eventName, setEventName] = useState();
  const [eventId, setEventId] = useState();
  const [findEventId, setFindEventId] = useState();
  // const [userAccount, setUserAccount] = useState();
  // const [amount, setAmount] = useState();

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function findEventById(eventId) {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log({ provider });
      const contract = new ethers.Contract(eventAddress, Events.abi, provider);
      try {
        const data = await contract.findEventById(eventId);
        console.log("eventId", eventId);
        console.log("data: ", data);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  }

  // async function getBalance() {
  //   if (typeof window.ethereum !== "undefined") {
  //     const [account] = await window.ethereum.request({
  //       method: "eth_requestAccounts",
  //     });
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const contract = new ethers.Contract(tokenAddress, Token.abi, provider);
  //     const balance = await contract.balanceOf(account);
  //     console.log("Balance: ", balance.toString());
  //   }
  // }

  async function createEvent() {
    if ((!eventName, !eventId)) return;
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log({ provider });
      const signer = provider.getSigner();
      const contract = new ethers.Contract(eventAddress, Events.abi, signer);
      const transaction = await contract.createEvent(eventId, eventName);
      await transaction.wait();

      findEventById(eventId);
    }
  }

  // async function sendCoins() {
  //   if (typeof window.ethereum !== "undefined") {
  //     await requestAccount();
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const contract = new ethers.Contract(tokenAddress, Token.abi, signer);
  //     const transaction = await contract.transfer(userAccount, amount);
  //     await transaction.wait();
  //     console.log(`${amount} Coins successfully sent to ${userAccount}`);
  //   }
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Event's Management</h1>
        <p className="paragraph">
          Basic dapp to start smart contract development with Ethereum. I think
          is the best stack for building full stack dApps with Solidity. Full
          code is in the following{" "}
          <a
            href="https://github.com/LuisIzarra/events-management-dapp"
            target="_blank"
            rel="noreferrer"
          >
            link
          </a>
        </p>
        <p>
          You could do and interact with Metamask creating an event, and find
          this event as well.
        </p>
        <br />
        <input
          onChange={(e) => setEventId(e.target.value)}
          placeholder="Set event ID"
        />
        <input
          onChange={(e) => setEventName(e.target.value)}
          placeholder="Set event's name"
        />
        <button onClick={createEvent}>Create Event</button>
        <br />
        <input
          onChange={(e) => setFindEventId(e.target.value)}
          placeholder="Event ID"
        />
        <button onClick={(e) => findEventById(findEventId)}>Find Event</button>

        {/* <button onClick={getBalance}>Get Balance</button>
        <button onClick={sendCoins}>Send Coins</button>
        <input
          onChange={(e) => setUserAccount(e.target.value)}
          placeholder="Account ID"
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        /> */}
      </header>
    </div>
  );
}

export default App;
