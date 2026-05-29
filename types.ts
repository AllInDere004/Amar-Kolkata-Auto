export enum AppScreen {
  SPLASH = 'splash',
  LOGIN = 'login',
  HOME_REFINED = 'home_refined',
  HOME = 'home',
  ROUTE_PLANNER = 'route_planner',
  ROUTE_PLANNER_REFINED = 'route_planner_refined',
  QUEUE = 'queue',
  SOS = 'sos',
  PROFILE = 'profile',
  ADMIN = 'admin',
  ADMIN_REFINED = 'admin_refined',
}

export interface AutoStand {
  id: string;
  name: string;
  bengaliName: string;
  route: string;
  routeTitle: string;
  distance: string;
  avgWait: string;
  autosAvailable: string;
  status: 'low' | 'high' | 'med';
  statusText: string;
  imageUrl: string;
}

export interface Report {
  id: string;
  user: string;
  avatar: string;
  time: string;
  text: string;
  isVerified: boolean;
  mins: number;
}

export interface Vehicle {
  id: string;
  route: string;
  routeDesc: string;
  status: 'on_route' | 'stalled' | 'idle';
  occupancy: number; // percentage
  speed: string;
}
