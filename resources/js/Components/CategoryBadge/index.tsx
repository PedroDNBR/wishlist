import { Category as CategoryInterface } from '@/Types/Category';
import { Inertia } from '@inertiajs/inertia';
import { BadgeBall, CategoryBadge, CategoryName, CrossIcon, DeleteButton } from './style';

interface CategoryBadgeProps{
	category: CategoryInterface;
  canDelete?: boolean;
  onDelete?: ((id: number | undefined) => void) | null;
}

export function Category({ category, canDelete = false, onDelete = null }: CategoryBadgeProps) {
  async function deleteCategory(event: React.MouseEvent, id: number|undefined) {
    event.stopPropagation();
    if (onDelete) return onDelete(id);

    await Inertia.delete(`/categories/${id}`);
  }

  return (
    <CategoryBadge color={category.color}>
      <BadgeBall color={category.color} />
      <CategoryName>
        {category.name}
      </CategoryName>
      {canDelete && (
        <DeleteButton onClick={(e) => deleteCategory(e, category.id)}>
          <CrossIcon />
        </DeleteButton>
      )}
    </CategoryBadge>
  );
}
