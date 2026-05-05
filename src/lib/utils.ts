import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number,
  currency: string = "USD",
  compact: boolean = false
): string {
  if (compact) {
    if (price >= 1_000_000) {
      return `$${(price / 1_000_000).toFixed(1)}M`;
    }
    if (price >= 1_000) {
      return `$${(price / 1_000).toFixed(0)}K`;
    }
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatArea(area: number, unit: "sqft" | "sqm" = "sqft"): string {
  return `${area.toLocaleString()} ${unit}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + "...";
}

export function getStatusColor(
  status: string
): { bg: string; text: string; border: string } {
  switch (status) {
    case "for-sale":
      return {
        bg: "bg-emerald-50",
        text: "text-emerald-700",
        border: "border-emerald-200",
      };
    case "for-rent":
      return {
        bg: "bg-blue-50",
        text: "text-blue-700",
        border: "border-blue-200",
      };
    case "sold":
      return {
        bg: "bg-red-50",
        text: "text-red-700",
        border: "border-red-200",
      };
    case "featured":
      return {
        bg: "bg-amber-50",
        text: "text-amber-700",
        border: "border-amber-200",
      };
    default:
      return {
        bg: "bg-gray-50",
        text: "text-gray-700",
        border: "border-gray-200",
      };
  }
}

export function getTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    house: "House",
    apartment: "Apartment",
    condo: "Condo",
    villa: "Villa",
    penthouse: "Penthouse",
    commercial: "Commercial",
  };
  return labels[type] || type;
}
