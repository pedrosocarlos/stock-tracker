import { ValidationComposite, RequiredFieldValidation, StringValidation, NumberValidation } from '../../../presentation/helpers/validators'
import type { Validation } from '../../../presentation/protocols/validation'

export const makeMovementValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'idAccount']) {
    validations.push(new RequiredFieldValidation(field))
  }

  for (const field of ['name']) {
    validations.push(new StringValidation(field))
  }

  for (const field of ['idAccount']) {
    validations.push(new NumberValidation(field))
  }

  return new ValidationComposite(validations)
}
