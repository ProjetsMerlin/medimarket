import Button from "@/app/components/ui/ButtonShop";

type QuantitySelectorProps = {
  value: number;
  onChange: (value: number) => void;
  max: number;
  min?: number;
  label: string;
};

export default function QuantitySelector({
  value,
  onChange,
  max,
  min = 1,
  label,
}: QuantitySelectorProps) {
  return (
    <div role="group" aria-label={label} className="flex items-center gap-2">
      <Button
        variant="secondary"
        aria-label="Diminuer la quantité"
        disabled={value <= min}
        onClick={() => onChange(value - 1)}
      >
        −
      </Button>
      <output aria-live="polite" className="w-8 text-center tabular-nums">
        {value}
      </output>
      <Button
        variant="secondary"
        aria-label="Augmenter la quantité"
        disabled={value >= max}
        onClick={() => onChange(value + 1)}
      >
        +
      </Button>
    </div>
  );
}
