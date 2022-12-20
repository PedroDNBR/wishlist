import { Control, FieldValues, useController } from 'react-hook-form';
import { Container, Error, Input, Label } from './style';

interface InputControlledProps extends React.InputHTMLAttributes<HTMLInputElement>  {
	label: string;
	control: Control<FieldValues, object>;
	name: string;
	max?: number;
}

export function InputControlled({ label, type, name, max, control, ...rest }: InputControlledProps) {
	const { field, fieldState } = useController({ name, control });
	const error = fieldState.error?.message;

	return (
		<div>
			<Container isError={!!error}>
				<Label isError={!!error}>{label}</Label>
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
