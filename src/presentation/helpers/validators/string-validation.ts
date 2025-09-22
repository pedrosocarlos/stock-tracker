import type { Validation } from '../../protocols/validation'
import { TypeParamError } from '../../errors'

export class StringValidation implements Validation {
  constructor (
    private readonly fieldName: string
  ) {}

  validate (input: any): Error | undefined {
    if(input[this.fieldName] == null) { return }

    const isValid = typeof input[this.fieldName] === 'string' && input[this.fieldName].trim().length > 0

    if (!isValid) {
      return new TypeParamError(this.fieldName, 'string')
    }
  }
}
