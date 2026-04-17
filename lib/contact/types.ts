export type ContactPriority = "standard" | "urgent";

export type ContactSubmissionInput = {
  name?: string;
  phone?: string;
  email?: string;
  location?: string;
  serviceType?: string;
  callbackTime?: string;
  message?: string;
  priority?: string;
  company?: string;
};

export type ContactSubmission = {
  id: string;
  submittedAt: string;
  sourceIp: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  serviceType: string;
  callbackTime: string | null;
  message: string;
  priority: ContactPriority;
};

export type ContactServiceSuccess = {
  ok: true;
  status: 200;
  submission: ContactSubmission;
  message: string;
};

export type ContactServiceError = {
  ok: false;
  status: 400 | 429 | 500 | 502;
  message: string;
};

export type ContactServiceResult = ContactServiceSuccess | ContactServiceError;
