
export interface NavLinkItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon?: React.ReactNode;
}

export interface JobPosting {
  id: string;
  title: string;
  location: string;
  description: string;
  type: string; // e.g., Full-time, Part-time
}

export interface CompanyProfileData {
  [key: string]: string;
}
