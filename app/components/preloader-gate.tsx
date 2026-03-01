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
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950 text-white">
          <div className="preloader-orb preloader-orb-one" />
          <div className="preloader-orb preloader-orb-two" />
          <div className="preloader-grid" />

          <div className="relative z-10 grid h-full place-items-center px-6">
            <div className="flex w-full max-w-sm flex-col items-center gap-6">
              <div className="preloader-logo-wrap">
                <div className="preloader-logo-glow" />
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 text-3xl font-bold shadow-2xl">
                  JP
                </div>
              </div>
              <p className="text-xs font-semibold tracking-[0.35em] text-cyan-200">
                JOBPLACE PLATFORM
              </p>
              <p className="text-center text-sm text-slate-300">
                Matching candidates with opportunity
              </p>
              <div className="preloader-progress">
                <div className="preloader-progress-bar" />
              </div>
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
        </div>
      )}
      {children}
    </>
  );
}
