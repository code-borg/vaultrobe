import {
  Sparkles,
  Eraser,
  Crop,
  Wand2,
  LayoutGrid,
  CalendarDays,
  Shirt,
  History,
  BarChart3,
  Mic,
  Fingerprint,
  Users,
  Cloud,
  CreditCard,
  CloudSun,
  LogIn,
  Camera,
  Layers,
  Home,
  Settings,
  Shield,
  ShieldOff,
  EyeOff,
  Palette,
  Upload,
  ThumbsDown,
  Scale,
  Smartphone,
  PersonStanding,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Eraser,
  Crop,
  Wand2,
  LayoutGrid,
  CalendarDays,
  Shirt,
  History,
  BarChart3,
  Mic,
  Fingerprint,
  Users,
  Cloud,
  CreditCard,
  CloudSun,
  LogIn,
  Camera,
  Layers,
  Home,
  Settings,
  Shield,
  ShieldOff,
  EyeOff,
  Palette,
  Upload,
  ThumbsDown,
  Scale,
  Smartphone,
  PersonStanding,
};

interface FeatureIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function FeatureIcon({
  name,
  className = "text-lux-gold",
  size = 24,
}: FeatureIconProps) {
  const Icon = iconMap[name] ?? Sparkles;
  return <Icon className={className} size={size} strokeWidth={1.5} />;
}
