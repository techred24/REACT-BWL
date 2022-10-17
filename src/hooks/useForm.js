import React, { useState } from 'react'

export const useForm = ( initialForm = {} ) => {
    const [formState, setFormState] = useState( initialForm );

    const inputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]:value
        });
    }
    const resetForm = () => {
      setFormState( initialForm );
    }
  return {
    ...formState,
    formState,
    inputChange,
    resetForm
  }
}
