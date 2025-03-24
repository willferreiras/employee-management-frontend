import { useState } from "react";
import { Schema } from "yup";
import { Result } from "../../protocol/protoco-result";

export const CreateForm = ({
  fields,
  validation,
}: {
  fields: (string | { [key: string]: string })[];
  validation: Schema<any>;
}) => {
  const form: {
    fields: {
      [key: string]: {
        value: any;
        setState: (value: any) => void;
        error: string | null;
        setError: (value: any) => void;
      };
    };
    validate: () => Promise<Result<unknown>>;
  } = {
    fields: {},
    validate: async () => {
      try {
        await validation.validate(
          Object.fromEntries(
            Object.entries(form.fields).map(([key, value]) => [
              key,
              value.value,
            ]),
          ),
          { abortEarly: false },
        );

        return Result.ok();
      } catch (error: any) {
        console.log("ValidationError inner", error?.inner);

        if (error?.name === "ValidationError") {
          Object.entries(form.fields).forEach(([key, value]) => {
            if (error?.inner?.some((err: any) => err?.path === key)) {
              form.fields[key].setError(
                error?.inner?.find((err: any) => err?.path === key)?.message ||
                  null,
              );
            }
          });
        }
        return Result.fail(error);
      }
    },
  };

  fields.forEach(field => {
    let key;
    let fieldValue = "";
    const fieldError = null;

    if (typeof field !== "string") {
      const fieldEntry = Object.entries(field)?.[0];
      if (fieldEntry) {
        key = fieldEntry[0];
        fieldValue = fieldEntry[1];
      }
    } else {
      key = field;
    }

    const [stateFieldValue, setStateFieldValue] = useState<string>(fieldValue);
    const [stateFieldError, setStateFieldError] = useState<string | null>(null);

    form.fields[typeof key === "string" ? key : ""] = {
      value: stateFieldValue,
      setState: setStateFieldValue,
      error: stateFieldError,
      setError: setStateFieldError,
    };
  });

  return form;
};
