/* eslint-disable no-console */
const x: {
  user: {
    name: string;
    address?: {
      street: string;
      city: string;
    };
  };
} = undefined as any;

// console.log(x.user.address.city)
console.log(x.user.address?.city); // (?) Optional Chaining


class Foo {
  #name: string; // tsc3.8 - class fields (hard privacy) because con private you can see the name (runtime)
  lastName;
  constructor(rawName?: string, rawLastName?: string) {
    this.#name = rawName ?? '(no name)' // (??) undefined or null - Nullish Coalescing Operator
    this.lastName = rawLastName || '(no last name)' // (||) undefined, null, empty string or zero. any falsy
  }
  log() {
    console.log(this.#name);
  }
}

export * as foo from './data/channels';

// Tuple Types
// Best performance (space) more compact than objects key-value;
type Boo<T extends any[]> = [boolean, ...T, boolean];

type Address = [streetNumber: number, city: string, state: string, postal: number];
function printAddress(...address: Address) { }

printAddress(122, "San Francisco", "CA", 1231);

// Recursive Type Aliases
type JSONValue =
  | string
  | number
  | boolean
  | null
  // | JSONValue
  | JSONValue[] // since tsc4.0 recursive type Aliases
  | { [k: string]: JSONValue; } // JSONObject

interface JSONObject { [k: string]: JSONValue }
interface JSONArray extends Array<JSONValue> { }

const val: JSONValue = {
  name: 'carlos',
  address: {
    street: "Spear St",
  }
}

type Corner = `${'top' | 'bottom'}-${'left' | 'right'}`;

// another file
// type Bar = number; change number for any, will have a error is better:
type Bar = number & any;


// @ts-expect-error: supress tsc error - tsc3.9
const num: Bar = 'hello';

/* error, because it want error */
// @ts-expect-error: error, because it want error
const num: Bar = 5;

// @ts-ignore
const num: Bar = 'hello';


function somethingRisky() { }

function isError(err: any): err is Error {
  return err instanceof Error
}
function assertIsError(err: any): asserts err is Error { // tsc3.7
  if (!(err instanceof Error)) throw new Error(`Not an error: ${err}`)
}

try {
  somethingRisky();

} catch (err: unknown) {
  assertIsError(err);
  console.error(err.stack);

  // vs

  if (isError(err)) {
    // if (err instanceof Error) {
    console.error(err.stack);
  } else {
    console.log(err);
  }

}

// tsc3.7
/*
Type-check-well-documented (declaration files)
tsconfig.json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true
  }
}
*/

// Type only imports
import type { useAsyncDataEffect } from '../src/utils/api';
useAsyncDataEffect() // error because doesn't exists
