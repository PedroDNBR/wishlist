import { useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { Container, Input, Label } from './style';

export function InputControlled({ label, type, name, control, error }) {
    const [isActive, setIsActive] = useState(false);
    const { field, fieldState } = useController({ name, control });

    return (
        <Container isActive={isActive} isError={!!error}>
            <Label isActive={isActive} isError={!!error}>{label}</Label>
            <Input
                {...(field || {})}
                value={field.value ?? ''}
                type={type}
                name={name}
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
            />
        </Container>
    );
}
