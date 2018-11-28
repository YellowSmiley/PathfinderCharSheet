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

export const stringNoWhiteSpace = str => {
  return str.replace(/\s/g, "");
};

export function mapObjectToInputs(obj, name) {
  return Object.entries(obj).map((item, i) => (
    <div key={i}>
      <label
        htmlFor={
          String.toCamelCase(stringNoWhiteSpace(name)) +
          String.capitalize(item[0])
        }
      >
        {String.camelCaseToCapitalisedAndSpaced(item[0])}
      </label>
      <input
        id={
          String.toCamelCase(stringNoWhiteSpace(name)) +
          String.capitalize(item[0])
        }
        value={item[1].value}
        onChange={e => (obj[item[0]].value = e.target.value)}
      />
    </div>
    /*TODO: Add "Add to summary btn" */
  ));
}

export function mapArrayOfObjectsToInputs(array, name) {
  const inputs = array.map(
    (arrayItem, arrayIndex) =>
      Object.entries(arrayItem).map((arrayItemItem, i) =>
        arrayItemItem[0] !== "isHidden" ? (
          <div key={i}>
            <label
              htmlFor={
                String.toCamelCase(stringNoWhiteSpace(name)) +
                String.capitalize(arrayItemItem[0])
              }
            >
              {String.camelCaseToCapitalisedAndSpaced(arrayItemItem[0])}
            </label>
            <input
              id={
                String.toCamelCase(stringNoWhiteSpace(name)) +
                String.capitalize(arrayItemItem[0])
              }
              value={arrayItemItem[1]}
              onChange={e =>
                (array[arrayIndex][arrayItemItem[0]] = e.target.value)
              }
            />
          </div>
        ) : null
      )
    /*TODO: Add "Add to summary btn" */
  );
  return inputs;
}

export function addObjToArray(obj, array) {
  let newArray = array;
  newArray.push(obj);
  array = newArray;
}
