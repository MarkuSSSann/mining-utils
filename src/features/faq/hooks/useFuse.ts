import Fuse from "fuse.js";
import { useMemo } from "react";

//over engineering right here
type StringValueKeys<T> = {
  [K in keyof T]-?: T[K] extends string ? K : never;
}[keyof T];

type Props<T> = {
  data: T[];
  query: string;
  searchKeys: Extract<StringValueKeys<T>, string>[];
};

export default function useFuse<T>({ data, query, searchKeys }: Props<T>) {
  const fuse = useMemo(() => {
    return new Fuse(data, {
      keys: searchKeys,
      threshold: 0.4,
      ignoreLocation: true,
    });
  }, []);

  return query ? fuse.search(query) : [];
}
