'use client';

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';

export interface Progress {
  id: string;
  userId: string;
  courseId: string;
  lessonId: string;
  completed: boolean;
  score?: number;
  timeSpent: number;
  lastAccessedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserStats {
  totalLessonsCompleted: number;
  totalStudyTime: number;
  currentStreak: number;
  averageScore: number;
  coursesEnrolled: number;
  lastStudyDate?: string;
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress[]>([]);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUserProgress = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getUserProgress();
      setProgress(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch progress');
    } finally {
      setLoading(false);
    }
  };

  const fetchUserStats = async () => {
    try {
      setError(null);
      const data = await api.getUserStats();
      setStats(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch user stats');
    }
  };

  const updateProgress = async (lessonId: string, progressData: Partial<Progress>) => {
    try {
      setError(null);
      const data = await api.updateProgress(lessonId, progressData);
      setProgress(prev => 
        prev.map(p => p.lessonId === lessonId ? data : p)
      );
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update progress');
      return null;
    }
  };

  const markLessonComplete = async (lessonId: string, score?: number) => {
    try {
      setError(null);
      const data = await api.markLessonComplete(lessonId, score);
      setProgress(prev => 
        prev.map(p => p.lessonId === lessonId ? data : p)
      );
      // Refresh stats after completing a lesson
      await fetchUserStats();
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to mark lesson complete');
      return null;
    }
  };

  const getProgressForCourse = (courseId: string) => {
    return progress.filter(p => p.courseId === courseId);
  };

  const getProgressForLesson = (lessonId: string) => {
    return progress.find(p => p.lessonId === lessonId);
  };

  const getCompletionPercentage = (courseId: string, totalLessons: number) => {
    const courseProgress = getProgressForCourse(courseId);
    const completedLessons = courseProgress.filter(p => p.completed).length;
    return totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  };

  useEffect(() => {
    fetchUserProgress();
    fetchUserStats();
  }, []);

  return {
    progress,
    stats,
    loading,
    error,
    fetchUserProgress,
    fetchUserStats,
    updateProgress,
    markLessonComplete,
    getProgressForCourse,
    getProgressForLesson,
    getCompletionPercentage,
  };
} 