import React from 'react';
import { Select, Form } from 'antd';
import { useFormContext, Controller } from 'react-hook-form';

interface SelectInputProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
}

export function SelectInput({ name, label, options }: SelectInputProps) {
  const { control } = useFormContext();

  return (
    <Form.Item label={label} name={name}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select {...field} options={options} />
        )}
      />
    </Form.Item>
  );
}
