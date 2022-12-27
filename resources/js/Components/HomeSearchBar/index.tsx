import { Category } from "@/Types/Category";
import { useForm } from "react-hook-form";
import { SearchInputControlled } from "../SearchInput";
import { Select } from "../Select/style";
import { SearchHeader } from "./style";

interface SearchProps {
  categories: Category[];
}

export function HomeSearchBar({ categories = []}: SearchProps) {
  const {
    control,
    handleSubmit,
    setError,
  } = useForm();


  const filters = [
    { value: 'a-z-title', label: 'Título A-Z' },
    { value: 'z-a-title', label: 'Título Z-A' },
    { value: 'lower-price', label: 'Menor Preço' },
    { value: 'higher-price', label: 'Maior Preço' },
  ]

  const categoriesSelect = () => {
    return categories.map(category => {
      return {
        value: category.id,
        label: category.name,
      };
    });
  }

  return (
    <SearchHeader>
      <Select classNamePrefix="react-select" options={categoriesSelect()} isMulti placeholder="Selecionar categoria" hideSelectedOptions={false} />
      <SearchInputControlled control={control} type="text" name="search" />
      <Select classNamePrefix="react-select" defaultValue={filters[0]} options={filters} hideSelectedOptions={false} />
    </SearchHeader>
  )
}