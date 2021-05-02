import { createContext, SetStateAction } from "react";

interface PageOffsetContextType {
  offset: number;
  setOffset: React.Dispatch<SetStateAction<number>>;
}

export const PageOffsetContext = createContext<PageOffsetContextType>(
  {} as PageOffsetContextType
);
