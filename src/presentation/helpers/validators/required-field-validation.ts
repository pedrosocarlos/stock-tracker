import type { Validation } from '../../protocols/validation'
import { MissingParamError } from '../../errors'

export class RequiredFieldValidation implements Validation {
  constructor (private readonly fieldName: string) {}

  validate (input: any): Error | undefined{
    if (input[this.fieldName] === undefined || input[this.fieldName] === null) {
      return new MissingParamError(this.fieldName)
    }
  }
}
