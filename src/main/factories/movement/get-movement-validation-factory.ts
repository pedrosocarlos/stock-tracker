import { ValidationComposite, RequiredFieldValidation, NumberValidation } from '../../../presentation/helpers/validators'
import type { Validation } from '../../../presentation/protocols/validation'

export const getMovementValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['id']) {
    validations.push(new RequiredFieldValidation(field))
  }

  for (const field of ['id']) {
    validations.push(new NumberValidation(field))
  }

  return new ValidationComposite(validations)
}
