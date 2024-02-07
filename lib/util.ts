import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { isMobile } from "react-device-detect";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function isTouchDevices() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

export function isTouchScreen() {
  return isTouchDevices() || isMobile;
}
