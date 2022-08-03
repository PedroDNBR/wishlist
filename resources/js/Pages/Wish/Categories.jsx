import { Layout } from "@/Base/Layout";
import { useForm } from "react-hook-form";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { InputControlled } from "@/Components/Input";
import { Inertia } from "@inertiajs/inertia";
import { BadgeBall, CategoryBadge, CrossIcon, DeleteButton } from "@/Components/ProductCard/style";
import { CategoryForm } from "@/Components/CategoryForm";
import { CategoryFormLayout, CategoryLayout, CategoryListingContainer, SearchCategoryForm } from "@/Components/CategoryForm/styles";
import { EditCategory } from "@/Components/EditCategory";
import { useFormErrors } from "@/Hooks/useFormErrors";
import * as Dialog from '@radix-ui/react-dialog';

export default function Categories({ errors: apiErrors, categories }) {
  const createForm = useForm(); EditCategory
  const [isEditing, setIsEditing] = useState(false);
  const [editCategory, setEditCategory] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const {
    control,
    setError,
    reset,
  } = createForm;

  const { handleErrors } = useFormErrors(apiErrors, setError, false);

  useEffect(() => {
    if (isEditing || !apiErrors) return;

    handleErrors();
  }, [apiErrors, isEditing])

  async function create(data) {
    await Inertia.post('/categories', data);
  }

  async function deleteCategory(id) {
    await Inertia.delete(`/categories/${id}`);
  }

  function closeModal() {
    setOpenModal(false);
  }

  return (
    <>
      <Layout>
        <CategoryLayout>
          <CategoryFormLayout>
            <CategoryForm form={createForm} onSubmit={create} buttonName='Create' />
          </CategoryFormLayout>
          <SearchCategoryForm>
            <InputControlled control={control} label="Search" type="text" name="search" max='12' />
          </SearchCategoryForm>
          <CategoryListingContainer>
            <Dialog.Root open={openModal}>
              {categories.map((category) => {
                return (
                  <Fragment key={category.id}>
                    <CategoryBadge color={category.color}>
                      <BadgeBall color={category.color} />
                      <Dialog.Trigger onClick={() => {
                        setEditCategory(category);
                        setOpenModal(true);
                      }}>
                        {category.name}
                      </Dialog.Trigger>
                      <DeleteButton onClick={() => deleteCategory(category.id)}>
                        <CrossIcon />
                      </DeleteButton>
                    </CategoryBadge>
                  </Fragment>
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
