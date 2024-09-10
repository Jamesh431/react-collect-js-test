import { Dispatch, SetStateAction } from "react";

export function handleObjSetState<T>(
  key: string,
  value: any,
  setState: Dispatch<SetStateAction<T>>
): void {
  setState((prev: T) => ({ ...prev, [key]: value }));
}
