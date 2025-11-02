import { useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-white/90 flex items-center justify-center">
      {/* Circular spinner */}
      <div className="w-40 h-40 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};
