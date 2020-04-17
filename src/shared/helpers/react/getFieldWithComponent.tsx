import React from 'react';
import { Field } from 'react-final-form';
// eslint-disable-next-line import/no-unresolved


type BaseWrappedFieldProps = {
  value?: any;
  onChange?: any;
};

function getFieldWithComponent<P extends BaseWrappedFieldProps>(
  Component: React.ComponentType<P>,
) {

  const result: React.StatelessComponent<any> = (props: any) => (
    <Field {...props}>
      {prs => (
        <Component {...prs as any } {...prs.input} />
      )}
    </Field>
  );

  result.displayName = `FieldWithComponent(${Component.displayName || Component.name || 'Component'})`;
  return result;
}

export { getFieldWithComponent };