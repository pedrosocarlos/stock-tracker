import { ValidationComposite, RequiredFieldValidation, NumberValidation, StringValidation } from '../../../presentation/helpers/validators'
import type { Validation } from '../../../presentation/protocols/validation'

export const updateFlowValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['id']) {
    validations.push(new RequiredFieldValidation(field))
  }

  for (const field of ['id', 'idMovement', 'idFlowType', 'value']) {
    validations.push(new NumberValidation(field))
  }

  for (const field of ['name', 'description', 'date']) {
    validations.push(new StringValidation(field))
  }

  return new ValidationComposite(validations)
}
