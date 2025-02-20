import { createContext } from "react";

/**
 * Context for unit settings
 * 
 * Provides a unit (metric or imperial) and a function to set it
 * 
 * @interface UnitContextType
 */

interface UnitContextType {
  unit: "metric" | "imperial";
  setUnit: (unit: "metric" | "imperial") => void;
}

export const UnitContext = createContext<UnitContextType>({
  unit: "metric",
  setUnit: () => {},
});
