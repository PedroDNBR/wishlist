import { useFormErrors } from "@/Hooks/useFormErrors";
import { Inertia } from "@inertiajs/inertia";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CategoryForm } from "../CategoryForm";
import { Modal } from "../Modal";

export function EditCategory({ errors, setIsEditing, isEditing, category, buttonName, closeModal }) {
  const editForm = useForm();
  const { setError } = editForm;

  const { handleErrors } = useFormErrors(errors, setError, false);

  useEffect(() => {
    if (!isEditing && !errors) return;

    handleErrors();
  }, [errors, isEditing])

  function handleOpenChange(open) {
    setIsEditing(open);
  }

  async function update(data, id) {
    try {
      await Inertia.put(`/categories/${id}`, data);
      return true;
    } catch (e) {
      return false;
    }
  }

  return (
    <Modal closeModal={closeModal} rootProps={{
      onOpenChange: handleOpenChange
    }}>
      <CategoryForm closeModal={closeModal} buttonName={buttonName} category={category} form={editForm} onSubmit={update} />
    </Modal>
  );
}