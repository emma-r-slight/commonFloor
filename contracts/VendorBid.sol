// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

struct Bid {
    uint id;
    uint proposalId;
    address vendor;
    uint amountNZDD;
    string description;
}

contract VendorBid {
    uint public bidCount;
    mapping(uint => Bid) public bids; // bidId -> Bid

    event BidSubmitted(uint bidId, uint proposalId, address vendor, uint amountNZDD);

    function submitBid(uint _proposalId, uint _amountNZDD, string calldata _description) external {
        bidCount++;
        bids[bidCount] = Bid(bidCount, _proposalId, msg.sender, _amountNZDD, _description);
        emit BidSubmitted(bidCount, _proposalId, msg.sender, _amountNZDD);
    }

    function getBid(uint _bidId) external view returns (Bid memory) {
        return bids[_bidId];
    }
}
