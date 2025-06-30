'use client';

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  content: string;
  order: number;
  duration: number;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'video' | 'text' | 'interactive' | 'quiz';
  videoUrl?: string;
  audioUrl?: string;
  exercises: Exercise[];
  vocabulary: VocabularyItem[];
  createdAt: string;
  updatedAt: string;
}

export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'matching' | 'speaking';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
  points: number;
}

export interface VocabularyItem {
  id: string;
  arabic: string;
  english: string;
  transliteration: string;
  audioUrl?: string;
  example?: string;
}

export function useLessons() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLessonsForCourse = async (courseId: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getLessonsForCourse(courseId);
      setLessons(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch lessons');
    } finally {
      setLoading(false);
    }
  };

  const fetchLesson = async (lessonId: string) => {
    try {
      setError(null);
      const data = await api.getLesson(lessonId);
      setCurrentLesson(data);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch lesson');
      return null;
    }
  };

  const getNextLesson = (currentLessonId: string) => {
    const currentIndex = lessons.findIndex(lesson => lesson.id === currentLessonId);
    if (currentIndex < lessons.length - 1) {
      return lessons[currentIndex + 1];
    }
    return null;
  };

  const getPreviousLesson = (currentLessonId: string) => {
    const currentIndex = lessons.findIndex(lesson => lesson.id === currentLessonId);
    if (currentIndex > 0) {
      return lessons[currentIndex - 1];
    }
    return null;
  };

  const getLessonByOrder = (courseId: string, order: number) => {
    return lessons.find(lesson => lesson.courseId === courseId && lesson.order === order);
  };

  const getTotalLessonsForCourse = (courseId: string) => {
    return lessons.filter(lesson => lesson.courseId === courseId).length;
  };

  return {
    lessons,
    currentLesson,
    loading,
    error,
    fetchLessonsForCourse,
    fetchLesson,
    getNextLesson,
    getPreviousLesson,
    getLessonByOrder,
    getTotalLessonsForCourse,
  };
} 