import type { NormalizedDiagnostic } from './logger.js'

class FileDiagnosticManager {
  public diagnostics: NormalizedDiagnostic[] = []

  /**
   * Resets the diagnostics array
   */
  public initWith(diagnostics: NormalizedDiagnostic[]) {
    this.diagnostics.length = 0
    diagnostics.forEach((d) => {
      this.diagnostics.push(d)
    })
  }

  public getDiagnostics(fileName?: string) {
    if (fileName) {
      return this.diagnostics.filter((f) => f.id === fileName)
    }

    return this.diagnostics
  }

  public updateByFileId(fileId: string, next: NormalizedDiagnostic[] | null) {
    for (let i = 0; i < this.diagnostics.length; i++) {
      if (this.diagnostics[i]?.id === fileId) {
        this.diagnostics.splice(i, 1)
        i--
      }
    }

    if (next?.length) {
      this.diagnostics.push(...next)
    }
  }
}

export { FileDiagnosticManager }
