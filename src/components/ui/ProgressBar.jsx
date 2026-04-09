import React from 'react'
import { cn } from '../../lib/utils'

export function ProgressBar({ progress, label, colorClass = "bg-primary-500", className }) {
  const percentage = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <div className="flex justify-between items-center mb-1 text-sm font-medium text-slate-700">
          <span>{label}</span>
          <span>{percentage}%</span>
        </div>
      )}
      <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
        <div 
          className={cn("h-full rounded-full transition-all duration-500 ease-in-out", colorClass)} 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
