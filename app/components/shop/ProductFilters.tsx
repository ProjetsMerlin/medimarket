import { isCategoryFilter, isSortKey, sortLabels } from "@/app/lib/filters";
import { categories, sortKeys, type Filters } from "@/app/types/shop";

type ProductFiltersProps = {
  filters: Filters;
  onChange: (filters: Filters) => void;
};

const selectClass = "mt-1 rounded border border-neutral-300 px-3 py-2";

export default function ProductFilters({
  filters,
  onChange,
}: ProductFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <div>
        <label htmlFor="category-filter" className="block text-sm font-medium">
          Catégorie
        </label>
        <select
          id="category-filter"
          value={filters.category}
          onChange={(event) => {
            const value = event.target.value;

            if (isCategoryFilter(value)) {
              onChange({ ...filters, category: value });
            }
          }}
          className={selectClass}
        >
          <option value="all">Toutes</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="sort-filter" className="block text-sm font-medium">
          Trier par
        </label>
        <select
          id="sort-filter"
          value={filters.sort}
          onChange={(event) => {
            const value = event.target.value;

            if (isSortKey(value)) {
              onChange({ ...filters, sort: value });
            }
          }}
          className={selectClass}
        >
          {sortKeys.map((key) => (
            <option key={key} value={key}>
              {sortLabels[key]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
