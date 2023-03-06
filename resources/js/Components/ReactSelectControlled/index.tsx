import { Control, Controller, FieldValues, useController } from 'react-hook-form';
import { colorStyles } from '../HomeSearchBar/style';
import { Container, Error, Label } from '../Input/style';
import { Select } from './style';

interface InputControlledProps  {
	label: string;
	control: Control<FieldValues, object>;
	name: string;
  placeHolder: string;
  options: any;
  setValue: any;
}

export function ReactSelectControlled({ label, name, control, options, setValue, placeHolder}: InputControlledProps) {
	const { field, fieldState } = useController({ name, control });
	const error = fieldState.error?.message;

	return (
		<div>
			<Container isError={!!error}>
				<Label isError={!!error} htmlFor={name} >{label}</Label>
        <Controller
          control={control}
          defaultValue={[]}
          name={name}
          render={({  field: { onChange, value, name, ref } }) => (
            <Select
                classNamePrefix={`react-select-${name}`} 
                options={options()} 
                placeholder={placeHolder}
                isMulti
                // onChange={(choice: any) => {setCategoriesId(choice.value);}}
                onChange={(choice: any)=> {
                  onChange(choice.value);
                  setValue(choice);
                  // setCategoriesId(choice);
              }}
                styles={colorStyles}
            />
          )}
        />
			</Container>
			<Error>{error}</Error>
		</div>
	);
}
