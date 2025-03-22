// web/src/hooks/useOnChainEvents.ts
import { useWatchContractEvent } from 'wagmi';
import { molochV3Abi } from '../../src/abi/molochV3Abi';

export const useOnChainProposalListener = (daoAddress: `0x${string}`) => {
  return useWatchContractEvent(
    {
      address: daoAddress,
      abi: molochV3Abi,
      eventName: 'NewProposal',
      chainId: 11155111, // Sepolia
    }
  );
};
