import React from 'react';
import { Input, Form } from 'antd';
import { useFormContext, Controller } from 'react-hook-form';

interface TextInputProps {
  name: string;
  label: string;
  placeholder?: string;
}

export function TextInput({ name, label, placeholder }: TextInputProps) {
  const { control } = useFormContext();

  return (
    <Form.Item label={label} name={name}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input {...field} placeholder={placeholder} />}
      />
    </Form.Item>
  );
}
