import { Layout } from "@/Base/Layout";
import { useForm, useWatch } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { InputControlled } from "@/Components/Input";
import { router } from '@inertiajs/react';
import { CategoryForm } from "@/Components/CategoryForm";
import { CategoryFormLayout, CategoryLayout, CategoryListingContainer, SearchCategoryForm } from "@/Components/CategoryForm/styles";
import { EditCategory } from "@/Components/EditCategory";
import { useFormErrors } from "@/Hooks/useFormErrors";
import * as Dialog from '@radix-ui/react-dialog';
import { Category } from "@/Components/CategoryBadge";
import axios from "axios";
import { Category as CategoryInterface } from "@/Types/Category";
import { useTranslation } from "react-i18next";

interface CategoryProps {
  errors: Record<string, string>;
  categories: CategoryInterface[];
  forms: {
    category: 'creating' | 'editing' | null;
  }
}

export default function Categories({ errors: apiErrors, categories, forms: { category: categoryForm } }: CategoryProps) {
  const createForm = useForm(); EditCategory
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [editCategory, setEditCategory] = useState<CategoryInterface | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [listCategories, setListCategories] = useState(categories);

  const {
    control,
    setError,
    reset,
  } = createForm;

    const { handleErrors } = useFormErrors({errors: apiErrors, setError: setError, enabled: false});

  useEffect(() => {
    if (isEditing || !apiErrors) return;

  if(categoryForm == 'creating') {
    handleErrors();
  }
}, [apiErrors, isEditing])

  async function create(data: CategoryInterface) {
    await router.post('/categories', data as any);
  }

  function closeModal() {
    setOpenModal(false);
  }

  const search = useWatch({
    control,
    name: "search",
  });

  async function getSearch() {
    const newCategoryList = await axios.get(`/categories/search?search=${search}`);
    setListCategories(newCategoryList.data);
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) getSearch();
      else setListCategories(categories);
    }, 1500)

    return () => clearTimeout(delayDebounceFn)
  }, [search])

  useEffect(() => {
    if (search)
      getSearch();
    else
      setListCategories(categories);
  }, [categories]);

  return (
    <>
      <Layout>
        <CategoryLayout>
          <CategoryFormLayout>
            <CategoryForm isSent={false} form={createForm} onSubmit={create} buttonName={t('inputs:create')} errors={apiErrors} />
          </CategoryFormLayout>
          <SearchCategoryForm>
            <InputControlled control={control} label={t('inputs:search')} type="text" name="search" max={12} />
          </SearchCategoryForm>
          <CategoryListingContainer>
            <Dialog.Root open={openModal}>
              {listCategories.map((category) => {
                return (
                  <Dialog.Trigger key={category.id} onClick={() => {
                    setEditCategory(category);
                    setOpenModal(true);
                  }}>
                    <Category category={category} canDelete={true} />
                  </Dialog.Trigger>
                )
              })}
              <Dialog.Portal>
                <EditCategory closeModal={closeModal} buttonName={t('inputs:update')} category={editCategory} setIsEditing={setIsEditing} isEditing={isEditing} errors={apiErrors} categoryForm={categoryForm} />
              </Dialog.Portal>
            </Dialog.Root>
          </CategoryListingContainer>
        </CategoryLayout>
      </Layout>
    </>
  )
}
