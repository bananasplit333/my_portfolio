// utils.tsx

interface VapiErrorObject {
    vapiError: Error;
  }
  
  export function isPublicKeyMissingError(errorObject: VapiErrorObject): boolean {
    const { vapiError } = errorObject;
    // Check if the provided vapiError is a "public key missing" error
    // Return true if it is, false otherwise
    // The specific implementation would depend on how the error is structured
    // and how you determine if it's a "public key missing" error
    // For example:
    return vapiError && vapiError.message ? vapiError.message.includes("Public key missing") : false;
  }
  