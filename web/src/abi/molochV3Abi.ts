export const molochV3Abi = [
    {
      "inputs": [{ "internalType": "uint256", "name": "proposalId", "type": "uint256" }],
      "name": "proposals",
      "outputs": [
        { "internalType": "uint8", "name": "status", "type": "uint8" },
        { "internalType": "address", "name": "proposer", "type": "address" },
        { "internalType": "uint256", "name": "yesVotes", "type": "uint256" },
        { "internalType": "uint256", "name": "noVotes", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalProposals",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "uint256", "name": "proposalId", "type": "uint256" },
        { "indexed": true, "internalType": "address", "name": "proposer", "type": "address" },
        { "indexed": true, "internalType": "address", "name": "sponsor", "type": "address" },
        { "indexed": false, "internalType": "string", "name": "details", "type": "string" },
        { "indexed": false, "internalType": "bytes[]", "name": "actions", "type": "bytes[]" },
        { "indexed": false, "internalType": "uint256", "name": "expiration", "type": "uint256" },
        { "indexed": false, "internalType": "uint256", "name": "baalGas", "type": "uint256" }
      ],
      "name": "NewProposal",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "uint256", "name": "proposalId", "type": "uint256" }
      ],
      "name": "ProposalCancelled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "uint256", "name": "proposalId", "type": "uint256" },
        { "indexed": true, "internalType": "address", "name": "sponsor", "type": "address" }
      ],
      "name": "ProposalSponsored",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "uint256", "name": "proposalId", "type": "uint256" },
        { "indexed": false, "internalType": "bool", "name": "didPass", "type": "bool" }
      ],
      "name": "ProposalProcessed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "voter", "type": "address" },
        { "indexed": true, "internalType": "uint256", "name": "proposalId", "type": "uint256" },
        { "indexed": true, "internalType": "uint8", "name": "approve", "type": "uint8" },
        { "indexed": false, "internalType": "uint256", "name": "balance", "type": "uint256" }
      ],
      "name": "VoteCast",
      "type": "event"
    }
  ];
  