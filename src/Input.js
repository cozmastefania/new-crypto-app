import React, { useMemo, useCallback } from "react";

const Input = React.memo(({ value, onChange, ...props }) => {
  const onChangeHandler = useCallback(
    (event) => {
      const { value: v } = event.target;
      onChange(v, event);
    },
    [onChange]
  );

  const changedValue = useMemo(() => value, [value]);

  return (
    <div className="mt-1 relative rounded-md shadow-md">
      <input
        className="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
        {...props}
        value={changedValue}
        onChange={onChangeHandler}
      ></input>
    </div>
  );
});

export default Input;
