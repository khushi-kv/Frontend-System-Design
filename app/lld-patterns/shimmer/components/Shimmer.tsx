import React from "react";
interface ShimmerProps {
  width: string;
  height: string;
  className: string;
}
export const Shimmer: React.FC<ShimmerProps> = ({
  width = "100%",
  height = "16px",
  className = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden bg-gray-700 rounded ${className}`}
      style={{ width, height }}
    >
      <div className="absolute inset-0 animate-shimmer bg-gradient-to-r
from-transparent via-white/20 to-transparent"></div>
    </div>
  );
};
