import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import PageRoutes from "./PageRoutes";

export default function App() {
  return (
    <>
      <PageRoutes></PageRoutes>
    </>
  );
}
