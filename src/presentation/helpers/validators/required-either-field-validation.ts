import { InvalidParamError } from '../../errors'
import type { Validation } from '../../protocols'

export class RequiredEitherFieldValidation implements Validation {
  constructor (private readonly fieldNames: string[]) {}

  validate (input: any): Error | null {
    for (const fieldName of this.fieldNames) {
      if (input[fieldName] !== undefined && input[fieldName] !== null) {
        return null
      }
    }
    return new InvalidParamError(this.fieldNames.join(' or '))
  }
}
