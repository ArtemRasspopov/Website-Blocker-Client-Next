import { accountControllerGetAccount, accountControllerPatchAccount } from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const accountKey = ["account"];
export function useAccountQuery() {
  return useQuery({
    queryFn: accountControllerGetAccount,
    queryKey: accountKey,
  });
}

export function useUpdateAccountMutstion() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: accountControllerPatchAccount,
    async onSettled(){
      await queryClient.invalidateQueries(accountKey)
    }
  })
}
