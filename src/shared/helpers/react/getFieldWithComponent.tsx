import React from 'react';
import { Field, FieldProps as RFFieldProps } from 'react-final-form';
// eslint-disable-next-line import/no-unresolved
import { MergeRight } from '_helpers';


type BaseWrappedFieldProps = {
  value?: any;
  onChange?: any;
};

// keys for pick props from RFFieldProps, Omit dont work because RFFieldProps have index signature
type RFFieldPropKey =
  | 'allowNull' | 'format' | 'formatOnBlur' | 'parse' | 'name'
  | 'isEqual' | 'subscription' | 'validate' | 'value';

function getFieldWithComponent<P extends BaseWrappedFieldProps>(
  Component: React.ComponentType<P>,
) {
  type OwnProps = Omit<P, keyof BaseWrappedFieldProps>;
  type FieldProps = Pick<RFFieldProps<any>, RFFieldPropKey>;
  type ResultProps = MergeRight<OwnProps, FieldProps>;

  const result: React.StatelessComponent<ResultProps> = (props: ResultProps) => (
    <Field {...props}>
      {prs => (
        <Component {...prs} {...prs.input} />
      )}
    </Field>
  );

  result.displayName = `FieldWithComponent(${Component.displayName || Component.name || 'Component'})`;
  return result;
}

export { getFieldWithComponent };