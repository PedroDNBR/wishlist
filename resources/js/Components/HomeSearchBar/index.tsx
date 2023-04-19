import { Category } from "@/Types/Category";
import { router } from '@inertiajs/react';
import { useEffect, useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { SearchInputControlled } from "../SearchInput";
import { Select } from "../Select/style";
import { colorStyles, Content, Portal, SearchButtonMobile, SearchHeader, Root } from "./style";
import { useTranslation } from "react-i18next";
import '@/i18n';
import { FaFilter } from "react-icons/fa";
import useWindowDimensions from "@/Hooks/useWindowDimensions";
import { User } from "@/Types/User";

interface SearchProps {
  categories: Category[];
  request?: {
    filter?: {
      categories?: string[];
      name?: string;
    },
    sort?: string;
  };
  public_user?: User;
}

export function HomeSearchBar({ categories = [], request, public_user }: SearchProps) {
  const {
    control,
    handleSubmit,
    setError,
  } = useForm();

  const { t } = useTranslation();

  const [sort, setSort] = useState('');
  const [categoriesId, setCategoriesId] = useState([]); 
  const { height, width } = useWindowDimensions();

  const search = useWatch({
    control,
    name: "search",
  });

  useEffect(() => {
    return router.get(!public_user ? '/wishes' : '/wishes/' + public_user.username, {
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

  const menuOptions = (
    <>
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
    </>
  );

  function menu() {
    if(width > 1024) {
      return <>
        <SearchHeader>
          {menuOptions}
        </SearchHeader>
      </>
    } else {
      return <>
        <Root>
          <SearchButtonMobile><FaFilter /></SearchButtonMobile>
          <Portal>
            <Content side="bottom" align="center">
              {menuOptions}
            </Content>
          </Portal>
        </Root>
      </>
    }
  }

  return (
    <>
      {menu()}
    </>
  )
}