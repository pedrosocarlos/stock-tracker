export class TypeParamError extends Error {
  constructor (paramName: string, paramType: string) {
    super(`Type param: ${paramName} needs to be a ${paramType}`)
    this.name = 'TypeParamError'
  }
}
