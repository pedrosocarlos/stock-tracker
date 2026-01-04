import {
  ValidationComposite,
  RequiredFieldValidation
} from '../../../presentation/helpers/validators'
import type { Validation } from '../../../presentation/protocols'

export const makeShareOwnedValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['stockWalletId', 'stockId', 'quantity', 'averagePrice']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
