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
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700"></div>
    </div>
  );
};
