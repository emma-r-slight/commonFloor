// web/src/components/ProposalsList.tsx
'use client';

import { useDaohausProposals } from '../../hooks/useDaohausProposals';
import { useOnChainProposalListener } from '../../hooks/useOnChainEvents';

const daoId = '0x0a17997f3fd8bffa661ed6efa71e04bb29202853';
const daoChain = '0xaa36a7'; // Sepolia

export const ProposalsList = () => {
  const { proposals, isLoading, error } = useDaohausProposals(daoChain, daoId);

  // Listen to NewProposal on-chain
  useOnChainProposalListener(daoId as `0x${string}`);

  if (isLoading) return <p>Loading proposals...</p>;
  if (error) return <p>Error loading proposals</p>;

  return (
    <div>
      <h2>DAOhaus Proposals (Subgraph)</h2>
      <ul>
        {proposals?.map((p) => (
          <li key={p.id}>{p.title || `Proposal #${p.proposalId}`}</li>
        ))}
      </ul>
    </div>
  );
};
