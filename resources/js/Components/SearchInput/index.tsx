import { Control, FieldValues, useController } from 'react-hook-form';
import { Error } from '../Input/style';
import { Input, Container, SearchIcon } from './style';

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
				<SearchIcon />
			</Container>
			{/* <Error>{error}</Error> */}
		</div>
	);
}