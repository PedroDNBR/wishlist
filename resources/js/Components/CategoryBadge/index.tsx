import { Category as CategoryInterface } from '@/Types/Category';
import { router } from '@inertiajs/react';
import { BadgeBall, CategoryBadge, CategoryName, CrossIcon, DeleteButton } from './style';
import Swal from 'sweetalert2';

interface CategoryBadgeProps{
	category: CategoryInterface;
  canDelete?: boolean;
  onDelete?: ((id: number | undefined) => void) | null;
}

export function Category({ category, canDelete = false, onDelete = null }: CategoryBadgeProps) {

  async function deleteCategory(event: React.MouseEvent, id: number|undefined) {
    event.stopPropagation();
    Swal.fire({
      title: 'Deseja apagar esta categoria?',
      text: "Você não poderá reverter esta opção!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (onDelete) return onDelete(id);
        await router.delete(`/categories/${id}`);
        Swal.fire(
          'Concluido!',
          'Categoria deletada com sucesso.',
          'success'
        )
      }
    })
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
