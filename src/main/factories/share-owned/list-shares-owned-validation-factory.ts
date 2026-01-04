import {
  ValidationComposite,
  RequiredFieldValidation
} from '../../../presentation/helpers/validators'
import type { Validation } from '../../../presentation/protocols'

export const makeListSharesOwnedValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['walletId']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
