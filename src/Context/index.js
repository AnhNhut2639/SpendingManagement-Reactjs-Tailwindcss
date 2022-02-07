import { useState, createContext } from "react";

const spendingContext = createContext();
// use to appear detail spending

function SpendingProvider({ children }) {
  const [isHidden, setIsHidden] = useState(false);
  const [detail, setDetail] = useState([]);

  const handleHidden = () => {
    setIsHidden(!isHidden);
  };

  const value = {
    isHidden,
    handleHidden,
    detail,
    setDetail,
  };
  return (
    <spendingContext.Provider value={value}>
      {children}
    </spendingContext.Provider>
  );
}

export { SpendingProvider, spendingContext };