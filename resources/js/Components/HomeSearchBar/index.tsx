import { useForm } from "react-hook-form";
import { SearchInputControlled } from "../SearchInput";
import { SearchHeader } from "./style";

export function HomeSearchBar() {
  const {
    control,
    handleSubmit,
    setError,
  } = useForm();

  return (
    <SearchHeader>
      <SearchInputControlled control={control} type="text" name="search"  />
    </SearchHeader>
  )
}