import { ValidationComposite, RequiredFieldValidation, StringValidation, NumberValidation } from '../../../presentation/helpers/validators'
import type { Validation } from '../../../presentation/protocols/validation'

export const makeFlowValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'idMovement', 'value']) {
    validations.push(new RequiredFieldValidation(field))
  }

  for (const field of ['name', 'description', 'date']) {
    validations.push(new StringValidation(field))
  }

  for (const field of ['idMovement', 'value', 'idFlowType']) {
    validations.push(new NumberValidation(field))
  }

  return new ValidationComposite(validations)
}
