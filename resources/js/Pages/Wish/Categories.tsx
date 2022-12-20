import { Layout } from "@/Base/Layout";
import { useForm, useWatch } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { InputControlled } from "@/Components/Input";
import { Inertia, RequestPayload } from "@inertiajs/inertia";
import { CategoryForm } from "@/Components/CategoryForm";
import { CategoryFormLayout, CategoryLayout, CategoryListingContainer, SearchCategoryForm } from "@/Components/CategoryForm/styles";
import { EditCategory } from "@/Components/EditCategory";
import { useFormErrors } from "@/Hooks/useFormErrors";
import * as Dialog from '@radix-ui/react-dialog';
import { Category } from "@/Components/CategoryBadge";
import axios from "axios";
import { Category as CategoryInterface } from "@/Types/Category";

interface CategoryProps {
  errors: Record<string, string>;
  categories: CategoryInterface[];
}

export default function Categories({ errors: apiErrors, categories }: CategoryProps) {
  const createForm = useForm(); EditCategory
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

    handleErrors();
  }, [apiErrors, isEditing])

  async function create(data: CategoryInterface) {
    await Inertia.post('/categories', data as unknown as RequestPayload);
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
            <CategoryForm form={createForm} onSubmit={create} buttonName='Create' />
          </CategoryFormLayout>
          <SearchCategoryForm>
            <InputControlled control={control} label="Search" type="text" name="search" max={12} />
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
                <EditCategory closeModal={closeModal} buttonName='Update' category={editCategory} setIsEditing={setIsEditing} isEditing={isEditing} errors={apiErrors} />
              </Dialog.Portal>
            </Dialog.Root>
          </CategoryListingContainer>
        </CategoryLayout>
      </Layout>
    </>
  )
}
