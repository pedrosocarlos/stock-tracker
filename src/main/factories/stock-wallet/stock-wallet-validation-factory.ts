import {
  ValidationComposite,
  RequiredFieldValidation
} from '../../../presentation/helpers/validators'
import type { Validation } from '../../../presentation/protocols'

export const makeStockWalletValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'type', 'accountId']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
