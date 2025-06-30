'use client';

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';

export interface VocabularyItem {
  id: string;
  arabic: string;
  english: string;
  transliteration: string;
  audioUrl?: string;
  example?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  courseId?: string;
  lessonId?: string;
}

export interface UserVocabulary {
  id: string;
  userId: string;
  vocabularyId: string;
  mastered: boolean;
  reviewCount: number;
  lastReviewed: string;
  nextReview: string;
  createdAt: string;
  updatedAt: string;
}

export function useVocabulary() {
  const [vocabulary, setVocabulary] = useState<VocabularyItem[]>([]);
  const [userVocabulary, setUserVocabulary] = useState<UserVocabulary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchVocabulary = async (courseId?: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getVocabulary(courseId);
      setVocabulary(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch vocabulary');
    } finally {
      setLoading(false);
    }
  };

  const fetchUserVocabulary = async () => {
    try {
      setError(null);
      const data = await api.getUserVocabulary();
      setUserVocabulary(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch user vocabulary');
    }
  };

  const addVocabularyItem = async (item: Partial<VocabularyItem>) => {
    try {
      setError(null);
      const data = await api.addVocabularyItem(item);
      setVocabulary(prev => [...prev, data]);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add vocabulary item');
      return null;
    }
  };

  const markAsMastered = async (vocabularyId: string) => {
    try {
      setError(null);
      await api.markVocabularyAsMastered(vocabularyId);
      setUserVocabulary(prev => 
        prev.map(v => v.vocabularyId === vocabularyId ? { ...v, mastered: true } : v)
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to mark vocabulary as mastered');
    }
  };

  const getVocabularyByCategory = (category: string) => {
    return vocabulary.filter(item => item.category === category);
  };

  const getVocabularyByDifficulty = (difficulty: 'easy' | 'medium' | 'hard') => {
    return vocabulary.filter(item => item.difficulty === difficulty);
  };

  const getMasteredVocabulary = () => {
    return userVocabulary.filter(v => v.mastered);
  };

  const getVocabularyToReview = () => {
    const now = new Date().toISOString();
    return userVocabulary.filter(v => !v.mastered && v.nextReview <= now);
  };

  const getVocabularyProgress = () => {
    const total = vocabulary.length;
    const mastered = getMasteredVocabulary().length;
    return total > 0 ? Math.round((mastered / total) * 100) : 0;
  };

  useEffect(() => {
    fetchVocabulary();
    fetchUserVocabulary();
  }, []);

  return {
    vocabulary,
    userVocabulary,
    loading,
    error,
    fetchVocabulary,
    fetchUserVocabulary,
    addVocabularyItem,
    markAsMastered,
    getVocabularyByCategory,
    getVocabularyByDifficulty,
    getMasteredVocabulary,
    getVocabularyToReview,
    getVocabularyProgress,
  };
} 