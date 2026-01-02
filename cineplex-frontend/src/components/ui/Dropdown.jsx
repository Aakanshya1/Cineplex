import { MenuButton,MenuItem,MenuItems,Menu } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

function Dropdown({ label = "Options", items = [], onSelect }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="flex items-center gap-2 rounded-md bg-white/10  w-40 py-2 px-3 text-sm font-semibold text-white hover:bg-white/20 transition justify-between ">
        
        <div>{label}</div>
        <div><ChevronDown size={18} /></div>
        
      </MenuButton>

      <MenuItems className="absolute  origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black/20 focus:outline-none">
        <div className="py-1">
          {items.map((item, idx) => (
            <MenuItem key={idx}>
              {({ active }) => (
                <button
                  onClick={() => onSelect(item)}
                  className={`w-full text-left px-4 py-2 text-sm transition ${
                    active ? "bg-white/10 text-white" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}

export default Dropdown;
