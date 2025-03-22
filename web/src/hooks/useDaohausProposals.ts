// web/src/hooks/useDaohausProposals.ts
import { useDaoProposals } from '@daohaus/moloch-v3-hooks/hooks';
import { ValidNetwork } from '@daohaus/keychain-utils';

export const useDaohausProposals = (daoChain: ValidNetwork, daoId: string) => {
  const { proposals, isLoading, error } = useDaoProposals({
    daoChain,
    daoId,
  });

  return { proposals, isLoading, error };
};
