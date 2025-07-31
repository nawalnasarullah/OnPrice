import { Listbox } from "@headlessui/react";
import { useState } from "react";

const brands = ["Apple", "Samsung", "Sony", "Other", "Select a brand", "Google", "Microsoft", "LG", "Dell", "HP"];

export default function BrandDropdown() {
  const [selectedBrand, setSelectedBrand] = useState(brands[0]);

  return (
    <div className="w-72">
      <Listbox value={selectedBrand} onChange={setSelectedBrand}>
        <div className="relative mt-1">
          <Listbox.Button className="w-full font-[Nunito] cursor-pointer rounded-lg bg-white border border-[var(--p3Maroon)] py-3 px-4 text-left text-black focus:outline-none focus:ring-1 focus:ring-[var(--p4DarkMaroon)]">
            {selectedBrand}
          </Listbox.Button>

          <Listbox.Options
            className="absolute mt-1 w-full font-[Nunito] rounded-md bg-white shadow-lg max-h-28 overflow-auto z-50 border border-[var(--p3Maroon)]"
          >
            {brands.map((brand, index) => (
              <Listbox.Option
                key={index}
                value={brand}
                className={({ active }) =>
                  `cursor-pointer select-none px-4 py-2 rounded-lg ${
                    active ? "bg-[var(--p2LPink)] text-[var(--p4DarkMaroon)]" : "text-black"
                  }`
                }
              >
                {brand}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
