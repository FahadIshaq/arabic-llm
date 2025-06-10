"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import coursesData from "@/data/courses.json"
import { useNotifications } from "./notifications"

interface CourseProgressContextType {
  currentCourse: number
  currentUnit: number
  currentModule: number
  completedModules: number[]
  completedUnits: number[]
  unlockNextModule: (moduleId: number) => void
  unlockNextUnit: (unitId: number) => void
  markModuleComplete: (moduleId: number) => void
  markUnitComplete: (unitId: number) => void
  isModuleLocked: (moduleId: number, unitId: number) => boolean
  isUnitLocked: (unitId: number) => boolean
  getProgress: () => { overall: number; currentUnit: number }
}

const CourseProgressContext = createContext<CourseProgressContextType | undefined>(undefined)

export function CourseProgressProvider({ children }: { children: ReactNode }) {
  const [currentCourse, setCurrentCourse] = useState(1)
  const [currentUnit, setCurrentUnit] = useState(1)
  const [currentModule, setCurrentModule] = useState(1)
  const [completedModules, setCompletedModules] = useState<number[]>([])
  const [completedUnits, setCompletedUnits] = useState<number[]>([])
  const { addNotification } = useNotifications()

  useEffect(() => {
    // Load progress from localStorage
    const saved = localStorage.getItem("arabicai_progress")
    if (saved) {
      const progress = JSON.parse(saved)
      setCurrentCourse(progress.currentCourse || 1)
      setCurrentUnit(progress.currentUnit || 1)
      setCurrentModule(progress.currentModule || 1)
      setCompletedModules(progress.completedModules || [])
      setCompletedUnits(progress.completedUnits || [])
    }
  }, [])

  const saveProgress = (data: any) => {
    localStorage.setItem("arabicai_progress", JSON.stringify(data))
  }

  const markModuleComplete = (moduleId: number) => {
    if (!completedModules.includes(moduleId)) {
      const newCompleted = [...completedModules, moduleId]
      setCompletedModules(newCompleted)

      // Update last study time
      localStorage.setItem("arabicai_last_study", new Date().toISOString())

      // Send achievement notification
      addNotification({
        title: "Module Completed! 🎉",
        message: "Great job! You've completed another module. Keep up the excellent work!",
        type: "achievement",
        actionUrl: "/dashboard",
      })

      saveProgress({
        currentCourse,
        currentUnit,
        currentModule,
        completedModules: newCompleted,
        completedUnits,
      })
    }
  }

  const markUnitComplete = (unitId: number) => {
    if (!completedUnits.includes(unitId)) {
      const newCompleted = [...completedUnits, unitId]
      setCompletedUnits(newCompleted)

      // Send achievement notification
      addNotification({
        title: "Unit Completed! 🏆",
        message: "Excellent progress! You've completed an entire unit. Ready for the next challenge?",
        type: "achievement",
        actionUrl: "/courses",
      })

      saveProgress({
        currentCourse,
        currentUnit,
        currentModule,
        completedModules,
        completedUnits: newCompleted,
      })
    }
  }

  const unlockNextModule = (moduleId: number) => {
    // Logic to unlock next module
    markModuleComplete(moduleId)
  }

  const unlockNextUnit = (unitId: number) => {
    // Logic to unlock next unit
    markUnitComplete(unitId)
  }

  const isModuleLocked = (moduleId: number, unitId: number): boolean => {
    // First module of first unit is always unlocked
    if (moduleId === 1 && unitId === 1) return false

    // Check if previous module is completed
    const course = coursesData.courses.find((c) => c.id === currentCourse)
    if (!course) return true

    const unit = course.units.find((u) => u.id === unitId)
    if (!unit) return true

    const moduleIndex = unit.modules.findIndex((m) => m.id === moduleId)
    if (moduleIndex === 0) {
      // First module of unit - check if previous unit is completed
      if (unitId === 1) return false
      return !completedUnits.includes(unitId - 1)
    }

    // Check if previous module is completed
    const prevModule = unit.modules[moduleIndex - 1]
    return !completedModules.includes(prevModule.id)
  }

  const isUnitLocked = (unitId: number): boolean => {
    if (unitId === 1) return false
    return !completedUnits.includes(unitId - 1)
  }

  const getProgress = () => {
    const course = coursesData.courses.find((c) => c.id === currentCourse)
    if (!course) return { overall: 0, currentUnit: 0 }

    const totalModules = course.units.reduce((acc, unit) => acc + unit.modules.length, 0)
    const overall = totalModules > 0 ? (completedModules.length / totalModules) * 100 : 0

    const currentUnitData = course.units.find((u) => u.id === currentUnit)
    const currentUnitProgress = currentUnitData
      ? (currentUnitData.modules.filter((m) => completedModules.includes(m.id)).length /
          currentUnitData.modules.length) *
        100
      : 0

    return { overall, currentUnit: currentUnitProgress }
  }

  return (
    <CourseProgressContext.Provider
      value={{
        currentCourse,
        currentUnit,
        currentModule,
        completedModules,
        completedUnits,
        unlockNextModule,
        unlockNextUnit,
        markModuleComplete,
        markUnitComplete,
        isModuleLocked,
        isUnitLocked,
        getProgress,
      }}
    >
      {children}
    </CourseProgressContext.Provider>
  )
}

export function useCourseProgress() {
  const context = useContext(CourseProgressContext)
  if (context === undefined) {
    throw new Error("useCourseProgress must be used within a CourseProgressProvider")
  }
  return context
}
