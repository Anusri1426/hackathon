import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { RatingStars } from '../components/ui/RatingStars'
import { Badge } from '../components/ui/Badge'
import { ArrowLeft, BrainCircuit } from 'lucide-react'

export default function EmployeeProfile() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('summary')

  const tabs = [
    { id: 'summary', label: 'Performance Summary' },
    { id: 'self', label: 'Self Review' },
    { id: 'peer', label: 'Peer Feedback' },
    { id: 'manager', label: 'Manager Feedback' },
  ]

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Link to="/employees" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Employees
      </Link>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Card */}
        <Card className="w-full md:w-1/3 h-fit">
          <CardContent className="p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-3xl mx-auto mb-4 tracking-tighter">
              SJ
            </div>
            <h2 className="text-xl font-bold text-slate-900">Sarah Jenkins</h2>
            <p className="text-slate-500 text-sm mt-1 mb-4">Frontend Engineer • Engineering</p>
            
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
              <p className="text-sm font-semibold text-slate-700 mb-2">Overall Rating</p>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-3xl font-bold text-slate-900">4.8</span>
                <span className="text-sm text-slate-500">/ 5</span>
              </div>
              <RatingStars rating={4.8} className="justify-center" />
            </div>

            <div className="mt-6 space-y-3 text-left">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Review Cycle</span>
                <span className="font-medium text-slate-800">Q3 2026</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Status</span>
                <Badge variant="success">Completed</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Info */}
        <Card className="flex-1">
          <div className="border-b border-slate-100 w-full overflow-x-auto">
            <div className="flex px-2 min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id 
                      ? 'border-primary-500 text-primary-600' 
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <CardContent className="p-6">
            {activeTab === 'summary' && (
              <div className="space-y-6">
                <div className="bg-primary-50/50 border border-primary-100 rounded-xl p-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <BrainCircuit className="w-24 h-24 text-primary-600" />
                  </div>
                  <h3 className="flex items-center gap-2 font-semibold text-primary-900 mb-3">
                    <BrainCircuit className="w-5 h-5" /> AI-Generated Summary
                  </h3>
                  <p className="text-sm text-primary-800 leading-relaxed text-pretty relative z-10">
                    Sarah has consistently demonstrated exceptional performance this quarter. Peer feedback highlights her strong technical skills and willingness to mentor junior engineers. Her manager praised her leadership on the recent UI rewrite, noting it was delivered ahead of schedule. A recurring theme in her feedback is her highly positive attitude and fast resolution of critical bugs. No significant areas of improvement were widely cited, making her a top performer.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: "Technical Skills", score: 4.9 },
                    { label: "Communication", score: 4.7 },
                    { label: "Leadership", score: 4.5 },
                    { label: "Goal Attainment", score: 5.0 },
                  ].map((skill, i) => (
                    <div key={i} className="p-4 border border-slate-100 rounded-lg bg-slate-50/50">
                      <p className="text-xs text-slate-500 mb-1">{skill.label}</p>
                      <div className="flex items-end gap-2">
                        <span className="text-xl font-bold text-slate-800">{skill.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab !== 'summary' && (
              <div className="text-center py-12 text-slate-400">
                <p className="font-medium text-slate-600 mb-2">Metrics for {tabs.find(t => t.id === activeTab).label}</p>
                <p className="text-sm">Content visualization goes here.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
