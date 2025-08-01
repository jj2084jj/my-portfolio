"use client";

import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
