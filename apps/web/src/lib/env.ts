if (typeof window !== 'undefined') {
  throw new Error('Cannot import BACKEND_URL on client');
}

export const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000';