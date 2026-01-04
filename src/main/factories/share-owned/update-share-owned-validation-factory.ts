import {
  ValidationComposite,
  RequiredFieldValidation,
  RequiredEitherFieldValidation
} from '../../../presentation/helpers/validators'
import type { Validation } from '../../../presentation/protocols'

export const makeUpdateShareOwnedValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['id']) { // Validate id in params
    validations.push(new RequiredFieldValidation(field))
  }
  // Validate at least one of quantity or average_price in body
  validations.push(new RequiredEitherFieldValidation(['quantity', 'average_price']))
  return new ValidationComposite(validations)
}
