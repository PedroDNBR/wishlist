import { Inertia } from '@inertiajs/inertia';
import { BadgeBall, CategoryBadge, CrossIcon, DeleteButton } from './style';

export function Category({ category, canDelete = false, onDelete = null }) {
  async function deleteCategory(event, id) {
    event.stopPropagation();
    if (onDelete) return onDelete(id);

    await Inertia.delete(`/categories/${id}`);
  }

  return (
    <CategoryBadge color={category.color}>
      <BadgeBall color={category.color} />
      {category.name}
      {canDelete && (
        <DeleteButton onClick={(e) => deleteCategory(e, category.id)}>
          <CrossIcon />
        </DeleteButton>
      )}
    </CategoryBadge>
  );
}
