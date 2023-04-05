import React, { Component, ReactElement } from "react";
import InputField from "../InputField/InputField";
import { Grid, TextFieldProps } from "@mui/material";
import "./form.scss";

export interface FormValidators {
  check: any;
  message: string;
  num?: number;
}

export interface FormModel {
  field: any;
  label: string;
  placeholder?: string;
  required: boolean;
//   validators: FormValidators[];
  value: string | number;
  disabled?: boolean;
  styleClass?: string;
  responsive?: any;
  autoFocus?: any;
  variant?: any;
  size?: any;
  inputProps?: any;
  typeValue?: any;
  type?: any;
  options?: any;
  style?: any;
  className?: string;
  sx?: any;
  disablePast?: boolean;
  disableFuture?: boolean;
  multiline?: boolean;
  rows?: number | undefined | string;
  defaultValue?: any;
  dropdownData?: any
  isMulti?: boolean,
  handledeleteImage?: (id: number) => void
}

export interface FormDataModel {
  [key: string]: string | number | boolean;
}

interface FormProps {
  isFormUpdated?: boolean;
  values: any;
  model: FormModel[];
  strings?: any
  testId?: string;
  onChange?: (
    field: string,
    value: string,
    formData: FormDataModel,
    deleted?: any
    // isFormValid: boolean
  ) => void;
  card?: any;
  hasError?: boolean;
  fieldError?: boolean;
  dropdownData?: any,
}

export default class Form extends Component<FormProps> {
  state: { formData: FormDataModel; isFormValid: boolean } = {
    formData: {},
    isFormValid: false,
  };

  componentDidMount() {
    this.prepareFormData();
  }

  componentDidUpdate(prevProps: Readonly<FormProps>) {
    const { values, strings } = this.props;
    if (
      this.props.isFormUpdated !== prevProps.isFormUpdated ||
      strings !== prevProps.strings ||
      (values && Object.keys(values).length > 0 && values !== prevProps.values)
    ) {
      this.prepareFormData();
    }
  }

  handleChange = (
    value: string,
    field: string,
    error?: { error: boolean; message: string },
    deleted?: any
  ) => {
    const formData: any = this.state.formData;
    formData[field] = value;
    if (deleted?.deletedField === field) {
      formData[field + "deleted"] = deleted?.DeletedFile;
    }
    formData[field + "Error"] = error && error.error;
    this.setState({
      formData,
      isFormValid: this.validateForm(formData),
    });
    if (this.props.onChange) {
      // const isFormValid = this.validateForm(formData);
      this.props.onChange(field, value, formData, deleted);
    }
  };

  validateForm = (formData: FormDataModel) => {
    const { model } = this.props;
    let isFormValid = true;
    model.forEach((item) => {
      if (item.required || formData[item.field + "Error"]) {
        isFormValid = isFormValid && !formData[item.field + "Error"];
      }
    });
    return isFormValid;
  };

  getFormData = () => {
    const { formData, isFormValid } = this.state;
    return { formData, isFormValid };
  };

  resetForm = () => {
    this.prepareFormData();
  };

  prepareFormData() {
    const { model, values } = this.props;
    const formData: FormDataModel = {};
    if (values && Object.keys(values).length !== 0) {
      model.forEach((item) => {
        formData[item.field] =
          values &&
            (values[item.field] || values[item.field] === 0) &&
            values[item.field] !== ""
            ? values[item.field]
            : "";
        if (formData[item.field] || !item.required) {
          formData[item.field + "Error"] = values && values[item.field] && values[item.field && item.field !== ''] && item.required ? true : false;
        } else {
          formData[item.field + 'Error'] =
            values && values[item.field] && values[item.field && item.field !== ''] && item.required ? false : true;
        }
      });
      this.setState({ formData, isFormValid: this.validateForm(formData) });
    } else {
      model.forEach((item) => {
        formData[item.field] =
          values && values[item.field] ? values[item.field] : "";
        formData[item.field + "Error"] = item.required;
      });

      this.setState({ formData, isFormValid: this.validateForm(formData) });
    }
  }

  renderFormFields() {
    const { model, hasError, dropdownData } = this.props;
    const { formData } = this.state;
    const arrayOfFields: ReactElement[] = [];
    model.forEach((item, key) => {
      switch (item.type) {
        case "text":
          arrayOfFields.push(
            <Grid
              key={key}
              {...item.responsive}
              item
              className={"form-group " + item.styleClass}
            >
              <InputField
                disabled={item.disabled || false}
                autoFocus={item.autoFocus || false}
                variant={item.variant}
                size={item.size}
                inputProps={item.inputProps || {}}
                hasError={hasError || false}
                field={item.field}
                multiline={item.multiline}
                rows={item.rows}
                inputValue={
                  formData[item.field] || formData[item.field] === 0
                    ? (formData[item.field] as string)
                    : ""
                }
                style={item.style}
                typeValue={item.typeValue || ""}
                label={item.label || ""}
                fieldError={
                  item.field
                    ? (formData[item.field + "Error"] as boolean)
                    : false
                }
                // validators={item.validators}
                className={item.className}
                textChange={this.handleChange}
                sx={item.sx}
              />
            </Grid>
          );
          break;
        default:
          break;
      }
    });

    return arrayOfFields;
  }

  render() {
    return <>{this.renderFormFields()}</>;
  }
}
