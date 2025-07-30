// components/SuccessToast.tsx
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

type AlertSuccessProps = {
  message: string;
  onClose: () => void;
};

function AlertSuccess({ message, onClose }: AlertSuccessProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-20 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl bg-green-100 border border-green-300 text-green-800 shadow-lg animate-fade-in">
      <CheckCircle className="w-5 h-5 text-green-600" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}

export default AlertSuccess;
