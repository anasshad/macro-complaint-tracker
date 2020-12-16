import React from "react";
import { Formik, FormikHelpers, Form, Field } from "formik";

interface MCTFormProps {
  data: any;
  item: string;
  onChange: (x: FormValues) => void;
}

interface FormValues {}

const MCTForm: React.FC<MCTFormProps> = ({ data, item, onChange }) => {
  const initialValues: FormValues = {};
  return (
    <div className="w-1/3 px-5">
      <h2 className="py-5 text-2xl font-bold">{item}</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          onChange(values);
          actions.resetForm({});
        }}
      >
        {({ values }) => (
          <Form>
            <div className="p-4">
              <label className="block" htmlFor={item + " calories"}>
                Calories
              </label>
              <Field
                value={values[item + " calories"] || ""}
                type="number"
                id="calories"
                name={item + " calories"}
                className="bg-gray-200 text-gray-700 border rounded px-4 py-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="p-4">
              <label className="block" htmlFor="carbs">
                Carbs
              </label>
              <Field
                value={values[item + " carbs"] || ""}
                type="number"
                id="carbs"
                name={item + " carbs"}
                className="bg-gray-200 text-gray-700 border rounded px-4 py-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="p-4">
              <label className="block" htmlFor="fat">
                Fat
              </label>
              <Field
                value={values[item + " fat"] || ""}
                type="number"
                id="fat"
                name={item + " fat"}
                className="bg-gray-200 text-gray-700 border rounded px-4 py-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="p-4">
              <label className="block" htmlFor="protein">
                Protein
              </label>
              <Field
                type="number"
                value={values[item + " protein"] || ""}
                id="protein"
                name={item + " protein"}
                className="bg-gray-200 text-gray-700 border rounded px-4 py-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MCTForm;
