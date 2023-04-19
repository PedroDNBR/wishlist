import { useFormErrors } from "@/Hooks/useFormErrors";
import { Category } from "@/Types/Category";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { CategoryForm } from "../CategoryForm";
import { Modal } from "../Modal";
import { CloseModal } from "../OpenImageModal/styles";
import { router } from '@inertiajs/react';

interface EditCategoryProps {
  errors: Record<string, string>;
  setIsEditing: (open: boolean) => void;
  isEditing: boolean;
  category: Category | null;
  buttonName: string;
  closeModal: () => void;
  categoryForm: 'creating' | 'editing' | null;
}

export function EditCategory({ errors, setIsEditing, isEditing, category, buttonName, closeModal, categoryForm }: EditCategoryProps) {
  const editForm = useForm();
  const { setError } = editForm;
  const [isSent, setIsSent] = useState(false);

  const { handleErrors } = useFormErrors({errors, setError, enabled: false});

  useEffect(() => {
    if (!isEditing && !errors) return;
    if(categoryForm == 'editing') {
      handleErrors();
    }
  }, [errors, isEditing])

  function handleOpenChange(open: boolean) {
    setIsEditing(open);
  }

  async function update(data: Category, id: number | undefined) {
    await router.put(`/categories/${id}`, data as any, {
      headers: {
        'Content-Language': localStorage.getItem('i18nextLng') ?? 'en',
      },
    });
    setIsSent(true);
  }

  return (
    <Modal closeModal={closeModal} rootProps={{
      onOpenChange: handleOpenChange
    }}>
      <CloseModal onClick={closeModal}>
        <AiOutlineClose />
      </CloseModal>
      <CategoryForm isSent={isSent} setIsSent={setIsSent} closeModal={closeModal} buttonName={buttonName} category={category ?? undefined} form={editForm} onSubmit={update} errors={errors} />
    </Modal>
  );
}