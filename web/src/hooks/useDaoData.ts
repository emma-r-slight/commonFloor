import { useDaoData } from '@daohaus/moloch-v3-hooks/hooks';
 
const { dao, refetch } = useDaoData({
  daoChain: '0xaa36a7',
  daoId: '0x0a17997f3fd8bffa661ed6efa71e04bb29202853',
});
 
const someAction = () => {
  refetch();
};