import React from 'react';
import { Input, Form } from 'antd';
import { useFormContext, Controller } from 'react-hook-form';

interface PasswordInputProps {
  name: string;
  label: string;
  placeholder?: string;
}

export function PasswordInput({ name, label, placeholder }: PasswordInputProps) {
  const { control } = useFormContext();

  return (
    <Form.Item label={label} name={name}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input.Password {...field} placeholder={placeholder} />}
      />
    </Form.Item>
  );
}
