//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

import "hardhat/console.sol";

contract Events {
    struct Event {
        string ID;
        string Name;
    }

    Event[] public events;

    // Should get an event by given event’s id.
    function findEventByID(string memory _eventID) public {
        // Add code here.
    }

    // Should set a new event to the array events.
    function createEvent(string memory _ID, string memory _name) public {
        // Add code here.
    }
}
