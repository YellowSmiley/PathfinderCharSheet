import React from "react";

Object.size = function(obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

export function camelCaseToCapitalisedAndSpaced(str) {
  const camel = str;
  const spaced = camel.replace(/([A-Z])/g, function(g) {
    return " " + g[0].toUpperCase();
  });
  const finished = spaced.charAt(0).toUpperCase() + spaced.substr(1);
  return finished;
}

function inputBuilder(array, obj, name) {
  return array.map((item, i) => (
    <div key={i}>
      <label htmlFor={name + item[0]}>
        {camelCaseToCapitalisedAndSpaced(item[0])}
      </label>
      <input
        id={name + item[0]}
        value={item[1]}
        onChange={e => (obj[item[0]] = e.target.value)}
      />
    </div>
  ));
}

export const stringNoWhiteSpace = str => {
  return str.replace(/\s/g, "");
};

export function mapObjectToInputs(obj, name) {
  const inputs = inputBuilder(
    Object.entries(obj),
    obj,
    stringNoWhiteSpace(name)
  );
  return inputs;
}

export function mapArrayOfObjectsToInputs(array, name) {
  let inputs = null;
  for (let i = 0; i < array.length; i++) {
    inputs = inputBuilder(
      Object.entries(array[i]),
      array[i],
      stringNoWhiteSpace(name)
    );
  }

  return inputs;
}
