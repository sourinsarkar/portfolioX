import { createContext } from "react";

interface VisibilityContextProps {
  isVisible: boolean;
  // hide: () => void;
  // show: () => void;
  toggleVisibility: () => void;
}

export const VisibilityContext = createContext<VisibilityContextProps | undefined>(undefined);