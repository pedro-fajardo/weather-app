import { createContext } from "react";

interface UnitContextType {
  unit: "metric" | "imperial";
  setUnit: (unit: "metric" | "imperial") => void;
}

export const UnitContext = createContext<UnitContextType>({
  unit: "metric",
  setUnit: () => {},
});
