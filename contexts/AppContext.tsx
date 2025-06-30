'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useCourses } from '@/hooks/useCourses';
import { useProgress } from '@/hooks/useProgress';
import { useLessons } from '@/hooks/useLessons';
import { useNotifications } from '@/hooks/useNotifications';
import { useVocabulary } from '@/hooks/useVocabulary';
import { useAuth } from './AuthContext';

interface AppContextType {
  // Auth state
  user: any;
  loading: boolean;
  login: (data: any) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: any) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;

  // Courses state
  courses: any[];
  coursesLoading: boolean;
  coursesError: string | null;
  fetchCourses: (level?: string) => Promise<void>;
  searchCourses: (query: string) => Promise<void>;
  getCourse: (id: string) => Promise<any | null>;
  getEnrolledCourses: () => Promise<void>;
  createCourse: (courseData: any) => Promise<any | null>;
  updateCourse: (id: string, courseData: any) => Promise<any | null>;
  deleteCourse: (id: string) => Promise<boolean>;
  publishCourse: (id: string) => Promise<any | null>;
  unpublishCourse: (id: string) => Promise<any | null>;

  // Progress state
  progress: any[];
  stats: any;
  progressLoading: boolean;
  progressError: string | null;
  fetchUserProgress: () => Promise<void>;
  fetchUserStats: () => Promise<void>;
  updateProgress: (lessonId: string, progressData: any) => Promise<any | null>;
  markLessonComplete: (lessonId: string, score?: number) => Promise<any | null>;
  getProgressForCourse: (courseId: string) => any[];
  getProgressForLesson: (lessonId: string) => any;
  getCompletionPercentage: (courseId: string, totalLessons: number) => number;

  // Lessons state
  lessons: any[];
  currentLesson: any;
  lessonsLoading: boolean;
  lessonsError: string | null;
  fetchLessonsForCourse: (courseId: string) => Promise<void>;
  fetchLesson: (lessonId: string) => Promise<any | null>;
  getNextLesson: (currentLessonId: string) => any;
  getPreviousLesson: (currentLessonId: string) => any;
  getLessonByOrder: (courseId: string, order: number) => any;
  getTotalLessonsForCourse: (courseId: string) => number;

  // Notifications state
  notifications: any[];
  unreadCount: number;
  notificationsLoading: boolean;
  notificationsError: string | null;
  fetchNotifications: () => Promise<void>;
  markAsRead: (notificationId: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  deleteNotification: (notificationId: string) => Promise<void>;
  addLocalNotification: (notification: any) => void;

  // Vocabulary state
  vocabulary: any[];
  userVocabulary: any[];
  vocabularyLoading: boolean;
  vocabularyError: string | null;
  fetchVocabulary: (courseId?: string) => Promise<void>;
  fetchUserVocabulary: () => Promise<void>;
  addVocabularyItem: (item: any) => Promise<any | null>;
  markAsMastered: (vocabularyId: string) => Promise<void>;
  getVocabularyByCategory: (category: string) => any[];
  getVocabularyByDifficulty: (difficulty: "easy" | "medium" | "hard") => any[];
  getMasteredVocabulary: () => any[];
  getVocabularyToReview: () => any[];
  getVocabularyProgress: () => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const auth = useAuth();
  const courses = useCourses();
  const progress = useProgress();
  const lessons = useLessons();
  const notifications = useNotifications();
  const vocabulary = useVocabulary();

  const value: AppContextType = {
    // Auth
    user: auth.user,
    loading: auth.loading,
    login: auth.login,
    register: auth.register,
    logout: auth.logout,
    updateProfile: auth.updateProfile,
    forgotPassword: auth.forgotPassword,
    resetPassword: auth.resetPassword,

    // Courses
    courses: courses.courses,
    coursesLoading: courses.loading,
    coursesError: courses.error,
    fetchCourses: courses.fetchCourses,
    searchCourses: courses.searchCourses,
    getCourse: courses.getCourse,
    getEnrolledCourses: courses.getEnrolledCourses,
    createCourse: courses.createCourse,
    updateCourse: courses.updateCourse,
    deleteCourse: courses.deleteCourse,
    publishCourse: courses.publishCourse,
    unpublishCourse: courses.unpublishCourse,

    // Progress
    progress: progress.progress,
    stats: progress.stats,
    progressLoading: progress.loading,
    progressError: progress.error,
    fetchUserProgress: progress.fetchUserProgress,
    fetchUserStats: progress.fetchUserStats,
    updateProgress: progress.updateProgress,
    markLessonComplete: progress.markLessonComplete,
    getProgressForCourse: progress.getProgressForCourse,
    getProgressForLesson: progress.getProgressForLesson,
    getCompletionPercentage: progress.getCompletionPercentage,

    // Lessons
    lessons: lessons.lessons,
    currentLesson: lessons.currentLesson,
    lessonsLoading: lessons.loading,
    lessonsError: lessons.error,
    fetchLessonsForCourse: lessons.fetchLessonsForCourse,
    fetchLesson: lessons.fetchLesson,
    getNextLesson: lessons.getNextLesson,
    getPreviousLesson: lessons.getPreviousLesson,
    getLessonByOrder: lessons.getLessonByOrder,
    getTotalLessonsForCourse: lessons.getTotalLessonsForCourse,

    // Notifications
    notifications: notifications.notifications,
    unreadCount: notifications.unreadCount,
    notificationsLoading: notifications.loading,
    notificationsError: notifications.error,
    fetchNotifications: notifications.fetchNotifications,
    markAsRead: notifications.markAsRead,
    markAllAsRead: notifications.markAllAsRead,
    deleteNotification: notifications.deleteNotification,
    addLocalNotification: notifications.addLocalNotification,

    // Vocabulary
    vocabulary: vocabulary.vocabulary,
    userVocabulary: vocabulary.userVocabulary,
    vocabularyLoading: vocabulary.loading,
    vocabularyError: vocabulary.error,
    fetchVocabulary: vocabulary.fetchVocabulary,
    fetchUserVocabulary: vocabulary.fetchUserVocabulary,
    addVocabularyItem: vocabulary.addVocabularyItem,
    markAsMastered: vocabulary.markAsMastered,
    getVocabularyByCategory: vocabulary.getVocabularyByCategory,
    getVocabularyByDifficulty: vocabulary.getVocabularyByDifficulty,
    getMasteredVocabulary: vocabulary.getMasteredVocabulary,
    getVocabularyToReview: vocabulary.getVocabularyToReview,
    getVocabularyProgress: vocabulary.getVocabularyProgress,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
} 