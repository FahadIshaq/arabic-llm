"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    // Set the date we're counting down to (14 days from now)
    const countDownDate = new Date()
    countDownDate.setDate(countDownDate.getDate() + 14)
    countDownDate.setHours(23, 59, 59, 0)

    const interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime()

      // Find the distance between now and the count down date
      const distance = countDownDate.getTime() - now

      // Time calculations for days, hours, minutes and seconds
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000))

      // If the count down is finished, clear the interval
      if (distance < 0) {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Mobile view (very compact)
  const mobileView = (
    <div className="flex items-center gap-1 text-xs">
      <span className="font-mono font-medium">{days.toString().padStart(2, "0")}d</span>
      <span>:</span>
      <span className="font-mono font-medium">{hours.toString().padStart(2, "0")}h</span>
      <span>:</span>
      <span className="font-mono font-medium">{minutes.toString().padStart(2, "0")}m</span>
    </div>
  )

  // Tablet/Desktop view
  const desktopView = (
    <div className="flex items-center gap-2 text-sm">
      <div className="flex items-center">
        <span className="font-mono font-medium">{days.toString().padStart(2, "0")}</span>
        <span className="text-xs ml-1">Days</span>
      </div>
      <span>:</span>
      <div className="flex items-center">
        <span className="font-mono font-medium">{hours.toString().padStart(2, "0")}</span>
        <span className="text-xs ml-1">Hours</span>
      </div>
      <span>:</span>
      <div className="flex items-center">
        <span className="font-mono font-medium">{minutes.toString().padStart(2, "0")}</span>
        <span className="text-xs ml-1">Min</span>
      </div>
      <span>:</span>
      <div className="flex items-center">
        <span className="font-mono font-medium">{seconds.toString().padStart(2, "0")}</span>
        <span className="text-xs ml-1">Sec</span>
      </div>
    </div>
  )

  return (
    <>
      <div className="block sm:hidden">{mobileView}</div>
      <div className="hidden sm:block">{desktopView}</div>
    </>
  )
}
