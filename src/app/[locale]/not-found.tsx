"use client";

import React from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  const homePath = "/" + window.location.pathname.split("/")[1];

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h1>Page Not Found</h1>
      <p>Sorry, we couldn’t find the page you’re looking for.</p>
      <button onClick={() => router.push(homePath)}>Go back to Home</button>
    </div>
  );
};

export default NotFound;
