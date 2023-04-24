import { User } from "@/Types/User"

export interface MenuProps {
  user?: User;
  logout: () => void;
}