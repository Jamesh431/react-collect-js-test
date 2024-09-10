export type NmiResponse = {
  nmiKey?: string;
  success: boolean;
};

declare global {
  interface Window {
    CollectJS: any;
  }
}

export type UserContextType = {
  isScriptInjected: boolean;
};
