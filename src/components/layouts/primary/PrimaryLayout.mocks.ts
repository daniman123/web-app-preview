import Page from "@/app/(landing)/page";
import React from "react";
import { IPrimaryLayout } from "./PrimaryLayout";

const base: IPrimaryLayout = {
  children: React.createElement(Page),
};

export const mockPrimaryLayoutProps = {
  base,
};
