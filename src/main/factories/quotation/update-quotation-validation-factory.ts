import { RequiredFieldValidation, ValidationComposite } from '../../../presentation/helpers/validators'
import type { Validation } from '../../../presentation/protocols/validation'

export const makeUpdateQuotationValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['id', 'value', 'date', 'type']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
