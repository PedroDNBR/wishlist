import { useState } from 'react';
import { Control, FieldValues, useController } from 'react-hook-form';
import { Container, Error, Label } from '../Input/style';
import { EyeIcon, Input, InputWrapper } from './style';

interface InputControlledProps extends React.InputHTMLAttributes<HTMLInputElement>  {
	label: string;
	control: Control<FieldValues, object>;
	name: string;
	max?: number;
}

export function PasswordInputControlled({ label, name, max, control, ...rest }: InputControlledProps) {
	const { field, fieldState } = useController({ name, control });
	const error = fieldState.error?.message;

  const [type, setType] = useState('password');

	return (
		<div>
			<Container isError={!!error}>
				<Label isError={!!error} htmlFor={name}>{label}</Label>
        <InputWrapper>
          <Input
            {...(field || {})}
            value={field.value ?? ''}
            type={type}
            name={name}
            maxLength={max}
            {...rest}
          />
          <EyeIcon onClick={ () => type === 'password' ? setType('text') : setType('password') } changeColor={type} />
        </InputWrapper>
			</Container>
			<Error>{error}</Error>
		</div>
	);
}
