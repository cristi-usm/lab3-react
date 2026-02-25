import { useState } from "react";

export function useRouter(initialRoute = "home") {
  const [currentRoute, setCurrentRoute] = useState(initialRoute);

  function navigate(route) {
    setCurrentRoute(route);
  }

  return { currentRoute, navigate };
}
