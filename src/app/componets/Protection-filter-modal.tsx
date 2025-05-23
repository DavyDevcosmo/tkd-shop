import { Dropdown, DropdownItem } from "flowbite-react";


const PROTECTION_SUBFILTERS = [
    { key: "ARM_PROTECTOR", label: "Protetor de Braço" },
    { key: "HEAD_PROTECTOR", label: "Protetor de Cabeça" },
    { key: "SHIN_PROTECTOR", label: "Protetor de Canela" },
    { key: "TORSO_PROTECTOR", label: "Protetor de Tronco" },
    { key: "GENITAL_PROTECTOR", label: "Protetor Genital" },
    { key: "MOUTH_PROTECTOR", label: "Protetor Bucal" },
    { key: "FOOT_PROTECTOR", label: "Protetor de Pé" },
];

export function ProtectionFilterModal({ onSelect }: { onSelect?: (key: string) => void }) {
    return (
        <Dropdown label="Proteções" inline>
            {PROTECTION_SUBFILTERS.map((item) => (
                <DropdownItem
                    key={item.key}
                    onClick={() => onSelect && onSelect(item.key)}
                >
                    {item.label}
                </DropdownItem>
            ))}
        </Dropdown>
    );
}