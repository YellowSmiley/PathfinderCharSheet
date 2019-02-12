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

export function mapObjectToInputsWithAddBtn(obj, name) {
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
      <div className="inline-input-button">
        <input
          id={
            String.toCamelCase(stringNoWhiteSpace(name)) +
            String.capitalize(item[0])
          }
          value={item[1].value}
          onChange={e => (obj[item[0]].value = e.target.value)}
        />
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            item[1].isHidden = false;
          }}
          className="input-button"
          disabled={!item[1].isHidden}
        >
          +
        </button>
      </div>
    </div>
  ));
}

export function mapArrayOfObjectsToInputsWithAddBtn(array, name) {
  const inputs = array.map((arrayItem, arrayIndex) => {
    let inp = Object.entries(arrayItem).map((arrayItemItem, i) =>
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
    );
    const btn =
      arrayItem.isHidden === true ? (
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            arrayItem.isHidden = false;
          }}
          className=""
        >
          +
        </button>
      ) : null;
    inp.push(btn);
    return inp;
  });
  return inputs;
}

export function mapObjectsToInputsWithRemoveBtn(obj, name) {
  return Object.entries(obj).map((item, i) => {
    if (item[1].isHidden === false) {
      return (
        <div key={i}>
          <label
            htmlFor={String.toCamelCase(name) + String.capitalize(item[0])}
          >
            {String.capitalize(name) +
              " " +
              String.camelCaseToCapitalisedAndSpaced(item[0])}
          </label>
          <div className="inline-input-button">
            <input
              id={String.toCamelCase(name) + String.capitalize(item[0])}
              value={item[1].value}
              onChange={e => (item[1].value = e.target.value)}
            />
            <button
              type="submit"
              onClick={e => {
                e.preventDefault();
                item[1].isHidden = true;
              }}
              className="input-button"
            >
              -
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });
}

export function mapArrayOfObjectsToInputsWithRemoveBtn(array, name) {
  if (array) {
    const inputs = array.map((obj, i) => {
      /*TODO: Add titles for each */
      if (array[i].isHidden === false) {
        let inp = Object.entries(array[i]).map((item, index) => {
          return item[0] !== "isHidden" ? (
            <div key={i}>
              <label
                htmlFor={String.toCamelCase(name) + String.capitalize(item[0])}
              >
                {String.capitalize(name) +
                  " " +
                  String.camelCaseToCapitalisedAndSpaced(item[0])}
              </label>
              <input
                id={String.toCamelCase(name) + String.capitalize(item[0])}
                value={item[1]}
                onChange={e => (item[1] = e.target.value)}
              />
            </div>
          ) : null;
        });
        const btn = (
          <button
            type="submit"
            onClick={e => {
              e.preventDefault();
              array[i].isHidden = true;
            }}
            className=""
          >
            -
          </button>
        );
        inp.push(btn);
        return inp;
      } else {
        return null;
      }
    });
    return inputs;
  }
}

export function addObjToArray(obj, array) {
  let newArray = array;
  newArray.push(obj);
  array = newArray;
}

export function ifAnyObjNotHidden(obj) {
  if (obj) {
    const objAsArray = Object.entries(obj);
    for (let i = 0; i < objAsArray.length; i++) {
      if (objAsArray[i][1].isHidden || objAsArray[i][1].isHidden === false) {
        if (objAsArray[i][1].isHidden === false) {
          return true;
        }
      } else {
        const objAsArrayItemAsArray = Object.entries(objAsArray[i]);
        for (let x = 0; x < objAsArrayItemAsArray.length; x++) {
          if (
            objAsArrayItemAsArray[x][1].isHidden ||
            objAsArrayItemAsArray[x][1].isHidden === false
          ) {
            if (objAsArrayItemAsArray[x][1].isHidden === false) {
              return true;
            }
          } else {
            const objAsArrayItemAsArrayItemAsArray = Object.entries(
              objAsArrayItemAsArray[1][1]
            );
            for (let a = 0; a < objAsArrayItemAsArrayItemAsArray.length; a++) {
              if (
                objAsArrayItemAsArrayItemAsArray[a][1].isHidden === false ||
                objAsArrayItemAsArrayItemAsArray[a][1].isHidden === false
              ) {
                return true;
              }
            }
          }
        }
      }
    }
  }
}

export function supports_html5_storage() {
  try {
    return "localStorage" in window && window["localStorage"] !== null;
  } catch (e) {
    return false;
  }
}
