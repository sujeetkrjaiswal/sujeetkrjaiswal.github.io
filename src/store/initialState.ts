import { EnumDirValues } from '../interfaces/toggleDir.model'
import { IRootState } from '../reducers/root-reducers'

export const initialState: Partial<IRootState> = {
  theme: { dir: EnumDirValues.RTL },
}
