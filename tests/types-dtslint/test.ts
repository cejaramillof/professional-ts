import { assertIsTypedArray, isITeam, ITeam } from '.';

const team: ITeam = null; // $ExpectError
const team2: ITeam = { channels: [], iconUrl: '', name: '', id: ''}; // $ExpectError
