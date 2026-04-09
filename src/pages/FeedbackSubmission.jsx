import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { RatingStars } from '../components/ui/RatingStars'

export default function FeedbackSubmission() {
  const [rating, setRating] = useState(0)
  const [isAnonymous, setIsAnonymous] = useState(false)

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Submit Feedback</h1>
        <p className="text-slate-500 mt-1">Provide constructive feedback for your peers.</p>
      </div>

      <Card>
        <CardContent className="p-6">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Select Employee</label>
              <select className="w-full border border-slate-200 rounded-lg p-2.5 text-slate-800 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 text-sm outline-none transition-all">
                <option value="">Choose someone...</option>
                <option value="1">Sarah Jenkins</option>
                <option value="2">Mike Ross</option>
                <option value="3">Emma Watson</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 mt-4">Overall Performance Rating</label>
              <div className="flex items-center gap-4">
                <RatingStars rating={rating} readOnly={false} onChange={setRating} />
                <span className="text-sm font-medium text-slate-500">{rating > 0 ? `${rating} out of 5 stars` : 'Select a rating'}</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">General Feedback</label>
              <textarea 
                className="w-full border border-slate-200 rounded-lg p-3 text-slate-800 h-32 resize-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 text-sm outline-none transition-all"
                placeholder="What has this person done well? What could they improve?"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Key Strengths</label>
                <textarea 
                  className="w-full border border-slate-200 rounded-lg p-3 text-slate-800 h-24 resize-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 text-sm outline-none transition-all"
                  placeholder="e.g. Communication, Problem solving..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Areas for Improvement</label>
                <textarea 
                  className="w-full border border-slate-200 rounded-lg p-3 text-slate-800 h-24 resize-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 text-sm outline-none transition-all"
                  placeholder="e.g. Technical documentation..."
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                />
                <span className="text-sm text-slate-600 select-none">Submit anonymously</span>
              </label>
              
              <button 
                type="button"
                className="px-6 py-2.5 bg-primary-600 text-white font-medium text-sm rounded-lg hover:bg-primary-700 transition-colors shadow-sm"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
