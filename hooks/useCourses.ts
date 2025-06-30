'use client';

import { useState, useEffect } from 'react';
import { api, Course } from '@/lib/api';

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCourses = async (level?: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getCourses(level);
      setCourses(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  const searchCourses = async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.searchCourses(query);
      setCourses(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search courses');
    } finally {
      setLoading(false);
    }
  };

  const getCourse = async (id: string): Promise<Course | null> => {
    try {
      setError(null);
      const data = await api.getCourse(id);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch course');
      return null;
    }
  };

  const getEnrolledCourses = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getEnrolledCourses();
      setCourses(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch enrolled courses');
    } finally {
      setLoading(false);
    }
  };

  const createCourse = async (courseData: Partial<Course>): Promise<Course | null> => {
    try {
      setError(null);
      const data = await api.createCourse(courseData);
      setCourses(prev => [data, ...prev]);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create course');
      return null;
    }
  };

  const updateCourse = async (id: string, courseData: Partial<Course>): Promise<Course | null> => {
    try {
      setError(null);
      const data = await api.updateCourse(id, courseData);
      setCourses(prev => prev.map(course => course.id === id ? data : course));
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update course');
      return null;
    }
  };

  const deleteCourse = async (id: string): Promise<boolean> => {
    try {
      setError(null);
      await api.deleteCourse(id);
      setCourses(prev => prev.filter(course => course.id !== id));
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete course');
      return false;
    }
  };

  const publishCourse = async (id: string): Promise<Course | null> => {
    try {
      setError(null);
      const data = await api.publishCourse(id);
      setCourses(prev => prev.map(course => course.id === id ? data : course));
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to publish course');
      return null;
    }
  };

  const unpublishCourse = async (id: string): Promise<Course | null> => {
    try {
      setError(null);
      const data = await api.unpublishCourse(id);
      setCourses(prev => prev.map(course => course.id === id ? data : course));
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to unpublish course');
      return null;
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return {
    courses,
    loading,
    error,
    fetchCourses,
    searchCourses,
    getCourse,
    getEnrolledCourses,
    createCourse,
    updateCourse,
    deleteCourse,
    publishCourse,
    unpublishCourse,
  };
} 