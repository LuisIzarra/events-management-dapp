//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;
import "hardhat/console.sol";

contract Events {
    struct Event {
        string id;
        string name;
        bool exists;
    }

    Event[] public events;

    mapping(string => Event) public eventsMap;

    function findEventById(string memory _eventId)
        public
        view
        returns (
            string memory id,
            string memory name,
            bool exists
        )
    {
        // Event memory _event = eventsMap[_eventId];

        if (eventsMap[_eventId].exists) {
            console.log("here 0");
            return (
                eventsMap[_eventId].id,
                eventsMap[_eventId].name,
                eventsMap[_eventId].exists
            );
        }
        console.log("here 1");
        return ("", "", false);
    }

    function createEvent(string memory _id, string memory _name) public {
        // Event memory _event = Event(_id, _name, true);

        // events.push(_event);
        console.log(_id, _name);
        eventsMap[_id].name = _name;
        eventsMap[_id].id = _id;
        eventsMap[_id].exists = true;
    }
}
