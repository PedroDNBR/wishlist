import { useState } from 'react';
import { Button } from './style';

export function ButtonComponent({ name }) {
	return (
		<Button type="submit">{name}</Button>
	);
}
