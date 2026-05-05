export interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  price: number;
  priceUnit: "sale" | "rent";
  rentPeriod?: "month" | "week" | "year";
  type: "house" | "apartment" | "condo" | "villa" | "penthouse" | "commercial";
  status: "for-sale" | "for-rent" | "sold" | "featured";
  bedrooms: number;
  bathrooms: number;
  area: number;
  areaUnit: "sqft" | "sqm";
  images: string[];
  description: string;
  features: string[];
  agent: Agent;
  yearBuilt: number;
  garage: number;
  isFeatured: boolean;
  isNew: boolean;
  rating: number;
  views: number;
  createdAt: string;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  avatar: string;
  phone: string;
  email: string;
  rating: number;
  totalSales: number;
  totalListings: number;
  experience: number;
  bio: string;
  specialties: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  date: string;
  propertyType: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export type PropertyFilter = {
  type?: string;
  status?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  minArea?: number;
  maxArea?: number;
  city?: string;
  searchQuery?: string;
};

export type SortOption =
  | "price-asc"
  | "price-desc"
  | "newest"
  | "oldest"
  | "popular";
