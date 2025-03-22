'use client';

import { useDaoProposals } from '@daohaus/moloch-v3-hooks';
import { Proposal_OrderBy } from '@daohaus/moloch-v3-data';
import { useState } from 'react';

const daoId = '0x0a17997f3fd8bffa661ed6efa71e04bb29202853';
const daoChain = '0xaa36a7'; // Sepolia

export const ProposalsTest = () => {
  const [order, setOrder] = useState<Proposal_OrderBy>('createdAt');

  const { proposals, orderProposals, isLoading, error } = useDaoProposals({
    daoChain,
    daoId,
  });

  const handleOrderingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Proposal_OrderBy;
    setOrder(value);
    orderProposals({ orderBy: value, orderDirection: 'desc' });
  };

  if (isLoading) return <p>Loading proposals...</p>;
  if (error) return <p>Error loading proposals: {error.message}</p>;

  return (
    <div>
      <h2>DAOhaus Proposals</h2>

      <select value={order} onChange={handleOrderingChange}>
        <option value="createdAt">Order by Created At</option>
        <option value="proposalId">Order by Proposal ID</option>
        <option value="sponsor">Order by Sponsor</option>
      </select>

      <ul>
        {proposals?.map((p) => (
          <li key={p.id}>
            #{p.proposalId} - {p.title || 'Untitled'} - Status: {p.status}
          </li>
        ))}
      </ul>
    </div>
  );
};
