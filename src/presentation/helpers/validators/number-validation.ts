import type { Validation } from '../../protocols/validation'
import { TypeParamError } from '../../errors'

export class NumberValidation implements Validation {
  constructor (
    private readonly fieldName: string
  ) {}

  validate (input: any): Error | undefined {
    if(input[this.fieldName] == null) { return }

    const isValid = typeof input[this.fieldName] === 'number' && !isNaN(input[this.fieldName])

    if (!isValid) {
      return new TypeParamError(this.fieldName)
    }
  }
}
