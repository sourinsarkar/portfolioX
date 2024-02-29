import { useState } from "react";
import { VisibilityContext } from './VisibilityContext';

export const VisibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <VisibilityContext.Provider value={{ isVisible, toggleVisibility }}>
      {children}
    </VisibilityContext.Provider>
  );
};