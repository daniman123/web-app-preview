import Page from "@/app/page";
import React from "react";
import { IPrimaryLayout } from "./PrimaryLayout";

const base: IPrimaryLayout = {
  children: React.createElement(Page),
};

export const mockPrimaryLayoutProps = {
  base,
};
