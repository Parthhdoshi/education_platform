"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
// import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from "recoil";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <SessionProvider> */}
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <RecoilRoot>{children}</RecoilRoot>
        </ThemeProvider>
      {/* </SessionProvider> */}
    </>
  );
};
