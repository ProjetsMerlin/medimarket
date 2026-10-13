"use client";

import { useEffect, useRef } from "react";
import Button from "@/app/components/ui/ButtonShop";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return (
    target.isContentEditable ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
  );
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "/" || event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }

      if (isTypingTarget(event.target)) {
        return;
      }

      event.preventDefault();
      inputRef.current?.focus();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleClear() {
    onChange("");
    inputRef.current?.focus();
  }

  return (
    <div role="search" className="flex gap-2">
      <label htmlFor="product-search" className="sr-only">
        Rechercher un produit
      </label>
      <input
        ref={inputRef}
        id="product-search"
        type="text"
        inputMode="search"
        autoComplete="off"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder='Rechercher un produit (touche "/")'
        className="w-full rounded border border-neutral-300 px-3 py-2"
      />
      {value && (
        <Button
          variant="secondary"
          aria-label="Effacer la recherche"
          onClick={handleClear}
        >
          ✕
        </Button>
      )}
    </div>
  );
}
