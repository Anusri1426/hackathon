import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { ProgressBar } from '../components/ui/ProgressBar'
import { Badge } from '../components/ui/Badge'
import { Target, Plus } from 'lucide-react'

export default function GoalsAndDevelopment() {
  const goals = [
    { title: "Lead Frontend Architecture Refactor", type: "Business Goal", progress: 65, status: "On Track" },
    { title: "Complete AWS Certification", type: "Development", progress: 30, status: "At Risk" },
    { title: "Mentor 2 Junior Engineers", type: "Leadership", progress: 100, status: "Completed" },
  ]

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Goals & Development Plan</h1>
          <p className="text-slate-500 mt-1">Track SMART goals and skills progress.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium shadow-sm">
          <Plus className="w-4 h-4" /> Add Goal
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {goals.map((goal, i) => (
            <Card key={i} className="hover:-translate-y-0.5 transition-transform">
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary-50 text-primary-600 rounded-lg shrink-0 mt-0.5">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">{goal.title}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">{goal.type}</p>
                    </div>
                  </div>
                  <Badge variant={
                    goal.status === 'Completed' ? 'success' : 
                    goal.status === 'At Risk' ? 'danger' : 'primary'
                  }>{goal.status}</Badge>
                </div>
                <ProgressBar 
                  progress={goal.progress} 
                  colorClass={
                    goal.status === 'Completed' ? 'bg-emerald-500' : 
                    goal.status === 'At Risk' ? 'bg-red-500' : 'bg-primary-500'
                  }
                />
                <div className="flex justify-end mt-2">
                  <span className="text-xs font-medium text-slate-600">{goal.progress}% Complete</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Suggested Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-slate-500 mb-4">AI recommendations based on recent feedback and role requirements.</p>
              <div className="space-y-3">
                {["Advanced React Patterns", "System Design", "Agile Leadership"].map((skill, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border border-slate-100 rounded-lg bg-slate-50 hover:border-primary-200 transition-colors group cursor-pointer">
                    <span className="text-sm font-medium text-slate-700 group-hover:text-primary-700 transition-colors">{skill}</span>
                    <Plus className="w-4 h-4 text-slate-400 group-hover:text-primary-600 transition-colors" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
