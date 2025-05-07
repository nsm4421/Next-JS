import { Coverage } from "@/types/coverage";
import { create } from "zustand";

type EditingCoverage = {
  left: Coverage[];
  right: Coverage[];
};

type AppendixState = {
  coverages: EditingCoverage[];
  setCoverages: (coverages: EditingCoverage[]) => void;
  currentCoverages: EditingCoverage; // 현재 편집중인 담보 목록
  setCurrentLeft: (left: Coverage[]) => void; // 현재 편집중인 왼쪽 담보 setter
  setCurrentRight: (right: Coverage[]) => void; // 현재 편집중인 오른쪽 담보 setter
};

export const useAppendixState = create<AppendixState>((set) => ({
  coverages: [],
  setCoverages: (coverages) => set((state) => ({ ...state, coverages })),
  currentCoverages: {
    left: [],
    right: [],
  },
  setCurrentLeft: (left) =>
    set((state) => ({
      ...state,
      currentCoverages: { ...state.currentCoverages, left },
    })),
  setCurrentRight: (right) =>
    set((state) => ({
      ...state,
      currentCoverages: { ...state.currentCoverages, right },
    })),
}));
