import { createContext, SetStateAction } from "react";

interface TaskPerPageContextType {
  limit: number;
  setLimit: React.Dispatch<SetStateAction<number>>;
}

export const TaskPerPageContext = createContext<TaskPerPageContextType>(
  {} as TaskPerPageContextType
);
