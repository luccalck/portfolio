import React from "react";

const LoadingScreen = () => {
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="lc-loader">
        <span className="lc-loader__logo">LuccaCastilho</span>
        <div className="lc-loader__ring" />
      </div>
    </div>
  );
};

export default LoadingScreen;
