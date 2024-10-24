/**
 * @packageDocumentation
 *
 * A simple error class and options interface that seems to get copied from
 * project to project.
 *
 * @example
 *
 * ```TypeScript
 * import { AbortError } from 'abort-error'
 *
 * // a promise that will be settled later
 * const deferred = Promise.withResolvers()
 *
 * const signal = AbortSignal.timeout(1000)
 * signal.addEventListener('abort', () => {
 *   deferred.reject(new AbortError())
 * })
 * ```
 */

export interface AbortOptions {
  signal?: AbortSignal
}

export class AbortError extends Error {
  static name = 'AbortError'
  name = 'AbortError'
}
