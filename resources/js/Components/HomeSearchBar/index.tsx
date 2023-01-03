import { Category } from "@/Types/Category";
import { Inertia } from "@inertiajs/inertia";
import { request } from "http";
import { t } from "i18next";
import { readableColor } from "polished";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { SearchInputControlled } from "../SearchInput";
import { Select } from "../Select/style";
import { colorStyles, SearchHeader } from "./style";
import { useTranslation } from "react-i18next";
import '@/i18n';

interface SearchProps {
  categories: Category[];
  request?: {
    filter?: {
      categories?: string[];
      name?: string;
    },
    sort?: string;
  };
}

export function HomeSearchBar({ categories = [], request}: SearchProps) {
  const {
    control,
    handleSubmit,
    setError,
  } = useForm();

  const { t } = useTranslation();

  const [sort, setSort] = useState('');
  const [categoriesId, setCategoriesId] = useState([]); 

  const search = useWatch({
    control,
    name: "search",
  });

  useEffect(() => {
    return Inertia.get('/wishes', {
      sort,
      "filter[name]": search,
      "filter[categories]": categoriesId
    },
    {
      preserveState: true
    });
  }, [sort, search, categoriesId])

  const filters = [
    { value: 'name', label: t('inputs:title-a-z') },
    { value: '-name', label: t('inputs:title-z-a') },
    { value: 'lowest_price', label: t('inputs:lowest-price') },
    { value: '-lowest_price', label: t('inputs:highest-price') },
  ];

  const categoriesSelect = () => {
    return categories.map(category => {
      return {
        value: category.id,
        label: category.name,
        color: category.color,
      };
    });
  }

  function getSelectedCategories() {
    const selectedCategories: any = [];
    request?.filter?.categories?.forEach((id: any) => {
      selectedCategories.push(categoriesSelect()[categoriesSelect().findIndex(item => item.value == id)]);
    });

    return selectedCategories;
  }

  return (
    <SearchHeader>
      <Select 
        classNamePrefix="react-select" 
        options={categoriesSelect()} 
        isMulti 
        placeholder={t('inputs:select-categories')} 
        defaultValue={getSelectedCategories} 
        hideSelectedOptions={false}
        onChange={(choice: any) => setCategoriesId(choice.map((x: any) => x.value))}
        styles={colorStyles}
      />
      <SearchInputControlled control={control} type="text" name="search" placeholder={t('inputs:search') ?? 'Search'} />
      <Select 
        classNamePrefix="react-select" 
        defaultValue={filters[filters.findIndex(item => item.value === request?.sort)] ?? filters[0]} 
        options={filters} 
        hideSelectedOptions={false} 
        onChange={(choice: any) => setSort(choice.value)}
      />
    </SearchHeader>
  )
}