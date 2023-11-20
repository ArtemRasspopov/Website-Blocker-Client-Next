import { useBlockListQuery } from "@/entities/block-list/queries";
import { useDebaunceValue } from "@/shared/lib/react-std";
import { useState } from "react";

export function useBlockItems() {
  const [q, setQ] = useState("");

  const blockListQuery = useBlockListQuery({ q: useDebaunceValue(q, 500) });

  const items = blockListQuery.data?.items ?? [];

  return { items, isLoading: blockListQuery.isLoading, q, setQ };
}
