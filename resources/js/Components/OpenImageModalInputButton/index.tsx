import { Container } from './style';
import * as Dialog from '@radix-ui/react-dialog';
import { MdFileUpload } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { OpenImageModal } from '../OpenImageModal';
import { useState } from 'react';

interface OpenImageModalInputButtonProps {
	setProductImageAndImageFile?: ((preview: string ,file?: File) => void) | null;
	setIsModalOpen: ((isActive: boolean) => void);
	handleClose: () => void;
}

export function OpenImageModalInputButton({setProductImageAndImageFile, setIsModalOpen, handleClose}: OpenImageModalInputButtonProps) {
  const { t, i18n } = useTranslation();

	return (
		<div>
			<Container onClick={() => setIsModalOpen(true)}>
				<MdFileUpload/> {t('inputs:image-upload')}
				{ setProductImageAndImageFile ? <OpenImageModal onClose={handleClose} setImageAndImageFile={setProductImageAndImageFile} /> : ''}
			</Container>
		</div>
	);
}
