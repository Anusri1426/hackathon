import React from 'react'
import { Star } from 'lucide-react'
import { cn } from '../../lib/utils'

export function RatingStars({ rating, max = 5, readOnly = true, onChange, className }) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: max }).map((_, i) => {
        const starValue = i + 1;
        const isFilled = starValue <= rating;
        
        return (
          <button
            key={i}
            type="button"
            disabled={readOnly}
            onClick={() => onChange?.(starValue)}
            className={cn(
              "transition-colors focus:outline-none",
              readOnly ? "cursor-default" : "cursor-pointer hover:scale-110",
              isFilled ? "text-amber-400" : "text-slate-200"
            )}
          >
            <Star 
              className={cn("w-5 h-5", isFilled ? "fill-amber-400" : "fill-none")} 
              strokeWidth={isFilled ? 1 : 2}
            />
          </button>
        )
      })}
    </div>
  )
}
