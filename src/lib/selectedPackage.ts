import { create } from "zustand";

interface PackageStore {
  selectedPackage: string;
  selectedAddons: string[];
  setSelectedPackage: (pkg: string) => void;
  toggleAddon: (addon: string) => void;
  setAddons: (addons: string[]) => void;
  clearAll: () => void;
}

export const usePackageStore = create<PackageStore>((set) => ({
  selectedPackage: "",
  selectedAddons: [],
  setSelectedPackage: (pkg) => set({ selectedPackage: pkg }),
  toggleAddon: (addon) =>
    set((state) => ({
      selectedAddons: state.selectedAddons.includes(addon)
        ? state.selectedAddons.filter((a) => a !== addon)
        : [...state.selectedAddons, addon],
    })),
  setAddons: (addons) => set({ selectedAddons: addons }),
  clearAll: () => set({ selectedPackage: "", selectedAddons: [] }),
}));
