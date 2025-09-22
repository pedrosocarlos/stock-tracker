import { ValidationComposite, RequiredFieldValidation, StringNumberValidation } from '../../../presentation/helpers/validators'
import type { Validation } from '../../../presentation/protocols/validation'

export const getFlowValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['id']) {
    validations.push(new RequiredFieldValidation(field))
  }

  for (const field of ['id']) {
    validations.push(new StringNumberValidation(field))
  }

  return new ValidationComposite(validations)
}
