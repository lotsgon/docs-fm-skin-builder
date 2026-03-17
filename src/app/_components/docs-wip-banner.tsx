"use client";

import { useState, useSyncExternalStore } from "react";
import { Construction, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "fm-docs-wip-banner-dismissed";

export function DocsWipBanner() {
  const storedDismissed = useSyncExternalStore(
    () => () => {},
    () => window.localStorage.getItem(STORAGE_KEY) === "true",
    () => true, // SSR: start hidden to avoid flash
  );
  const [localDismissed, setLocalDismissed] = useState(false);
  const isDismissed = storedDismissed || localDismissed;

  if (isDismissed) return null;

  const handleDismiss = () => {
    setLocalDismissed(true);
    window.localStorage.setItem(STORAGE_KEY, "true");
  };

  return (
    <div className="sticky top-0 z-50 border-b border-blue-400 bg-blue-100 px-4 py-3 text-blue-900 dark:border-blue-600 dark:bg-blue-950 dark:text-blue-100">
      <div className="flex flex-wrap items-center gap-3 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-200 px-3 py-1 text-sm font-semibold dark:bg-blue-900">
          <Construction className="h-4 w-4" />
          Work in Progress
        </div>
        <p className="flex-1 text-sm">
          These docs are still being written. Some sections may be incomplete or
          missing.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-blue-400 text-blue-900 hover:bg-blue-200 dark:border-blue-600 dark:text-blue-100 dark:hover:bg-blue-900"
          >
            <a
              href="https://discord.gg/2gpX4GPecZ"
              target="_blank"
              rel="noreferrer"
            >
              Join Discord
            </a>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            aria-label="Dismiss work in progress banner"
            onClick={handleDismiss}
            className="hover:bg-blue-200 dark:hover:bg-blue-900"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
