import { expectAssignable, expectNotAssignable } from 'tsd';
import { ITeam } from '../../src/types';

expectNotAssignable<ITeam>(null);
expectAssignable<ITeam>({ channels: [], iconUrl: '', name: '', id: '' });

/* 
const testVal = [1, 23] as (number | string)[];

if (
  isTypedArray(testVal, (x): x is string => typeof x === 'string')
) {
  expectType<string[]>(testVal);
} else if (
  isTypedArray(testVal, (x): x is number => typeof x === 'number')
) {
  expectType<number[]>(testVal);
} */
