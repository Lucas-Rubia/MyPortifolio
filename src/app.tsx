import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";
import { Router } from "./routes/router";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-lucas-theme">
      <Router />
      <Toaster />
    </ThemeProvider>
  );
}
