// Needed until the official package has typings.
/**
 * Returns a version string.
 */
export const version: string;

/**
 * Returns an array of supported extensions names.
 */
export const supportedExtensions: string[];

/**
 * @param uri Relative URI of the external resource.
 * @returns Promise with Uint8Array data.
 */
export type ExternalResourceFunction = (uri: string) => Promise<Uint8Array>;

export interface ValidationOptions {
  /**
   * Absolute or relative asset URI that will be copied to validation report.
   */
  uri?: string;

  /**
   * Max number of reported issues. Use 0 for unlimited output.
   */
  maxIssues?: number;

  /**
   * Array of ignored issue codes.
   */
  ignoredIssues?: string[];

  /**
   * Object with overridden severities for issue codes.
   */
  severityOverrides?: {
    [x: string]: Severity;
  };

  /**
   * Function for loading external resources. If omitted, external resources are not validated.
   */
  externalResourceFunction?: ExternalResourceFunction;

  /**
   * Set to false to skip reading of accessor data.
   */
  validateAccessorData?: boolean;
}

export interface Report {
  uri: string;
  mimeType: string;
  validatorVersion: string;
  validatedAt: string;
  issues: {
    numErrors: number;
    numWarnings: number;
    numInfos: number;
    numHints: number;
    messages: Array<{
      code: string;
      message: string;
      pointer: string;
      severity: Severity;
    }>;
    truncated: boolean;
  };
  info: {
    version: string;
    generator: string;
    resources: Array<{
      pointer: string;
      mimeType: string;
      storage: string;
      uri: string;
    }>;
    hasAnimations: boolean;
    hasMaterials: boolean;
    hasMorphTargets: boolean;
    hasSkins: boolean;
    hasTextures: boolean;
    hasDefaultScene: boolean;
    primitivesCount: number;
    maxAttributesUsed: number;
  };
}

export function validateBytes(
  data: Uint8Array,
  options?: ValidationOptions
): Promise<Report>;

export function validateString(
  json: string,
  options?: ValidationOptions
): Promise<Report>;

/**
 * 0 - Error
 * 1 - Warning
 * 2 - Information
 * 3 - Hint
 */
export type Severity = 0 | 1 | 2 | 3;
