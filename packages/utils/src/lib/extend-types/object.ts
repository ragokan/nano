import { isNotNull } from "../types";

export function merge<T>(oldObject: T, newObject: Partial<T>, base = {}): T {
  return Object.assign(base, oldObject, newObject);
}

export function objectIncludes<T extends object, K extends keyof T>(
  obj: T,
  key: K
): obj is T & Record<K, NonNullable<T[K]>> {
  return isNotNull(obj[key]);
}

export function objectKeys<T extends object>(obj: T): Array<keyof T> {
  return Object.keys(obj) as Array<keyof T>;
}
