import { useState } from 'react';
import { Button } from './style';

interface ButtonComponentProps {
	name: string;
}

export function ButtonComponent({ name }: ButtonComponentProps) {
	return (
		<Button type="submit">{name}</Button>
	);
}
