export interface User {
  id: string;
  email: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
