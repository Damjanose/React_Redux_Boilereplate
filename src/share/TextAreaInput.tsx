import React from 'react';
import { Input, Form } from 'antd';
import { useFormContext, Controller } from 'react-hook-form';

interface TextAreaInputProps {
  name: string;
  label: string;
  placeholder?: string;
}

export function TextAreaInput({ name, label, placeholder }: TextAreaInputProps) {
  const { control } = useFormContext();

  return (
    <Form.Item label={label} name={name}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Input.TextArea {...field} placeholder={placeholder} />}
      />
    </Form.Item>
  );
}
