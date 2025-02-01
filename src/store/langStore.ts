// store/langStore.ts
"use client";
import { create } from "zustand";

type LangState = {
    lang: string;
    setLang: (lang: string) => void;
};

export const useLangStore = create<LangState>((set) => ({
    lang: "ru",
    setLang: (lang: string) => set({ lang }),
}));
