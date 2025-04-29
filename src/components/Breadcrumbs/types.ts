export interface BreadcrumbItem {
  label: string;
  link?: string; // Optional link for clickable items
  icon?: React.ReactElement; // Optional icon
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
} 