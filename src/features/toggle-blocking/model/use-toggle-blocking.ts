import {
  useAccountQuery,
  useUpdateAccountMutstion,
} from "@/entities/account/queries";

export function useToggleBlocking() {
  const accountQuery = useAccountQuery();
  const updateAccountMutation = useUpdateAccountMutstion();

  const toggleBlocking = () => {
    if (accountQuery.data) {
      updateAccountMutation.mutate({
        isBlockingEnabled: !accountQuery.data?.isBlockingEnabled,
      });
    }
  };

  return {
    isLoading: updateAccountMutation.isLoading,
    isReady: accountQuery.isSuccess,
    toggleBlocking,
    isBlockingEnabled: accountQuery.data?.isBlockingEnabled ?? false,
  };
}
