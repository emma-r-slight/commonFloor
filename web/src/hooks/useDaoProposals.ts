import { useDaoProposals } from '@daohaus/moloch-v3-hooks/hooks';
 
const {
  proposals,
  filterProposals,
  filter,
  ordering,
  orderProposals,
  hasNextPage,
  fetchNextPage,
} = useDaoProposals({
  daoChain: '0xaa36a7',
  daoId: '0x0a17997f3fd8bffa661ed6efa71e04bb29202853',
});
 
const updatedOrdering = [];

// Filtering
console.log('current filter', filter);
// {}
 
const updateFilter = { cancelled: true };
filterProposals(updateFilter);
// proposals variable in the hook will be refetched updated
 
// Sorting
console.log('current ordering', ordering);
// {orderBy: 'createdAt', orderDirection: 'desc'}
 
orderProposals({
    orderBy: 'createdAt', 
    orderDirection: 'desc',
  });
  
 
// proposals variable in the hook will be refetched updated
 
//Getting the next page of data
console.log('does it have another page?', hasNextPage);
// true
 
fetchNextPage();
// proposal variable will have the next page of proposals added to it