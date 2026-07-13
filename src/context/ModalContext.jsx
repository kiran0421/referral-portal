import React, { createContext, useContext, useMemo, useState } from 'react';

const ModalContext = createContext(null);


export function ModalProvider({ children }) {
  const [infoJob, setInfoJob] = useState(null);
  const [shareJob, setShareJob] = useState(null);

  const value = useMemo(
    () => ({
      infoJob,
      shareJob,
      openMoreInfo: (job) => setInfoJob(job),
      closeMoreInfo: () => setInfoJob(null),
      openShare: (job) => setShareJob(job),
      closeShare: () => setShareJob(null),
    }),
    [infoJob, shareJob]
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return ctx;
}