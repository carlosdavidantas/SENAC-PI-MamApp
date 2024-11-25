import { useEffect } from "react";
import { Redirect } from "expo-router";
import { initializeStorage } from "@/utils/crud.js";

export default function App() {
  useEffect(() => {
    initializeStorage();
  }, []);
  
  return (
    <Redirect href="/login" />
  );
}
