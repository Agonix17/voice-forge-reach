import { create } from "zustand";

interface PackageStore {
  selectedPackage: string;
  setSelectedPackage: (pkg: string) => void;
}

export const usePackageStore = create<PackageStore>((set) => ({
  selectedPackage: "",
  setSelectedPackage: (pkg) => set({ selectedPackage: pkg }),
}));
