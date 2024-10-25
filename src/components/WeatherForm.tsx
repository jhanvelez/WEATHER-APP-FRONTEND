import React, { useMemo } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

interface WeatherFormProps {
  onSearch: (city: string, country: string) => void;
}

/**
 * El componente WeatherForm permite a los usuarios ingresar una ciudad y un código de país.
 * 
 * @component
 * @param {Object} props - El objeto de propiedades.
 * @param {Function} props.onSearch - Función de devolución de llamada para manejar la acción de búsqueda.
 * 
 * @returns {JSX.Element} El componente WeatherForm renderizado.
 * 
 * @example
 * <WeatherForm onSearch={(city, country) => console.log(city, country)} />
 * 
 * @remarks
 * Este componente mantiene un estado interno para las entradas de ciudad y país, y las valida antes de invocar la devolución de llamada onSearch.
 * 
 * @typedef {Object} WeatherFormProps
 * @property {Function} onSearch - Función de devolución de llamada para manejar la acción de búsqueda.
 */
const WeatherForm: React.FC<WeatherFormProps> = ({ onSearch }) => {
  const initialValues = useMemo(() => ({
    city: '',
    country: '',
  }), []);

  const validationSchema = useMemo(() => Yup.object({
    city: Yup.string().required('La ciudad es requerida'),
    country: Yup.string().required('El código del país es requerido'),
  }), []);

  const handleSubmit = async (
    values: { city: string; country: string },
    { setSubmitting, resetForm }: FormikHelpers<{ city: string; country: string }>
  ) => {
    try {
      await onSearch(values.city, values.country);
    } catch (error) {
      console.error('Error during search:', error);
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col items-center space-y-6 p-4">
          <h2 className="text-xl font-semibold mb-4">Ingresa Ciudad y Código del País</h2>
          <div className="flex space-x-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">Ciudad</label>
              <div className="relative rounded-md shadow-sm">
                <Field
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Madrid"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <ErrorMessage name="city" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Código del país</label>
              <div className="relative rounded-md shadow-sm">
                <Field
                  type="text"
                  id="country"
                  name="country"
                  placeholder="ES"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <ErrorMessage name="country" component="p" className="text-red-500 text-sm mt-1" />
            </div>
          </div>

          <div className='pt-6'>
            <button type="submit" className="inline-flex rounded bg-primary py-2 px-3 text-sm font-medium text-white hover:bg-opacity-90" disabled={isSubmitting}>
              Presiona para buscar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default React.memo(WeatherForm);