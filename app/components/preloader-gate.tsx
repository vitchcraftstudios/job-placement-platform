"use client";

import { useEffect, useState } from "react";

type PreloaderGateProps = {
  children: React.ReactNode;
};

export default function PreloaderGate({ children }: PreloaderGateProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950 text-white">
          <div className="flex flex-col items-center gap-5">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-xl font-bold">
              JP
            </div>
            <p className="text-sm font-semibold tracking-[0.2em] text-cyan-200">
              LOADING JOBPLACE
            </p>
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 animate-bounce rounded-full bg-cyan-300"
                style={{ animationDelay: "0ms" }}
              />
              <span
                className="h-2.5 w-2.5 animate-bounce rounded-full bg-cyan-300"
                style={{ animationDelay: "120ms" }}
              />
              <span
                className="h-2.5 w-2.5 animate-bounce rounded-full bg-cyan-300"
                style={{ animationDelay: "240ms" }}
              />
            </div>
          </div>
        </div>
      )}
      {children}
    </>
  );
}
