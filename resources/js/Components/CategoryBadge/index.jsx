import { useState } from 'react';

export function CategoryBadge({ name }) {
  return (
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
  );
}
