import React from "react";

Object.size = function(obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

String.toCamelCase = function(str) {
  return str
    .replace(/\s(.)/g, function($1) {
      return $1.toUpperCase();
    })
    .replace(/\s/g, "")
    .replace(/^(.)/, function($1) {
      return $1.toLowerCase();
    });
};

String.capitalize = function(str) {
  const finished = str.charAt(0).toUpperCase() + str.substr(1);
  return finished;
};

String.camelCaseToCapitalisedAndSpaced = function(str) {
  const camel = str;
  const spaced = camel.replace(/([A-Z])/g, function(g) {
    return " " + g[0].toUpperCase();
  });
  const finished = String.capitalize(spaced);
  return finished;
};

function inputBuilder(array, obj, name) {
  return array.map((item, i) => (
    <div key={i}>
      <label htmlFor={String.toCamelCase(name) + String.capitalize(item[0])}>
        {String.camelCaseToCapitalisedAndSpaced(item[0])}
      </label>
      <input
        id={String.toCamelCase(name) + String.capitalize(item[0])}
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
