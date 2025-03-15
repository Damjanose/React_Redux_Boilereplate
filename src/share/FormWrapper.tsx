import React from 'react';
import { FormProvider, useForm, UseFormProps } from 'react-hook-form';
import { Form } from 'antd';

interface FormWrapperProps<T> extends UseFormProps<T> {
  onSubmit: (data: T) => void;
  children: React.ReactNode;
}

export function FormWrapper<T>({ onSubmit, children, ...formOptions }: FormWrapperProps<T>) {
  const methods = useForm<T>(formOptions);

  return (
    <FormProvider {...methods}>
      <Form
        layout="vertical"
        onFinish={methods.handleSubmit(onSubmit)}
      >
        {children}
      </Form>
    </FormProvider>
  );
}
