import type { ReactNode } from "react";

export interface ClientRootProvidersProps {
  locale: string;
  messages: Record<string, any>;
  children: ReactNode;
}
