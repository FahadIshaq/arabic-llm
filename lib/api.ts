const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://arabicllm.vercel.app//api/v1'

// Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  avatar?: string;
  role: 'student' | 'instructor' | 'admin';
  level: 'beginner' | 'intermediate' | 'advanced';
  isEmailVerified: boolean;
  totalPoints: number;
  streakDays: number;
  lastLoginAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  totalHours: number;
  unitsCount: number;
  assessmentsPerUnit: number;
  certification: string;
  image: string;
  price: number;
  originalPrice?: number;
  lessonsCount: number;
  rating: number;
  reviews: number;
  students: number;
  features: string[];
  requirements: string[];
  outcomes: string[];
  isPublished: boolean;
  isActive: boolean;
  instructor?: User;
  createdAt: string;
  updatedAt: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role?: 'student' | 'instructor' | 'admin';
  level?: 'beginner' | 'intermediate' | 'advanced';
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

// API Client
class ApiClient {
  private baseURL: string;
  private token: string | null = null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('access_token');
    }
  }

  public async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers: {
        ...headers,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  setToken(token: string) {
    this.token = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('access_token', token);
    }
  }

  clearToken() {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
    }
  }

  // Auth endpoints
  async login(data: LoginData): Promise<AuthResponse> {
    const response = await this.request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    this.setToken(response.access_token);
    return response;
  }

  async register(data: RegisterData): Promise<{ message: string; user: User }> {
    return this.request<{ message: string; user: User }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async verifyEmail(token: string): Promise<{ message: string }> {
    return this.request<{ message: string }>('/auth/verify-email', {
      method: 'POST',
      body: JSON.stringify({ token }),
    });
  }

  async forgotPassword(email: string): Promise<{ message: string }> {
    return this.request<{ message: string }>('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  async resetPassword(token: string, password: string): Promise<{ message: string }> {
    return this.request<{ message: string }>('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ token, password }),
    });
  }

  async getProfile(): Promise<User> {
    return this.request<User>('/auth/profile');
  }

  async logout(): Promise<{ message: string }> {
    return this.request<{ message: string }>('/auth/logout', {
      method: 'POST',
    });
  }

  // User endpoints
  async updateProfile(data: Partial<User>): Promise<User> {
    return this.request<User>('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async getLeaderboard(limit: number = 10): Promise<User[]> {
    return this.request<User[]>(`/users/leaderboard?limit=${limit}`);
  }

  // Course endpoints
  async getCourses(level?: string): Promise<Course[]> {
    const params = level ? `?level=${level}` : '';
    return this.request<Course[]>(`/courses${params}`);
  }

  async getCourse(id: string): Promise<Course> {
    return this.request<Course>(`/courses/${id}`);
  }

  async searchCourses(query: string): Promise<Course[]> {
    return this.request<Course[]>(`/courses/search?q=${encodeURIComponent(query)}`);
  }

  async getEnrolledCourses(): Promise<Course[]> {
    return this.request<Course[]>('/courses/enrolled/my');
  }

  async createCourse(data: Partial<Course>): Promise<Course> {
    return this.request<Course>('/courses', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateCourse(id: string, data: Partial<Course>): Promise<Course> {
    return this.request<Course>(`/courses/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteCourse(id: string): Promise<void> {
    return this.request<void>(`/courses/${id}`, {
      method: 'DELETE',
    });
  }

  async publishCourse(id: string): Promise<Course> {
    return this.request<Course>(`/courses/${id}/publish`, {
      method: 'PUT',
    });
  }

  async unpublishCourse(id: string): Promise<Course> {
    return this.request<Course>(`/courses/${id}/unpublish`, {
      method: 'PUT',
    });
  }

  // Lesson endpoints
  async getLessonsForCourse(courseId: string): Promise<any[]> {
    return this.request<any[]>(`/courses/${courseId}/lessons`);
  }

  async getLesson(lessonId: string): Promise<any> {
    return this.request<any>(`/lessons/${lessonId}`);
  }

  // Progress endpoints
  async getUserProgress(): Promise<any[]> {
    return this.request<any[]>('/progress/my');
  }

  async getUserStats(): Promise<any> {
    return this.request<any>('/users/stats');
  }

  async updateProgress(lessonId: string, progressData: any): Promise<any> {
    return this.request<any>(`/progress/lessons/${lessonId}`, {
      method: 'PUT',
      body: JSON.stringify(progressData),
    });
  }

  async markLessonComplete(lessonId: string, score?: number): Promise<any> {
    return this.request<any>(`/progress/lessons/${lessonId}/complete`, {
      method: 'POST',
      body: JSON.stringify({ score }),
    });
  }

  // Notification endpoints
  async getNotifications(): Promise<any[]> {
    return this.request<any[]>('/notifications');
  }

  async markNotificationAsRead(notificationId: string): Promise<void> {
    return this.request<void>(`/notifications/${notificationId}/read`, {
      method: 'PUT',
    });
  }

  async markAllNotificationsAsRead(): Promise<void> {
    return this.request<void>('/notifications/read-all', {
      method: 'PUT',
    });
  }

  async deleteNotification(notificationId: string): Promise<void> {
    return this.request<void>(`/notifications/${notificationId}`, {
      method: 'DELETE',
    });
  }

  // Vocabulary endpoints
  async getVocabulary(courseId?: string): Promise<any[]> {
    const params = courseId ? `?courseId=${courseId}` : '';
    return this.request<any[]>(`/vocabulary${params}`);
  }

  async getUserVocabulary(): Promise<any[]> {
    return this.request<any[]>('/vocabulary/my');
  }

  async addVocabularyItem(data: any): Promise<any> {
    return this.request<any>('/vocabulary', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async markVocabularyAsMastered(vocabularyId: string): Promise<void> {
    return this.request<void>(`/vocabulary/${vocabularyId}/mastered`, {
      method: 'PUT',
    });
  }

  // Assessment endpoints
  async getAssessments(courseId?: string): Promise<any[]> {
    const params = courseId ? `?courseId=${courseId}` : '';
    return this.request<any[]>(`/assessments${params}`);
  }

  async submitAssessment(assessmentId: string, answers: any): Promise<any> {
    return this.request<any>(`/assessments/${assessmentId}/submit`, {
      method: 'POST',
      body: JSON.stringify({ answers }),
    });
  }

  // Practice endpoints
  async startPracticeSession(type: string): Promise<any> {
    return this.request<any>('/practice/start', {
      method: 'POST',
      body: JSON.stringify({ type }),
    });
  }

  async submitPracticeAnswer(sessionId: string, answer: any): Promise<any> {
    return this.request<any>(`/practice/sessions/${sessionId}/answer`, {
      method: 'POST',
      body: JSON.stringify(answer),
    });
  }

  async endPracticeSession(sessionId: string): Promise<any> {
    return this.request<any>(`/practice/sessions/${sessionId}/end`, {
      method: 'POST',
    });
  }
}

// Create and export API instance
export const api = new ApiClient(API_BASE_URL);
 