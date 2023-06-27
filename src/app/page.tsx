"use client";
import React from "react";
import { usePathname } from "next/navigation";
function app() {
  const pathname = usePathname();

  React.useEffect(() => {
    if (pathname === "/") {
      window.location.replace("/br");
    }
  }, [pathname]);

  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f5f5f5",
      }}
    >
      <span className="loader"></span>
    </div>
  );
}

export default app;
