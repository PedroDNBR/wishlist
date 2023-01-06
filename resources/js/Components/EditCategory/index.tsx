import { useFormErrors } from "@/Hooks/useFormErrors";
import { Category } from "@/Types/Category";
import { Inertia, RequestPayload } from "@inertiajs/inertia";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { CategoryForm } from "../CategoryForm";
import { Modal } from "../Modal";
import { CloseModal } from "../OpenImageModal/styles";

interface EditCategoryProps {
  errors: Record<string, string>;
  setIsEditing: (open: boolean) => void;
  isEditing: boolean;
  category: Category | null;
  buttonName: string;
  closeModal: () => void;
}

export function EditCategory({ errors, setIsEditing, isEditing, category, buttonName, closeModal }: EditCategoryProps) {
  const editForm = useForm();
  const { setError } = editForm;

  const { handleErrors } = useFormErrors({errors, setError, enabled: false});

  useEffect(() => {
    if (!isEditing && !errors) return;

    handleErrors();
  }, [errors, isEditing])

  function handleOpenChange(open: boolean) {
    setIsEditing(open);
  }

  async function update(data: Category, id: number | undefined) {
    try {
      await Inertia.put(`/categories/${id}`, data as unknown as RequestPayload);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Modal closeModal={closeModal} rootProps={{
      onOpenChange: handleOpenChange
    }}>
      <CloseModal onClick={closeModal}>
        <AiOutlineClose />
      </CloseModal>
      <CategoryForm closeModal={closeModal} buttonName={buttonName} category={category ?? undefined} form={editForm} onSubmit={update} />
    </Modal>
  );
}