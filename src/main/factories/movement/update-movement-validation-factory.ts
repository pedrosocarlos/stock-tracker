import { ValidationComposite, RequiredFieldValidation, NumberValidation, StringValidation } from '../../../presentation/helpers/validators'
import type { Validation } from '../../../presentation/protocols/validation'

export const updateMovementValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['id']) {
    validations.push(new RequiredFieldValidation(field))
  }

  for (const field of ['id', 'idAccount', 'type', 'flag_deleted']) {
    validations.push(new NumberValidation(field))
  }

  for (const field of ['name', 'description']) {
    validations.push(new StringValidation(field))
  }

  return new ValidationComposite(validations)
}
