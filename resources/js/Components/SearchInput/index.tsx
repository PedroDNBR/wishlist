import { Control, FieldValues, useController } from 'react-hook-form';
import { Container, Error, Input } from '../Input/style';

interface SearchInputControlledProps extends React.InputHTMLAttributes<HTMLInputElement>  {
	control: Control<FieldValues, object>;
	name: string;
	max?: number;
}

export function SearchInputControlled({ type, name, max, control, ...rest }: SearchInputControlledProps) {
	const { field, fieldState } = useController({ name, control });
	const error = fieldState.error?.message;

	return (
		<div>
			<Container isError={!!error}>
				<Input
					{...(field || {})}
					value={field.value ?? ''}
					type={type}
					name={name}
					maxLength={max}
					{...rest}
				/>
			</Container>
			<Error>{error}</Error>
		</div>
	);
}