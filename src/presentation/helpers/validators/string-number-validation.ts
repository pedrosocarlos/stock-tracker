import type { Validation } from '../../protocols/validation'
import { TypeParamError } from '../../errors'

export class StringNumberValidation implements Validation {
  constructor (
    private readonly fieldName: string
  ) {}

  validate (input: any): Error | undefined {
    if(input[this.fieldName] == null) { return }

    const value = input[this.fieldName]

    const isValid = (typeof value === 'number' && !isNaN(value)) || (typeof value === 'string' && value.trim() !== '' && !isNaN(Number(value)))

    if (!isValid) {
      return new TypeParamError(this.fieldName, 'number')
    }
  }
}
