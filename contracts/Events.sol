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
        Event memory _event = eventsMap[_eventId];

        if (_event.exists) {
            return (_event.id, _event.name, _event.exists);
        }

        return ("", "", false);
    }

    function createEvent(string memory _id, string memory _name) public {
        Event memory _event = Event(_id, _name, true);

        events.push(_event);

        eventsMap[_id] = _event;
    }
}
