import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ClassNameContextType {
  className: string;
  changeClassName: (newClassName: string) => void;
}

const defaultContextValue: ClassNameContextType = {
  className: '',
  changeClassName: () => {}, 
};

const ClassNameContext = createContext<ClassNameContextType>(defaultContextValue);

interface ClassNameProviderProps {
  children: ReactNode;
}


export const ClassNameProvider: React.FC<ClassNameProviderProps> = ({ children }) => {
  const [className, setClassName] = useState<string>('');

  const changeClassName = (newClassName: string) => {
    setClassName(newClassName);
  };

  return (
    <ClassNameContext.Provider value={{ className, changeClassName }}>
      {children}
    </ClassNameContext.Provider>
  );
};

// Hook pro snadný přístup k kontextu s explicitním ověřením, že kontext není undefined
export const useClassName = (): ClassNameContextType => {
  const context = useContext(ClassNameContext);
  if (context === undefined) {
    throw new Error('useClassName musí být použit uvnitř ClassNameProvider');
  }
  return context;
};
