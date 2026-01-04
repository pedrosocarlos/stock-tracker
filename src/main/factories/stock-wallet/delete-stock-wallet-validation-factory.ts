import {
  ValidationComposite,
  RequiredFieldValidation
} from '../../../presentation/helpers/validators'
import type { Validation } from '../../../presentation/protocols'

export const makeDeleteStockWalletValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['id']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
