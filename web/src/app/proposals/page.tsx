'use client';

import { useDaoData, useDaoProposals } from '@daohaus/moloch-v3-hooks';
import { Proposal_OrderBy } from '@daohaus/moloch-v3-data';
import { useState } from 'react';
import { ENDPOINTS } from '@daohaus/keychain-utils';


const daoId = '0x0a17997f3fd8bffa661ed6efa71e04bb29202853';
const daoChain = '0xaa36a7'; // Sepolia

console.log("DAOhaus SDK ENDPOINTS MAP:", ENDPOINTS);

const ProposalsTest = () => {
  const [order, setOrder] = useState<Proposal_OrderBy>('createdAt');

//   const { dao, isLoading, error } = useDaoData({
//     daoChain,
//     daoId,
//     graphApiKeys: {
//         "0xaa36a7": "477b2575c1a7465d47548a069a485188"
//     }
//   })

  const { proposals, orderProposals, isLoading, error } = useDaoProposals({
    daoChain,
    daoId,
    graphApiKeys: {
        "0xaa36a7": "477b2575c1a7465d47548a069a485188"
    }
  });

  console.log("DAO ID:", daoId);
  console.log("Chain:", daoChain);
  console.log("Proposals result:", proposals);
//   console.log(dao?.id);
  console.log("Subgraph Error:", error);

  const handleOrderingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Proposal_OrderBy;
    setOrder(value);
    // orderProposals({ orderBy: value, orderDirection: 'desc' });
  };

  if (isLoading) return <p>Loading proposals...</p>;
//   if (error) return <p>Error loading proposals: {error.message}</p>;

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

export default ProposalsTest;
